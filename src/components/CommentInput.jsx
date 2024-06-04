import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

export default function CommentInput({ addComment }) {
  const [comment, onCommentChange, setComment] = useInput('');
  const onCommentSubmit = () => {
    addComment(comment);
    setComment('');
  };
  return (
    <>
      <span className="ml-2 font-bold text-sm text-primary">Beri Komentar</span>
      <div className="ml-2 mt-1 mb-5">
        <textarea
          id="comment-input"
          className="w-full max-w-full h-auto p-2 border border-gray-300 rounded-md resize-none"
          rows="4"
          value={comment}
          onChange={onCommentChange}
        />
        <button
          type="submit"
          className="mt-1 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          onClick={onCommentSubmit}
        >
          Kirim
        </button>
      </div>
    </>
  );
}

CommentInput.propTypes = {
  addComment: PropTypes.func.isRequired,
};
