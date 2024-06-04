import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TalkInput from '../components/TalkInput';
import ThreadList from '../components/ThreadList';
import asyncUsersAndThreads from '../states/shared/action';
import {
  asyncAddTalk,
  asyncUpVoteThread,
  asyncDownVoteThread,
  asyncNeturalizeVoteThread,
} from '../states/threads/action';

function HomePage() {
  const {
    threads = [],
    users = [],
    authUser,
  } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncUsersAndThreads());
  }, [dispatch]);

  const onAddTalk = (title, body, category) => {
    dispatch(asyncAddTalk({ title, body, category }));
  };

  const onUpVoteThread = (id) => {
    dispatch(asyncUpVoteThread(id));
  };

  const onDownVoteThread = (id) => {
    dispatch(asyncDownVoteThread(id));
  };

  const onNeutralizeVoteThread = (id) => {
    dispatch(asyncNeturalizeVoteThread(id));
  };

  const threadList = threads.map((thread) => ({
    ...thread,
    threadOwner: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));

  return (
    <section className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-md">
        <TalkInput addTalk={onAddTalk} />
      </div>
      <div className="w-full max-w-2xl mt-6">
        <ThreadList
          thread={threadList}
          upVote={onUpVoteThread}
          downVote={onDownVoteThread}
          neutralizeVote={onNeutralizeVoteThread}
        />
      </div>
    </section>
  );
}

export default HomePage;
