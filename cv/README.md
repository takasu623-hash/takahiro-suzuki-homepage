# CV (Curriculum Vitae) workflow

> **⚠️ Currently inactive.** `public/CV_Takahiro_Suzuki.pdf` is the original
> Word-formatted PDF the user uploaded; the Markdown→PDF pipeline below is
> kept as a future option but **`bash cv/build.sh` would overwrite the
> original PDF — do not run it without confirming with the user.**

The CV is maintained as a Markdown source of truth. The PDF served at
`/CV_Takahiro_Suzuki.pdf` on the live site is a generated artifact.

## Files

| File | Purpose |
|---|---|
| `cv/cv-source.md` | **Source of truth.** Edit this to update the CV. |
| `cv/cv-style.css` | Print stylesheet (typography, A4 layout, table styles). |
| `cv/build.sh` | Regenerates `public/CV_Takahiro_Suzuki.pdf` from the source. |
| `cv/cv.html`, `cv/cv.pdf` | Build artifacts (gitignored). |
| `public/CV_Takahiro_Suzuki.pdf` | Public download — committed to the repo. |

## Updating the CV

1. Edit `cv/cv-source.md` (add a new publication, presentation, etc.).
2. From the project root, run:
   ```bash
   bash cv/build.sh
   ```
3. Commit both source and PDF, then push:
   ```bash
   git add cv/cv-source.md public/CV_Takahiro_Suzuki.pdf
   git commit -m "Update CV — <what you added>"
   git push
   ```
4. Vercel auto-deploys; the new PDF is live within a few minutes.

## Dependencies

- **Pandoc** (3.x) — installed at `~/.local/bin/pandoc`. Override with
  `PANDOC=/path/to/pandoc bash cv/build.sh` if needed.
- **Google Chrome** — used in headless mode to print the styled HTML to
  PDF. Override with `CHROME=...` if Chrome is installed elsewhere.

No LaTeX distribution is required.

## Style conventions enforced

- **Citations:** Vancouver style — `Authors. Title. Journal. Year;Vol(Issue):pages.`
- **Paper titles:** sentence case (only first word and proper nouns capitalized).
- **Author lists:** `LastName Initial`, comma-separated, no `and` before the last author.
- **Conferences and presentations:** consistent `Symposium / Oral / Poster /
  Moderated Poster / Invited Lecture` formats.
- **Italics for journal names** (Markdown `*Journal Name*`) and for *species*
  names in microbiology citations.
