import React from 'react';
import PropTypes from 'prop-types';
import ThreadItem from './ThreadItem';

function ThreadList({
  thread, upVote, downVote, neturalizeVote,
}) {
  return (
    <div className="talks-list">
      {
         thread.map((th) => (
           <ThreadItem
             key={th.id}
             {...th}
             upVote={upVote}
             downVote={downVote}
             neturalizeVote={neturalizeVote}
           />
         ))
      }
    </div>
  );
}

ThreadList.propTypes = {
  thread: PropTypes.arrayOf(PropTypes.string).isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neturalizeVote: PropTypes.func.isRequired,
};

export default ThreadList;
