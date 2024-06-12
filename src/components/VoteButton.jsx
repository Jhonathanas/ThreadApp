import React from 'react';
import PropTypes from 'prop-types';
import {
  FaThumbsUp,
  FaRegThumbsUp,
  FaThumbsDown,
  FaRegThumbsDown,
} from 'react-icons/fa';

function VoteButton({
  id,
  upVote,
  downVote,
  neutralizeVote,
  upVotesBy = [],
  downVotesBy = [],
  authUser,
}) {
  const isUpVoted = upVotesBy.includes(authUser);
  const isDownVoted = downVotesBy.includes(authUser);

  const onUpVoteClick = () => {
    if (isUpVoted) {
      neutralizeVote(id);
    } else {
      upVote(id);
    }
  };

  const onDownVoteClick = () => {
    if (isDownVoted) {
      neutralizeVote(id);
    } else {
      downVote(id);
    }
  };

  return (
    <div className="flex items-center">
      <button
        type="button"
        onClick={onUpVoteClick}
        className="flex items-center text-blue-500 hover:text-blue-700 mr-2"
      >
        {isUpVoted ? <FaThumbsUp /> : <FaRegThumbsUp />}
        <span className="ml-1">{upVotesBy.length}</span>
      </button>
      <button
        type="button"
        onClick={onDownVoteClick}
        className="flex items-center text-red-500 hover:text-red-700"
      >
        {isDownVoted ? <FaThumbsDown /> : <FaRegThumbsDown />}
        <span className="ml-1">{downVotesBy.length}</span>
      </button>
    </div>
  );
}

VoteButton.propTypes = {
  id: PropTypes.string.isRequired,
  neutralizeVote: PropTypes.func,
  upVote: PropTypes.func,
  downVote: PropTypes.func,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  authUser: PropTypes.string.isRequired,
};

VoteButton.defaultProps = {
  neutralizeVote: () => {},
  upVote: () => {},
  downVote: () => {},
};

export default VoteButton;
