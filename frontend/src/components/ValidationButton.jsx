/* eslint-disable react/prop-types */
import { useState } from "react";
import PopUpValidation from "./PopUpValidation";

function ValidationButton({
  text,
  textValidation = "",
  hasPopUp = true,
  handleClick,
}) {
  const [isPopUp, setIsPopUp] = useState(false);

  return (
    <>
      <button
        type="button"
        className="primary-button"
        onClick={(e) => (hasPopUp ? setIsPopUp(true) : handleClick(e))}
      >
        {text}
      </button>
      {isPopUp ? (
        <PopUpValidation
          handleClick={handleClick}
          setIsPopUp={setIsPopUp}
          textValidation={textValidation}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default ValidationButton;
