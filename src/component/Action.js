import React from 'react'

const Action = (props) => {
  return (
    <div>
      <button onClick={props.handlePick} disabled={!props.hasOption}>
        what should i do?
      </button>
    </div>
  );
};

export default Action