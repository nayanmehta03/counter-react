import React, { useRef} from "react";

const Form = ({ setValue }) => {
  const minRef = useRef();
  const maxRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.id === "go") {
      if (Math.round(Math.abs(minRef.current.value)) > 0 && Math.round(Math.abs(maxRef.current.value)) > Math.round(Math.abs(minRef.current.value))){
        setValue({
          min: Math.round(Math.abs(minRef.current.value)),
          max: Math.round(Math.abs(maxRef.current.value)),
          counter: true,
        });
      }
    } else if (e.target.id === "skip") {
      setValue({
        min: 1,
        max: 1000,
        counter: true,
      });
    }
  };
  return (
    <>
      <div className="form-container">
        <input
          type="number"
          className="form-input"
          placeholder="Minimum Value"
          name="minValue"
          ref={minRef}
          onKeyDown={ e => ( e.keyCode === 69 || e.keyCode === 190 || e.keyCode === 109 || e.keyCode === 189 || e.keyCode === 229) && e.preventDefault() }
        />
        <input
          type="number"
          className="form-input"
          placeholder="Maximum Value"
          name="maxValue"
          onKeyDown={ e => ( e.keyCode === 69 || e.keyCode === 190 || e.keyCode === 109 || e.keyCode === 189 || e.keyCode === 229) && e.preventDefault() }
          ref={maxRef}
        />
        <div className="form-btn-grp">
          <button className="btn" id="go" onClick={(e) => handleSubmit(e)}>
            Go
          </button>
          <button className="btn" id="skip" onClick={(e) => handleSubmit(e)}>
            Skip
          </button>
        </div>
      </div>
    </>
  );
};

export default Form;
