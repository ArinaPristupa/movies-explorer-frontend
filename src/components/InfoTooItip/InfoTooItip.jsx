import React from "react";
import "./InfoTooItip.css";

import okRegister from "../../images/ok.svg";
import noRegister from "../../images/no.svg";

function InfoTooItip(props) {
  return (
    <div onClick={props.onCloseOverlay} className={`popup popup_type ${props.isOpen ? 'popup_opened' : ''}`} >
      <div className="popup__container">
        {props.isInfoToolTipData ? (

          <>
            <img className="popup__image" src={okRegister} alt='ок' />
            <p className="popup__title">Всё прошло успешно!</p>
          </>

        ) : (

          <>
            <img className="popup__image" src={noRegister} alt='Что-то пошло не так' />
            <p className="popup__title"> Что-то пошло не так! Попробуйте ещё раз.</p>
          </>

        )}

        <button className="popup__close" type="button" onClick={props.onClose}></button>

      </div>
    </div>
  );
}

export default InfoTooItip;
