# Papers

A review aid for major papers, by topic. Live at https://josephwroot.github.io/apps/papers/ — open it in Safari and use Share → Add to Home Screen. Works offline once installed.

Each entry is one paper or a series, written into the same slots every time: question, setting, result, what does the work, proof idea, why it matters, connections. In **Quiz** mode the slots are hidden until tapped, so the routine is: open an entry, try to state the setting, the result and the proof idea, then reveal and check. **Read** mode shows everything. There is no schedule and no scoring.

## Adding entries

All content is in `papers.md`. The format is described in the comment at the top of that file: `# Topic` starts a topic (the lines after it are the topic's story), `## Title` starts an entry, and a line beginning `Papers:`, `Question:`, `Setting:`, `Result:`, `Work:`, `Proof:`, `Matters:`, `Connections:` or `Notes:` starts a slot. Math is LaTeX between `$` or `$$`, rendered by KaTeX. Entries appear in file order, and `[[Entry title]]` links to another entry.

Edit the file on GitHub (or ask Claude to add an entry); the app fetches it fresh on each launch.

## Files

- `index.html`, `app.js` — the app
- `papers.md` — the content
- `katex/` — KaTeX 0.16.11 (MIT), vendored so math renders offline
- `sw.js`, `manifest.webmanifest`, `icons/` — home-screen install and offline cache
