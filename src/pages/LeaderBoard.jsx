import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncPopulateLeaderboards } from '../states/leaderboards/action';
import LeaderBoardItem from '../components/LeaderBoardItem';

function LeaderBoard() {
  const dispatch = useDispatch();
  const { leaderboards = [] } = useSelector((states) => states);

  useEffect(() => {
    dispatch(asyncPopulateLeaderboards());
  }, [dispatch]);

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Leaderboards</h1>
        <div className="grid grid-cols-12 gap-6 mb-4">
          <div className="col-span-10">
            <h2 className="text-xl font-semibold text-gray-900">10 Pengguna Teratas</h2>
          </div>
          <div className="col-span-2">
            <h2 className="text-xl font-semibold text-gray-900">Skor</h2>
          </div>
        </div>
        {leaderboards.map(({ user, score }) => (
          <LeaderBoardItem key={user.id} user={user} score={score} />
        ))}
      </div>
    </div>
  );
}

export default LeaderBoard;
