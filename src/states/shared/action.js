import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { receiveUsersActionCreator } from '../users/action';
import { receiveThreadActionCreator } from '../threads/action';

function asyncUsersAndThreads() {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const users = await api.getAllUsers();
      const threads = await api.getAllThreads();

      dispatch(receiveUsersActionCreator(users));
      dispatch(receiveThreadActionCreator(threads));
      dispatch(hideLoading());
    } catch (error) {
      alert(error);
    }
    dispatch(hideLoading());
  };
}

export default asyncUsersAndThreads;
