import React, { useState, useEffect, useRef } from 'react'
import './mainBody.css'
import axios from 'axios';
import DetailsShow from './DetailsShow';
import TrandingShow from './TrandingShow';

export default function MainBody() {
    const [radio, setRadio] = useState('shows');
    const [show, setShow] = useState(true);
    const [actor, setActor] = useState(false);
    const serchRef = useRef()
    const [timeoutId, updateTimeoutId] = useState();
    const [resData, setData] = useState({
        data: []
    });

    const radioChang = (e) => {
        setRadio(e);
        if (e === 'people') {
            setActor(true)
            setShow(false)
            serchRef.current.value = "";
            setData({
                data: []
            })
        }
        else {
            setActor(false)
            setShow(true)
            serchRef.current.value = "";
            setData({
                data: []
            })
        }
    }

    //getting data form api as per users input
    const fatchdata = async () => {
        const val = serchRef.current.value
        const res = await axios.get(`https://api.tvmaze.com/search/${radio}?q=${val}`)
        setData(res);
    }
    //Debouncing to reduce multiple get request
    const find = () => {
        clearInterval(timeoutId)
        const timeout = setTimeout(() => {
            console.log("serching")
            fatchdata();
        }, 600);
        updateTimeoutId(timeout);
    }

    return (
        <div className='mainBody'>
            <div>
                <label> <input className='radio' type='radio' value='shows' checked={show} onChange={() => radioChang('shows')}></input> Show </label>
                <label> <input className='radio' type='radio' value='people' checked={actor} onChange={() => radioChang('people')}></input> Actor </label>
            </div>
                <div className='logoBox'>
                    <img className='serchLogo' src='/serch.png'></img>
                    <input className='serch' ref={serchRef} onChange={find}></input>
                </div>
            {resData.data.length > 0 ? (<DetailsShow resData={resData} show={show} actor={actor}></DetailsShow>) :<TrandingShow></TrandingShow>
            }
        </div>
    )
}
