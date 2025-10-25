# money-maker

Repository hygiene and safety are configured:

- .gitignore prevents committing env files, build outputs, editor cruft
- pre-commit with secret scanning (gitleaks) enforced locally and in CI
- GitHub Actions: pre-commit checks and gitleaks secret scan on push/PR

## Getting started

1. Install pre-commit (macOS): `brew install pre-commit`
2. Install hooks: `pre-commit install`
3. Optional: local secret scan
   - With gitleaks: `brew install gitleaks && gitleaks detect --no-banner --redact --config=.gitleaks.toml`
   - Or Docker: `docker run --rm -v "$PWD:/repo" ghcr.io/gitleaks/gitleaks:latest detect --source=/repo --no-banner --redact --config=/repo/.gitleaks.toml`

## Environment variables

Create a local `.env` (do not commit). You can add placeholders to `.env.example` if needed, but never place secrets in the repo.

## Try VibeKanban

- Quick launch: `npm run kanban` (opens `https://www.vibekanban.com/` in your browser)
- Direct link: `https://www.vibekanban.com/`

Evaluate before use: see public trust notes and do your own diligence. For background, refer to this scan summary: [Scamadviser overview](https://www.scamadviser.com/check-website/vibekanban-online.pages.dev?utm_source=openai).

### Local self-host option

If you're running a local instance of VibeKanban (commonly served at `http://localhost:5050`):

- Launch local board: `npm run kanban:local`
- Typical flow: start your Vibekanban server, then run the command above to open it.

### Importing tasks from tasks.md (Day 1 example)

We provide a prepared JSON for Day 1 so you can quickly seed your board. In VibeKanban, use the import option (or MCP) to add tasks from `vibekanban/day1-tasks.json`.
