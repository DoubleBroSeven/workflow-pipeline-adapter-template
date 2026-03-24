/**
 * Plugin metadata — tells workflow-pipeline what this adapter provides
 * and what config it needs.
 *
 * Update ALL of these fields for your provider.
 */

// NOTE: These types come from workflow-pipeline as a peer dependency.
// For development, you can define them locally until the peer dep is installed.

export interface AdapterPluginMeta {
  name: string;
  displayName: string;
  provides: Array<'ticketing' | 'gitHost' | 'ci' | 'dashboard' | 'notifications' | 'calendar'>;
  configRequirements: string[];
  configPrompts: Array<{
    key: string;
    message: string;
    type: 'input' | 'password';
    validate?: (value: string) => true | string;
    default?: string;
  }>;
}

export const meta: AdapterPluginMeta = {
  // Change this to your provider's short name (used in config: ticketing: "your-name")
  name: 'your-name',

  // Display name shown in the init wizard
  displayName: 'Your Provider',

  // Which adapter types this plugin implements
  // Options: 'ticketing', 'gitHost', 'ci', 'dashboard', 'notifications', 'calendar'
  provides: ['ticketing'],

  // Config keys this adapter needs (dot-path into global/project config)
  configRequirements: [
    'apiTokens.yourname',
  ],

  // Prompts shown during `workflow-pipeline init --interactive`
  configPrompts: [
    {
      key: 'apiTokens.yourname',
      message: 'Your Provider API token:',
      type: 'password',
      validate: (v: string) => v.length > 0 || 'API token is required',
    },
    // Add more prompts for any config your adapter needs
  ],
};
