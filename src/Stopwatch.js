import "./App.css";
import React, { useState, useEffect } from "react";
import { interval, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

import Display from "./components/Display";
import Buttons from "./components/Buttons";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [watchOn, setWatchOn] = useState(false);

  useEffect(() => {
    const unsubscribe = new Subject();
    interval(10)
      .pipe(takeUntil(unsubscribe))
      .subscribe(() => {
        if (watchOn) {
          setTime((val) => val + 1);
        }
      });
    return () => {
      unsubscribe.next();
      unsubscribe.complete();
    };
  }, [watchOn]);

  const handleStart = () => {
    setWatchOn(true);
  };

  const handleStop = () => {
    if (time !== 0) {
      setWatchOn(false);
    }
  };

  const handleReset = () => {
    setTime(0);
    setWatchOn(false);
    if (time !== 0) {
      handleStart();
    }
  };

  const handleWait = () => {
    if (time !== 0) {
      setWatchOn(false);
      setTime(0);
    }
  };

   const setTimeOut = () => {
    let wasClicked = false;
    let timeout;

    if (wasClicked) {
      wasClicked = false;
      clearTimeout(timeout);
      return;
    }

    wasClicked = true;
    timeout = setTimeout(() => {
      wasClicked = false;
    }, 300);
  };
  
  return (
    <div className="App">
      <div className="main-section">
        <div className="holder position-absolute top-50 start-50 translate-middle">
          <div className="title">Timer</div>
          <div className="timer title">
            <Display time={time} />
            <div className="buttons">
              <Buttons
                start={handleStart}
                stop={handleStop}
                reset={handleReset}
                wait={handleWait, setTimeOut}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stopwatch;
