import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './DetailsShow.css'
import PopupShowCheck from './PopupShowCheck'
import './TrandingShow.css'

export default function TrandingShow() {
    const [tranding, setTranding] = useState(null)
    const [popup, setPopup] = useState(null)

    const clickedPerson = (id) => {
        setPopup(id._embedded.show)
    }
    useEffect(() => {
        axios.get('https://api.tvmaze.com/schedule/full')
            .then((response) => setTranding(response))
    }, [])

    const notDisplay = () => {
        setPopup(null)
    }


    return (
        <>
            <h1 className='heading'>Tranding Show</h1>
            {
                popup !== null && <PopupShowCheck res={popup} notDisplay={notDisplay}></PopupShowCheck>
            }
            <div className='container'>
                {tranding !== null ? (
                    tranding.data.map((id,idx) => (
                        <>
                        {idx < 100 && 
                        <div className='display' onClick={() => clickedPerson(id)}>
                            {id._embedded.show.image === null && <img className='image' src='/no_image.jpg'></img>}
                            {id._embedded.show.image !== null && <img src={id._embedded.show.image.medium}></img>}
                            <div className='text'>{id._embedded.show.name}</div>
                            <div className='text'>{id.name}</div>
                        </div>
                        }
                        </>
                    ))
                ) : <img className='loading' src='/loadingFinal.png'></img>
                }
            </div>
        </>
    )
}
