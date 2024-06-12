/**
 * Testing Scenario
 *
 * - asyncPopulateLeaderboards thunk
 *   - should dispatch action correctly when data fetching success
 *   - should dispatch action and call alert correctly when data fetching failed
 */

import { 
  describe, it, expect, vi, beforeEach, afterEach 
} from 'vitest';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { 
  receiveLeaderboardsActionCreator, 
  asyncPopulateLeaderboards 
} from './action';

const fakeLeaderboardsResponse = [
  { id: 'user-1', name: 'John Doe', score: 100 },
  { id: 'user-2', name: 'Jane Doe', score: 90 },
];

const fakeErrorResponse = new Error('Something went wrong');

describe('asyncPopulateLeaderboards thunk', () => {
  beforeEach(() => {
    // Backup original implementation
    api.originalGetLeaderBoards = api.getLeaderBoards;

    // Mock alert
    global.alert = vi.fn();
  });

  afterEach(() => {
    // Restore original implementation
    api.getLeaderBoards = api.originalGetLeaderBoards;
    
    // Delete backup
    delete api.originalGetLeaderBoards;

    // Clear alert mock
    delete global.alert;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    // Arrange
    // Stub implementation
    api.getLeaderBoards = vi.fn().mockResolvedValue(fakeLeaderboardsResponse);
    // Mock dispatch
    const dispatch = vi.fn();

    // Action
    await asyncPopulateLeaderboards()(dispatch);

    // Assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      receiveLeaderboardsActionCreator(fakeLeaderboardsResponse)
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    // Arrange
    // Stub implementation
    api.getLeaderBoards = vi.fn().mockRejectedValue(fakeErrorResponse);
    // Mock dispatch
    const dispatch = vi.fn();

    // Action
    await asyncPopulateLeaderboards()(dispatch);

    // Assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(global.alert).toHaveBeenCalledWith(fakeErrorResponse);
  });
});
