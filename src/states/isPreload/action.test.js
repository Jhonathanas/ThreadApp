import { 
  describe, it, expect, beforeEach, vi
} from 'vitest';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { setAuthUserActionCreator } from '../authUser/action';
import { setIsPreloadActionCreator, asyncPreloadProcess } from './action';

// Mock the necessary modules
vi.mock('react-redux-loading-bar', () => ({
  showLoading: vi.fn(() => ({ type: 'SHOW_LOADING' })),
  hideLoading: vi.fn(() => ({ type: 'HIDE_LOADING' })),
}));

vi.mock('../../utils/api', async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    default: {
      ...actual.default,
      getOwnProfile: vi.fn(),
    },
  };
});

vi.mock('../authUser/action', () => ({
  setAuthUserActionCreator: vi.fn((authUser) => ({
    type: 'SET_AUTH_USER',
    payload: authUser,
  })),
}));

describe('asyncPreloadProcess', () => {
  let dispatch;

  beforeEach(() => {
    dispatch = vi.fn();
  });

  it('should handle successful profile fetching', async () => {
    const mockProfile = { id: 1, name: 'John Doe' };
    api.getOwnProfile.mockResolvedValueOnce(mockProfile);

    await asyncPreloadProcess()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(setAuthUserActionCreator(mockProfile));
    expect(dispatch).toHaveBeenCalledWith(setIsPreloadActionCreator(false));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should handle profile fetching failure', async () => {
    api.getOwnProfile.mockRejectedValueOnce(new Error('Failed to fetch profile'));

    await asyncPreloadProcess()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(setAuthUserActionCreator(null));
    expect(dispatch).toHaveBeenCalledWith(setIsPreloadActionCreator(false));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});
