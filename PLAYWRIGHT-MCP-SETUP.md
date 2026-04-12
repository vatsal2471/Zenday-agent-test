# Enabling Playwright MCP for Claude Code

This lets Claude control a real browser on your machine — visit websites, take screenshots, extract text, etc. Unblocks the website-teardown work (and future tasks like QA'ing your own site).

---

## Step 1 — Prereqs (one time)

You need Node.js 18+ installed. Check:

```bash
node --version
```

If missing, install from nodejs.org or `brew install node`.

---

## Step 2 — Install the Playwright MCP server globally

This lives on your machine. The server is published by Microsoft at `@playwright/mcp`.

```bash
npx -y @playwright/mcp@latest --help
```

Running `npx -y` once will download and cache the package so it's ready to go.

Then install the Chromium binary it uses:

```bash
npx -y playwright install chromium
```

---

## Step 3 — Add it to your Claude Code MCP config

### If you use **Claude Code CLI** (the `claude` command):

Run this from anywhere:

```bash
claude mcp add playwright -- npx -y @playwright/mcp@latest
```

That's it. Type `claude` to start a new session and the `playwright` tools will be available.

### If you use **Claude Desktop** (the app):

Open the config file for your OS:

- **macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows:** `%APPDATA%\Claude\claude_desktop_config.json`
- **Linux:** `~/.config/Claude/claude_desktop_config.json`

If the file doesn't exist, create it. Add (or merge) this:

```json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": ["-y", "@playwright/mcp@latest"]
    }
  }
}
```

If you already have `mcpServers` entries, just add `"playwright": {...}` alongside them.

**Quit Claude Desktop completely and reopen.** (Cmd+Q on Mac — closing the window isn't enough.)

### If you use **Claude Code on the web** (the one you're using now):

Web sessions inherit MCP config from the dispatcher that launched them. If this was launched from a platform (Codegen, a GitHub Action, your own dispatcher), you'd need to update that platform's MCP config — I can't speak to the exact steps without knowing which platform. Look for "MCP servers" or "Tools configuration" in that platform's settings.

---

## Step 4 — Verify it works

Start a fresh Claude Code session. Ask me:

> "Do you have Playwright tools?"

If I reply with a list of `mcp__playwright__*` tools (navigate, screenshot, click, etc.), you're good.

---

## Step 5 — What I can do once it's enabled

- **Visit any public URL** and extract the rendered HTML, text, or structured content
- **Take full-page screenshots** of your site, competitor sites, anything
- **Read the DOM** to extract exact headlines, copy, layout
- **QA your own deployed site** after you ship changes

So for this specific task (the competitor teardown), I'd be able to run:

1. Navigate to `soraban.com`, screenshot the hero
2. Navigate to `filed.com`, screenshot the hero
3. Navigate to `numeric.io`, screenshot the hero
4. Analyze all three against Zenday and write the teardown

...without you doing anything.

---

## Notes

- Playwright MCP runs Chromium **on your local machine**, so external websites work fine. It doesn't go through the sandbox proxy that's blocking this session.
- There's no security risk — the MCP server only runs when Claude requests it, and it uses its own Chromium profile (not your actual Chrome with your logins).
- If you use the CLI method (`claude mcp add`), you can also remove it any time: `claude mcp remove playwright`.
