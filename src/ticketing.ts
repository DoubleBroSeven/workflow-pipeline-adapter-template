/**
 * Ticketing adapter — implements the WorkflowAdapter interface.
 *
 * This is where your provider-specific logic lives.
 * Replace the TODOs with real API calls to your provider.
 */

// Types — these match workflow-pipeline's core types.
// In a real plugin with the peer dep installed, import from 'workflow-pipeline'.

interface Epic {
  id: string;
  title: string;
  status: 'pending' | 'approved' | 'complete';
  effort: 'low' | 'medium' | 'high';
  impact: 'low' | 'medium' | 'high';
  acStatus: 'pending' | 'ready';
  sourceTaskIds: string[];
  featureBranch: string;
  externalRef?: string;
  createdAt: string;
  updatedAt: string;
  body?: string;
}

interface Ticket {
  id: string;
  epicId: string;
  title: string;
  status: 'backlog' | 'in-progress' | 'done';
  acStatus: 'pending' | 'ready';
  dependsOn: string[];
  blocks: string[];
  branch: string;
  prTarget: string;
  effort: 'low' | 'medium' | 'high';
  createdAt: string;
  updatedAt: string;
  body?: string;
}

interface StatusCounts {
  epics: { pending: number; approved: number; complete: number };
  tickets: { backlog: number; inProgress: number; done: number };
}

interface WorkflowAdapter {
  init(): Promise<void>;
  createTicket(options: { title: string; body: string; epicId?: string; labels?: string[]; priority?: 'high' | 'medium' | 'low' }): Promise<{ id: string; url: string }>;
  getTicket(id: string): Promise<{ id: string; title: string; status: string; assignee?: string }>;
  getFullTicket(id: string): Promise<Ticket>;
  getAllTickets(): Promise<Ticket[]>;
  updateTicket(id: string, updates: { status?: string; assignee?: string; labels?: string[] }): Promise<void>;
  updateTicketAcStatus(id: string, to: 'pending' | 'ready'): Promise<void>;
  listTickets(filter?: { epicId?: string; status?: string; assignee?: string }): Promise<Array<{ id: string; title: string; status: string }>>;
  createEpic(options: { id: string; title: string; effort?: 'high' | 'medium' | 'low'; impact?: 'high' | 'medium' | 'low'; sourceTaskIds?: string[] }): Promise<{ id: string }>;
  getEpic(id: string): Promise<{ id: string; title: string; status: string }>;
  getFullEpic(id: string): Promise<Epic>;
  updateEpic(id: string, updates: { status?: string; title?: string }): Promise<void>;
  listEpics(filter?: { status?: string }): Promise<Array<{ id: string; title: string; status: string }>>;
  getStatusCounts(): Promise<StatusCounts>;
}

// --- Your adapter implementation ---

class YourProviderAdapter implements WorkflowAdapter {
  private apiToken: string;

  constructor(apiToken: string) {
    this.apiToken = apiToken;
  }

  async init(): Promise<void> {
    // TODO: Validate connection, create labels, etc.
  }

  async createTicket(options: { title: string; body: string; epicId?: string; labels?: string[]; priority?: 'high' | 'medium' | 'low' }): Promise<{ id: string; url: string }> {
    // TODO: Create a ticket in your provider
    throw new Error('Not implemented: createTicket');
  }

  async getTicket(id: string): Promise<{ id: string; title: string; status: string; assignee?: string }> {
    // TODO: Fetch ticket summary from your provider
    throw new Error('Not implemented: getTicket');
  }

  async getFullTicket(id: string): Promise<Ticket> {
    // TODO: Fetch full ticket with all fields
    throw new Error('Not implemented: getFullTicket');
  }

  async getAllTickets(): Promise<Ticket[]> {
    // TODO: Fetch all tickets
    throw new Error('Not implemented: getAllTickets');
  }

  async updateTicket(id: string, updates: { status?: string; assignee?: string; labels?: string[] }): Promise<void> {
    // TODO: Update ticket in your provider
    throw new Error('Not implemented: updateTicket');
  }

  async updateTicketAcStatus(id: string, to: 'pending' | 'ready'): Promise<void> {
    // TODO: Update acceptance criteria status
    throw new Error('Not implemented: updateTicketAcStatus');
  }

  async listTickets(filter?: { epicId?: string; status?: string; assignee?: string }): Promise<Array<{ id: string; title: string; status: string }>> {
    // TODO: List tickets with optional filters
    throw new Error('Not implemented: listTickets');
  }

  async createEpic(options: { id: string; title: string; effort?: 'high' | 'medium' | 'low'; impact?: 'high' | 'medium' | 'low'; sourceTaskIds?: string[] }): Promise<{ id: string }> {
    // TODO: Create an epic in your provider
    throw new Error('Not implemented: createEpic');
  }

  async getEpic(id: string): Promise<{ id: string; title: string; status: string }> {
    // TODO: Fetch epic summary
    throw new Error('Not implemented: getEpic');
  }

  async getFullEpic(id: string): Promise<Epic> {
    // TODO: Fetch full epic with all fields
    throw new Error('Not implemented: getFullEpic');
  }

  async updateEpic(id: string, updates: { status?: string; title?: string }): Promise<void> {
    // TODO: Update epic in your provider
    throw new Error('Not implemented: updateEpic');
  }

  async listEpics(filter?: { status?: string }): Promise<Array<{ id: string; title: string; status: string }>> {
    // TODO: List epics with optional filter
    throw new Error('Not implemented: listEpics');
  }

  async getStatusCounts(): Promise<StatusCounts> {
    // TODO: Return counts by status
    throw new Error('Not implemented: getStatusCounts');
  }
}

// --- Factory function (exported from index.ts) ---

export async function createTicketingAdapter(
  globalConfig: Record<string, unknown>,
  projectConfig: Record<string, unknown>,
  projectDir: string,
): Promise<WorkflowAdapter> {
  const apiTokens = globalConfig['apiTokens'] as Record<string, string> | undefined;
  const apiToken = apiTokens?.['yourname'];

  if (!apiToken) {
    throw new Error(
      'API token not configured. Run: workflow-pipeline config apiTokens.yourname <token>',
    );
  }

  const adapter = new YourProviderAdapter(apiToken);
  await adapter.init();
  return adapter;
}
