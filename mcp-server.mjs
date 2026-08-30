#!/usr/bin/env node
/**
 * MOVED to ~/laserbrain/javascript/mcp-server.mjs on 2026-08-30.
 *
 * A shim, not a copy. A copy is what this file was, and it is the pattern this repository
 * has been bitten by five times: two files that must agree, with nothing making them agree.
 * So anything still wired to this path fails HERE and says where to look, rather than
 * quietly running a server that has stopped receiving fixes.
 *
 * WHY IT WAS RETIRED, specifically. On 2026-08-30 this file and the laserbrain one differed
 * by two lines:
 *
 *     here:       REMOTE = ... || 'https://laserbrain-mcp.degibug.workers.dev'
 *     laserbrain: REMOTE = ... || 'https://api.phronesis.world'
 *
 * A personal workers.dev subdomain against the API's own name. Both served the same 32 tools
 * and both loaded grammar 2.0.0, so the switch cost nothing — the only thing this copy still
 * contributed was a second place for the default host to be wrong.
 *
 * The session that retired it was itself running this file while editing the other one, which
 * is how the divergence was noticed at all: the harness measuring the work reported grammar
 * 1.21.0 from memory while the repository had moved to 2.0.0 three versions earlier.
 *
 * TO FIX A HOST WIRED TO THIS PATH, in ~/.claude.json or equivalent:
 *
 *     "laserbrain": {
 *       "type": "stdio",
 *       "command": "node",
 *       "args": ["<your home>/laserbrain/javascript/mcp-server.mjs"]
 *     }
 *
 * The grammar, the corpus and the studies still live here. Only the server moved.
 */
process.stderr.write(
  'laserbrain: the MCP server moved to ~/laserbrain/javascript/mcp-server.mjs on 2026-08-30.\n' +
  'This copy defaulted to a personal workers.dev subdomain and no longer receives fixes.\n' +
  'Update the "args" path in your MCP config. Same 32 tools, same grammar.\n',
)
process.exit(1)
