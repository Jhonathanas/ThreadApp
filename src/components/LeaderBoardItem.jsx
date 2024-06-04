import React from 'react';
import PropTypes, { string } from 'prop-types';

export default function LeaderBoardItem({ user, score }) {
  return (
    <div className="flex justify-between items-center border-b border-gray-200 py-4 max-w-3xl mx-auto px-4 bg-white rounded-lg shadow-md">
      <div className="flex items-center ">
        <img className="w-10 h-10 rounded-full mr-4" src={user.avatar} alt={user.name} />
        <div>
          <p className="text-lg font-medium text-gray-900">{user.name}</p>
        </div>
      </div>
      <div className="ml-4">
        <p className="text-lg font-medium text-gray-900">{score}</p>
      </div>
    </div>
  );
}

LeaderBoardItem.propTypes = {
  score: PropTypes.number.isRequired,
  user: PropTypes.arrayOf(string).isRequired,
};
