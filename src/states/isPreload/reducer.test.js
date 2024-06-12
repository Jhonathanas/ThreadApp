/**
 * Testing Scenario
 *
 * - isPreloadReducer
 *   - should return the initial state when no action is provided
 *   - should handle SET_IS_PRELOAD action
 *   - should return the current state when an unknown action is provided
 */

import { describe, it, expect } from 'vitest';
import isPreloadReducer from './reducer'; // Adjust the import path if necessary
import { ActionType } from './action'; // Adjust the import path if necessary

describe('isPreloadReducer', () => {
  it('should return the initial state when no action is provided', () => {
    const initialState = true;
    const state = isPreloadReducer(undefined, {});
    expect(state).toBe(initialState);
  });

  it('should handle SET_IS_PRELOAD action', () => {
    const isPreload = false;
    const action = { type: ActionType.SET_IS_PRELOAD, payload: { isPreload } };
    const state = isPreloadReducer(true, action);
    expect(state).toBe(isPreload);
  });

  it('should return the current state when an unknown action is provided', () => {
    const initialState = true;
    const action = { type: 'UNKNOWN_ACTION' };
    const state = isPreloadReducer(initialState, action);
    expect(state).toBe(initialState);
  });
});
