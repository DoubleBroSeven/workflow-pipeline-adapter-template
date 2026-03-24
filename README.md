# workflow-pipeline-adapter-template

Template repo for building [workflow-pipeline](https://github.com/DoubleBroSeven/workflow-pipeline) adapter plugins.

## Getting Started

1. **Fork this repo** and rename it to `workflow-pipeline-adapter-{your-provider}`
2. Update `src/meta.ts` with your provider's name, display name, and config requirements
3. Implement the adapter methods in `src/ticketing.ts` (and optionally `git-host.ts`, `ci.ts`, etc.)
4. Write tests in `tests/`
5. Publish to npm: `npm publish`

Users install your adapter with:

```bash
npm install -g workflow-pipeline-adapter-your-provider
```

## Adapter Types

A single plugin can provide one or more adapter types:

| Type | Factory | Interface |
|---|---|---|
| Ticketing | `createTicketingAdapter` | Epic/ticket CRUD, status transitions |
| Git Host | `createGitHostAdapter` | Branches, PRs, issues |
| CI/CD | `createCIAdapter` | Generate CI config, gate workflows |
| Dashboard | `createDashboardAdapter` | Render/publish pipeline status |
| Notifications | `createNotificationsAdapter` | Send messages |
| Calendar | `createCalendarAdapter` | Calendar event management |

Update `meta.provides` in `src/meta.ts` to declare which types your plugin implements, and export the corresponding factory functions from `src/index.ts`.

## Development

```bash
npm install
npm test           # run tests
npm run build      # compile TypeScript
npm run dev        # watch mode
```

## Full Documentation

See the [Plugin Author Guide](https://github.com/DoubleBroSeven/workflow-pipeline/blob/development/docs/plugin-guide.md) for:
- Complete `WorkflowAdapter` interface
- Status mapping between workflow-pipeline and your provider
- Shared helpers (`buildIssueBody`, `parseIssueBody`)
- Testing patterns and contract tests
- Discovery and auto-install mechanics

## License

MIT
