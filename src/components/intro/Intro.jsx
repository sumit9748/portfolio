import React from 'react'
import "./intro.css"
import sumit from "../../img/sumit.png"
import HomeIcon from '@mui/icons-material/Home';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { Link } from "react-router-dom"

const Intro = () => {

    const viewCV = () => {
        window.open(`https://drive.google.com/file/d/1a5IFu8WEKv1KFqxMafU8Auoqfpaj9CUF/view?usp=sharing`, "_blank")
    }
    return (
        <div className="I">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className='i-intro'>Hello My name is </h2>
                    <h1 className='i-name'>Sumit Mondal</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Devoloper</div>
                            <div className="i-title-item">UI/UX Designer</div>
                            <div className="i-title-item">Full Stack Devoloper</div>
                        </div>
                    </div>
                    <p className="i-desc">
                        I love to design , add functionality to webpage and a coding
                        enthusiast also and always wants to learn something new.
                    </p>

                </div>
                <div className="i-contact">
                    <div className="i-contact-item">
                        <HomeIcon />
                        <p>Bankra Dakshin Pally Howrah, Pin-711403</p>
                    </div>
                    <div className="i-contact-item">
                        <PhoneCallbackIcon />
                        <p>91+ 9748698484</p>
                    </div>
                    <div className="i-contact-item">
                        <AlternateEmailIcon />
                        <p>sumitmondal9448@gmail.com</p>
                    </div>
                    <button className="i-button" href="https://drive.google.com/file/d/1a5IFu8WEKv1KFqxMafU8Auoqfpaj9CUF/view?usp=sharing" onClick={viewCV}>MY CV</button>
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={sumit} alt="" className='i-img' />
            </div>

        </div>
    )
}

export default Intro