import React from 'react'
import './popup.css'


export default function PopupShowCheck(props) {
    return (
        <div>
     
            <div className='popup'>
                <div className='popup-inner'>
                    <div className='closeEnd'>
                    <button className='btnpop' onClick={props.notDisplay}>X</button>
                    </div>
                    <div className='Image'>
                        {props.res.image === null && <img className='image' src='/no_image.jpg'></img>}
                        {props.res.image !== null && <img src={props.res.image.medium}></img>}
                    </div>
                    <div className='info'>
                        <h3>{props.res.name}</h3>
                        <div className='text'>language : {props.res.language}</div>
                        {props.res.network !== null && <div className='text'>Channel : {props.res.network.name}</div>}
                        {props.res.network !== null && <div className='text'>Country : {props.res.network.country.name}</div>}
                        {props.res.schedule.time !== "" && <div className='text'>Time : {props.res.schedule.time}</div>}
                        {props.res.rating.average !== null && <div className='text'> Rating : {props.res.rating.average}</div>}
                        {props.res.status !== null && <div className='text'>status : {props.res.status}</div>}
                        {props.res.premiered !== null && <div className='text'>premiered : {props.res.premiered}</div>}
                        {props.res.runtime !== null && <div className='text'>runtime : {props.res.runtime}</div>}
                        {props.res.genres.length > 0 && <div className='text'>genres : {props.res.genres + "   "}</div>}
                    </div>

                </div>

            </div>

        </div>
    )
}
