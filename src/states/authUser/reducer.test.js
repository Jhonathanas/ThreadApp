import { describe, it, expect } from 'vitest';
import authUserReducer from './reducer';
import { ActionType } from './action';

describe('authUserReducer', () => {
  it('should return the initial state when no action is provided', () => {
    const initialState = null;
    const state = authUserReducer(undefined, {});
    expect(state).toBe(initialState);
  });

  it('should handle SET_AUTH_USER action', () => {
    const authUser = { id: 1, name: 'John Doe' };
    const action = { type: ActionType.SET_AUTH_USER, payload: { authUser } };
    const state = authUserReducer(null, action);
    expect(state).toEqual(authUser);
  });

  it('should handle UNSET_AUTH_USER action', () => {
    const initialState = { id: 1, name: 'John Doe' };
    const action = { type: ActionType.UNSET_AUTH_USER };
    const state = authUserReducer(initialState, action);
    expect(state).toBeNull();
  });

  it('should return the current state when an unknown action is provided', () => {
    const initialState = { id: 1, name: 'John Doe' };
    const action = { type: 'UNKNOWN_ACTION' };
    const state = authUserReducer(initialState, action);
    expect(state).toEqual(initialState);
  });
});