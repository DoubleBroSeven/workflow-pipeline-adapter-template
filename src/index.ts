/**
 * workflow-pipeline adapter plugin entry point.
 *
 * Rename this package to: workflow-pipeline-adapter-{your-provider}
 *
 * This template shows how to build a multi-type plugin that provides
 * ticketing and (optionally) git hosting. Delete the types you don't need.
 *
 * See: https://github.com/DoubleBroSeven/workflow-pipeline/blob/development/docs/plugin-guide.md
 */

// Re-export the types your consumers need
export { meta } from './meta.js';
export { createTicketingAdapter } from './ticketing.js';
// Uncomment these as you implement more adapter types:
// export { createGitHostAdapter } from './git-host.js';
// export { createCIAdapter } from './ci.js';
// export { createDashboardAdapter } from './dashboard.js';
// export { createNotificationsAdapter } from './notifications.js';
