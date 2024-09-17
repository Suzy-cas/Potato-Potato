/* eslint-disable react/prop-types */

function PopUpValidation({ handleClick, setIsPopUp, textValidation }) {
  const handleClickPop = (e) => {
    setIsPopUp(false);
    handleClick(e);
  };

  return (
    <div className="PopUpValidation">
      <p className="PopUpText">
        <span className="PopUpSpan">
          Etes-vous sûr de vouloir {textValidation} ?
        </span>
        <button
          className="primary-button"
          type="button"
          onClick={(e) => handleClickPop(e)}
        >
          Oui
        </button>
        <button
          className="secondary-button"
          type="button"
          onClick={() => setIsPopUp(false)}
        >
          Non
        </button>
      </p>
    </div>
  );
}

export default PopUpValidation;
