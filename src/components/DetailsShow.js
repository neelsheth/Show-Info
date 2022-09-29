import React, { useEffect, useState } from 'react'
import './DetailsShow.css'
import PopupBar from './PopupBar'

export default function DetailsShow(props) {

    const [popup, setPopup] = useState(null)

    const clickedShow = (e) => {
        setPopup(e.show)
    }

    const clickedPerson = (e) => {
        setPopup(e.person)
    }

    const notDisplay = () => {
        setPopup(null)
    }




    return (
        <>
            {/* onclick it will display popUp bar */}
            {popup !== null && (<div className='center'>
                <PopupBar res={popup} isShow={props.show} isActor={props.actor} notDisplay={notDisplay}></PopupBar>
            </div>)}


            <div className='container'>

                {/* if readio button is selected as show */}
                {props.show && (
                    props.resData.data.map((e) => (
                        <div className='display' onClick={() => clickedShow(e)}>
                            {e.show.image === null && <img className='image' src='/no_image.jpg'></img>}
                            {e.show.image !== null && <img src={e.show.image.medium}></img>}
                            <div className='text'>{e.show.name}</div>
                        </div>
                    ))
                )
                }

                {/* if radio button is selected as Actor */}
                {props.actor &&
                    props.resData.data.map((e) => (
                        <div className='display' onClick={() => clickedPerson(e)}>
                            {e.person.image === null && <img className='image' src='/no_image.jpg'></img>}
                            {e.person.image !== null && <img src={e.person.image.medium}></img>}
                            <div className='text'>{e.person.name}</div>


                        </div>
                    ))
                }
            </div>
        </>




    )
}
