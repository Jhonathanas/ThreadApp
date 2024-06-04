import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import VoteButton from './VoteButton';
import postedAt from '../utils';

export default function CommentItem({
  id,
  content,
  createdAt,
  owner,
  upVotesBy,
  downVotesBy,
  upVote,
  downVote,
  neturalizeVote,
  authUser,
}) {
  return (
    <div className="bg-white shadow-sm rounded-lg p-4 mb-4">
      <div className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img
              alt="Avatar Icon"
              src={owner.avatar}
              className="w-8 h-8 rounded-full"
            />
            <div className="font-bold text-gray-800">{owner.name}</div>
          </div>
          <span className="text-gray-500 text-sm">{postedAt(createdAt)}</span>
        </div>
        <div className="mt-2 text-gray-700">{parse(content)}</div>
      </div>
      <div className="flex justify-start mt-4 space-x-4">
        <VoteButton
          id={id}
          authUser={authUser}
          upVote={upVote}
          downVote={downVote}
          neturalizeVote={neturalizeVote}
          upVotesBy={upVotesBy}
          downVotesBy={downVotesBy}
        />
      </div>
      <hr className="border-t mt-4" />
    </div>
  );
}

CommentItem.propTypes = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.instanceOf(Object).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neturalizeVote: PropTypes.func.isRequired,
  authUser: PropTypes.string.isRequired,
};
