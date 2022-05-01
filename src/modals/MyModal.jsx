import React from "react";
import { useNavigate } from "react-router-dom";
import { mintNFT } from "../mintNFT/minting";
import "./myModal.css";

function Modal({ value, text, title, pic, gonext, donationAmount }) {
  const navigate = useNavigate()
  console.log('donationAmount:', donationAmount)

  const onClickHandler = () => {
    console.log('onCLick:', donationAmount)
    mintNFT(donationAmount)
    navigate(gonext)
  }

  return (
    <div className="modal">
      <div className="modal__container">
        <div className="title">
          <h1>{title}</h1>
          <img style={{marginTop: '2rem'}} height={150} width={150} src={pic} />
        </div>
        <div className="body">
          <p>{text}</p>
        </div>
        <div className="footer">
          <button onClick={onClickHandler}>{value}</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;