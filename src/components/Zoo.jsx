import React, { useState, useEffect } from 'react';
import eagle from '../assets/animals/eagle.png';
import flamingo from '../assets/animals/flamingo.png';
import fox from '../assets/animals/fox.png';
import hedgehog from '../assets/animals/hedgehog.png';
import parrot from '../assets/animals/parrot.png';
import peacoc from '../assets/animals/peacoc.png';
import { COMPLETED } from '../routes/consts';
import './animals.css';
import Modal from '../modals/MyModal';
import logo from '../assets/logo.png';
import eagl from '../assets/photos/eagl.jpeg';
import flam from '../assets/photos/flam.jpeg';
import foxx from '../assets/photos/foxx.jpeg';
import hedg from '../assets/photos/hedg.jpeg';
import parr from '../assets/photos/parr.jpeg';
import peac from '../assets/photos/peac.jpeg';

const Zoo = () => {
  const [userHasNFT, setuserHasNFT] = useState(false);

  useEffect(() => {
    const receivedNFT = async () => {
      console.log(
        await window.contract.check_token({
          id: `${window.accountId}-donation-tok`,
        })
      );
      if (window.accountId !== "") {
        console.log(
          await window.contract.check_token({
            id: `${window.accountId}-donation-tok`,
          })
        );

        setuserHasNFT(
          await window.contract.check_token({
            id: `${window.accountId}-donation-tok`,
          })
        );
      }
    };
    receivedNFT();
  }, []);
  
  const animals = [
    {id: 1, name: 'eagle', img: eagle, nickname: 'Harry', photo: eagl, place: 'Kyiv'},
    {id: 2, name: 'flamingo', img: flamingo, nickname: 'Aves', photo: flam, place: 'Kharkiv'},
    {id: 3, name: 'fox', img: fox, nickname: 'Alisa', photo: foxx, place: 'Odessa'},
    {id: 4, name: 'hedgehog', img: hedgehog, nickname: 'Tosha', photo: hedg, place: 'Dnipro'},
    {id: 5, name: 'parrot', img: parrot, nickname: 'Kesha', photo: parr, place: 'Lviv'},
    {id: 6, name: 'peacoc', img: peacoc, nickname: 'Pasha', photo: peac, place: 'Sumy'}
  ]

  const [timesFed, setTimesFed] = useState(0)
  const [donationAmount, setDonationAmount] = useState(2)
  const [showModal, setShowModal] = useState(false)

  const feedHandler = () => {
    setTimesFed(timesFed + 1)
    setDonationAmount(Number((donationAmount + 0.2).toLocaleString()))
  }

  const donationHandler = () => {
    setShowModal(true)
  }

  return (
    <>
      <div className='container'>
        <div className='title'>
          <h2 style={{textAlign: 'center', margin: 20}}>Help the animals</h2>
          <p style={{textAlign: 'center'}}>Hover on each animal to get more info and feed it</p>
        </div>

        <div style={{marginTop: '1rem'}} className='animals'>
            {animals.map(animal =>
            <div key={animal.id} className="card_cantainer">
            <div key={animal.id} className="card">
              <div className="front_side">
                <img className='animalImg' src={animal.img}/>
                <div className='tooterBtns'>
              </div>
              </div>
              <div className="back_side">
                <h3 className='nickname'>{animal.nickname}</h3>
                <img className='animal__back' src={animal.photo} />
                <p className='animal__place'>Lives in {animal.place}</p>
                 <button style={{backgroundColor: animal.id % 2 === 0 ? '#000dff' : '#ffea00', color: animal.id % 2 === 0 ? '#fff' : '#000'}} onClick={feedHandler} disabled={false} className='feedBtn'>feed</button>
              </div>
            </div>
          </div>
              )}
        </div>

        <div className='info'>You fed animals {timesFed} times</div>
        <div>Your current donation is {donationAmount} NEAR tokens <span>Ⓝ</span> </div>

      {donationAmount>2 &&
      <button onClick={donationHandler} className='donationBtn'>{`Donate ${donationAmount} NEAR`}</button>}
      </div>
      {showModal &&
        <Modal
        title={'Good job!'}
        text={'You saved the Zoo!'}
        value={'Donate and mint NFT'}
        pic={logo}
        gonext={COMPLETED}
        donationAmount={donationAmount}
        />
      }
    </>
  )
}

export default Zoo