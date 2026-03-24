/**
 * Contract tests for your ticketing adapter.
 *
 * These tests verify your adapter implements the WorkflowAdapter interface
 * correctly. Replace the mock setup with your real adapter.
 */

import { describe, it, expect, beforeEach } from 'vitest';
import { createTicketingAdapter } from '../src/ticketing.js';

describe('YourProvider ticketing adapter', () => {
  // TODO: Set up test credentials and mock/sandbox environment
  const testGlobalConfig = {
    apiTokens: { yourname: 'test-token' },
  };
  const testProjectConfig = {};
  const testProjectDir = '/tmp/test';

  describe('contract', () => {
    it('creates an adapter instance', async () => {
      const adapter = await createTicketingAdapter(
        testGlobalConfig,
        testProjectConfig,
        testProjectDir,
      );
      expect(adapter).toBeDefined();
      expect(typeof adapter.init).toBe('function');
      expect(typeof adapter.createTicket).toBe('function');
      expect(typeof adapter.createEpic).toBe('function');
      expect(typeof adapter.getAllTickets).toBe('function');
      expect(typeof adapter.getStatusCounts).toBe('function');
    });

    it('throws when API token is missing', async () => {
      await expect(
        createTicketingAdapter({}, testProjectConfig, testProjectDir),
      ).rejects.toThrow(/token not configured/i);
    });
  });

  // TODO: Add these tests once your adapter is implemented:
  //
  // describe('epic operations', () => {
  //   it('creates and retrieves an epic', async () => { ... });
  //   it('updates epic status', async () => { ... });
  //   it('lists epics with filter', async () => { ... });
  // });
  //
  // describe('ticket operations', () => {
  //   it('creates a ticket under an epic', async () => { ... });
  //   it('updates ticket status', async () => { ... });
  //   it('updates ticket AC status', async () => { ... });
  //   it('lists tickets filtered by epic', async () => { ... });
  //   it('returns correct status counts', async () => { ... });
  // });
});
