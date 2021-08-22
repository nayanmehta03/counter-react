import React, { useState, useEffect, useRef } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(Math.round(Math.abs(props.minValue)) || 1);
  const [input, setInput] = useState(count);

  const inputRef = useRef();

  const maxValue = Math.abs(props.maxValue) || 1000;
  const minValue = Math.abs(props.minValue) || 1;

  useEffect(() => {

    const onOutsideClick = (e) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        if (parseInt(inputRef.current.value) <= maxValue && parseInt(inputRef.current.value) >= minValue) {
          setCount(parseInt(inputRef.current.value));
        } else if (parseInt(inputRef.current.value) < minValue) {
          setCount(minValue);
        } else if(parseInt(inputRef.current.value) > maxValue) {
          setCount(maxValue);
        }
        setInput(count);
      }
    };
    setInput(count);
    document.addEventListener("mousedown", onOutsideClick);
    return () => {
      document.removeEventListener("mousedown", onOutsideClick);
    };
  }, [count, maxValue, minValue]);

  const increment = (e) => {
    if (count < maxValue) {
      setCount(count + 1);
    }
  };

  const decrement = (e) => {
    if (count > minValue) {
      setCount(count - 1);
    }
  };

  const handleChange = (e) => {
    setInput(isNaN(parseInt(e.target.value)) ? "" : parseInt(e.target.value));
  };

  return (
    <>
      <div className="counter-container">
        <button className="minus" onClick={() => decrement()}>
          -
        </button>
        <div className="counter-count">
          <input
            onChange={(event) => handleChange(event)}
            value={input}
            ref={inputRef}
            onKeyDown={ e => ( e.keyCode === 69 || e.keyCode === 190 || e.keyCode === 109 || e.keyCode === 189 || e.keyCode === 229) && e.preventDefault() }
            type="number"
          ></input>
        </div>
        <button className="plus" onClick={() => increment()}>
          +
        </button>
      </div>
    </>
  );
};

export default Counter;
