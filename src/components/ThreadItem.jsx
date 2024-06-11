import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import parse from 'html-react-parser';
import VoteButton from './VoteButton';
import postedAt from '../utils';

function ThreadItem({
  id,
  title,
  body,
  threadOwner,
  createdAt,
  category,
  upVotesBy,
  downVotesBy,
  upVote,
  downVote,
  neturalizeVote,
  totalComments,
  authUser,
}) {
  const navigate = useNavigate();
  const onTalkClick = () => {
    navigate(`/thread/${id}`);
  };
  return (
    <div
      role="button"
      tabIndex={0}
      className="flex p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer mb-4"
    >
      <div className="w-16 h-16 mr-4">
        <img
          className="w-full h-full rounded-full object-cover"
          src={threadOwner.avatar}
          alt={threadOwner.name}
        />
      </div>
      <div className="flex-1">
        <header className="mb-2">
          <div className="flex items-center space-x-2">
            <p className="font-semibold text-lg">{threadOwner.name}</p>
            <p className="text-gray-500">
              @
              {threadOwner.id}
            </p>
          </div>
        </header>
        <div onClick={onTalkClick} onKeyDown={onTalkClick}>
          <article>
            <h3 className="text-xl font-semibold mb-1">{title}</h3>
            <p className="text-gray-700 mb-2">{parse(body)}</p>
            <p className="text-sm text-blue-500">
              #
              {category}
            </p>
          </article>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center mt-4">
            <VoteButton
              id={id}
              authUser={authUser}
              upVote={upVote}
              downVote={downVote}
              neutralizeVote={neturalizeVote}
              upVotesBy={upVotesBy}
              downVotesBy={downVotesBy}
            />
          </div>
          <div className="flex items-center text-gray-500 mt-2">
            <span className="ml-1 text-sm">
              Comments:
              {totalComments}
            </span>
          </div>
          <div className="flex items-center text-gray-500 mt-2">
            <span className="ml-1 text-sm">{postedAt(createdAt)}</span>
            <span className="ml-2 text-sm">
              Dibuat Oleh
              {threadOwner.name}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

ThreadItem.propTypes = {
  authUser: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neturalizeVote: PropTypes.func.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  threadOwner: PropTypes.instanceOf(Object).isRequired,
};

export default ThreadItem;
