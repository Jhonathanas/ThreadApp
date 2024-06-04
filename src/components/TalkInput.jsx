import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { GrNotes } from 'react-icons/gr';
import { BiCategory } from 'react-icons/bi';

function TalkInput({ addTalk }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [category, setCategory] = useState('');

  function handleAddTalk() {
    if (title.trim() && body.trim() && category.trim()) {
      addTalk(title, body, category);
      setTitle('');
      setBody('');
      setCategory('');
    }
  }

  return (
    <>
      <h1 className="items-center gap-2 p-2 md:text-xl lg:text-2xl flex">
        <GrNotes />
        Make a New Thread
      </h1>
      <div className="talk-input bg-white p-4 rounded shadow-sm">
        <div className="flex flex-col md:flex-row md:space-x-4 mb-4 items-center">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="flex-1 p-1 mb-2 md:mb-0 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
          />
          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="flex-1 p-1 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
          />
          <BiCategory />
        </div>
        <textarea
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="w-full p-1 mb-2 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
          rows="3"
        />
        <button
          type="submit"
          onClick={handleAddTalk}
          className="w-full bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
        >
          Add Talk
        </button>
      </div>
    </>
  );
}

TalkInput.propTypes = {
  addTalk: PropTypes.func.isRequired,
};

export default TalkInput;
