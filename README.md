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
