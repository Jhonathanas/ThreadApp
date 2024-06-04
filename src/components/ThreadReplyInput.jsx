import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ThreadReplyInput({ commentThread }) {
  const [text, setText] = useState('');
  function commentHandler() {
    if (text.trim()) {
      commentThread(text);
      setText('');
    }
  }

  function handleTextChange({ target }) {
    if (target.value.length <= 320) {
      setText(target.value);
    }
  }

  return (
    <div className="flex flex-col mt-4 p-4 border border-gray-300 rounded-lg bg-white">
      <textarea
        type="text"
        placeholder="Talk your reply"
        value={text}
        onChange={handleTextChange}
        className="w-full h-24 p-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:border-blue-500"
      />
      <p className="text-sm text-gray-500 mt-1">
        <strong>{text.length}</strong>
        /320
      </p>
      <button
        type="submit"
        onClick={commentHandler}
        className="self-end px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Reply
      </button>
    </div>
  );
}

ThreadReplyInput.propTypes = {
  commentThread: PropTypes.func.isRequired,
};

export default ThreadReplyInput;
