import React from 'react';
import PropTypes from 'prop-types';
import CommentItem from './CommentItem';

export default function CommentsList({
  comments,
  authUser,
  upVoteComment,
  downVoteComment,
  neturalizeVoteComment,
}) {
  return (
    <div>
      {comments.map((comment) => (
        <CommentItem
          {...comment}
          key={comment.id}
          id={comment.id}
          authUser={authUser}
          upVote={upVoteComment}
          downVote={downVoteComment}
          neturalizeVote={neturalizeVoteComment}
        />
      ))}
    </div>
  );
}

CommentsList.propTypes = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  authUser: PropTypes.string.isRequired,
  upVoteComment: PropTypes.func.isRequired,
  downVoteComment: PropTypes.func.isRequired,
  neturalizeVoteComment: PropTypes.func.isRequired,
};
