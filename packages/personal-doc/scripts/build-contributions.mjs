// Turns a raw GitHub GraphQL contributionsCollection response into the flat
// { total, contributions: [{date, count, level}], updatedAt } shape that
// ContributionHeatmap.jsx reads from /contributions.json.
//
// Levels aren't returned by the API, so they're re-derived here as quartiles
// over this user's own non-zero days — the same idea GitHub's own graph uses,
// just computed locally instead of trusting a magic number from GitHub.
import fs from 'node:fs';

const [, , inputPath, outputPath] = process.argv;
if (!inputPath || !outputPath) {
  console.error('usage: build-contributions.mjs <raw-graphql.json> <contributions.json>');
  process.exit(1);
}

const raw = JSON.parse(fs.readFileSync(inputPath, 'utf8'));
if (raw.errors) {
  console.error('GraphQL errors:', JSON.stringify(raw.errors));
  process.exit(1);
}

const calendar = raw.data.user.contributionsCollection.contributionCalendar;
const days = calendar.weeks.flatMap((w) => w.contributionDays);

const nonZero = days
  .map((d) => d.contributionCount)
  .filter((c) => c > 0)
  .sort((a, b) => a - b);

const quantile = (p) =>
  nonZero.length ? nonZero[Math.min(nonZero.length - 1, Math.floor(p * nonZero.length))] : 0;

const q1 = quantile(0.25);
const q2 = quantile(0.5);
const q3 = quantile(0.75);

function levelFor(count) {
  if (count <= 0) return 0;
  if (count <= q1) return 1;
  if (count <= q2) return 2;
  if (count <= q3) return 3;
  return 4;
}

const contributions = days.map((d) => ({
  date: d.date,
  count: d.contributionCount,
  level: levelFor(d.contributionCount),
}));

const out = {
  total: calendar.totalContributions,
  contributions,
  updatedAt: new Date().toISOString(),
};

fs.writeFileSync(outputPath, `${JSON.stringify(out, null, 2)}\n`);
console.log(`wrote ${outputPath}: total=${out.total} days=${contributions.length}`);
