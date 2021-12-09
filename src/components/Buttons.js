import React from 'react';

function Buttons({ start, stop, reset, wait }) {
  return (
    <div>
      <button
        className={'btn btn-outline-success btn-lg  mybtn start'}
        onClick={start}>
        Start
      </button>
      <button
        className={'display wait'}
        onDoubleClick={stop}>
        Wait
      </button>
      <button className="btn btn-outline-info mybtn btn-lg reset" onClick={reset}>
        Reset
      </button>
      <button className="btn btn-outline-info mybtn btn-lg clear" onClick={wait}>
        Clear
      </button>
    </div>
  );
}

export default Buttons;
