import { useState } from "react";
import "./RadioGroup.css";

const RadioGroup = () => {
  const [selection, setSelection] = useState("1");
  const onValueChange = (event) => {
    setSelection(event.target.value);
  };
  console.log(selection);
  return (
    <div className="radio-group-tab">
      <div>
        <input
          type="radio"
          id="control_01"
          name="select"
          value="1"
          checked={selection === "1"}
          onClick={onValueChange}
          onChange={onValueChange}
        />
        <label htmlFor="control_01">
          <h2>Pfft</h2>
          <p>
            Awww, poor baby. Too afraid of the scary game sprites? I laugh at
            you.
          </p>
        </label>
      </div>
      <div>
        <input
          type="radio"
          id="control_02"
          name="select"
          value="2"
          checked={selection === "2"}
          onClick={onValueChange}
          onChange={onValueChange}
        />
        <label htmlFor="control_02">
          <h2>Wannabe</h2>
          <p>You're not a gaming God by any stretch of the imagination.</p>
        </label>
      </div>
      <div>
        <input
          type="radio"
          id="control_03"
          name="select"
          value="3"
          checked={selection === "3"}
          onClick={onValueChange}
          onChange={onValueChange}
        />
        <label htmlFor="control_03">
          <h2>Daaamn</h2>
          <p>
            Now we're talking. It's gettin' a bit hairy out there in game land.
          </p>
        </label>
      </div>

      <div>
        <input
          type="radio"
          id="control_04"
          name="select"
          value="4"
          checked={selection === "4"}
          onClick={onValueChange}
          onChange={onValueChange}
        />
        <label htmlFor="control_04">
          <h2>Booking</h2>
          <p>
            Now we're talking. It's gettin' a bit hairy out there in game land.
          </p>
        </label>
      </div>
    </div>
  );
};

export default RadioGroup;
