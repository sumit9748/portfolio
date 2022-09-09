import React from 'react'
import "./about.css"
import CodeIcon from '@mui/icons-material/Code';
import EngineeringIcon from '@mui/icons-material/Engineering';


const About = () => {
    return (
        <div className='a'>
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src="https://media4.giphy.com/media/L1R1tvI9svkIWwpVYr/giphy.gif?cid=ecf05e47z6v3pyeiqsdd2up8br9w32we7kqx0in4c4rd79oy&rid=giphy.gif&ct=g"
                        alt="funny GIF" width="100%" className='a-img' />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">Hello I am sumit mondal a student of kalyani
                    goverment engineering college. I pursue my BTECH in Information Technology Branch.I am a fullstack webdevoloper
                    and also coding an enthusiast.I love to design and add functionality
                    to my web components.I use React framework from frontEnd and NodeJS as backend.
                    I prefer MongoDB as a databse and also knows MySQL </p>
                <div className="a-award">
                    <div className="a-award-1">
                        <CodeIcon />
                        <h3>Secure 1100+ Scores in Geeks for Geeks
                            and 250+ problems on Leetcode.
                        </h3>
                    </div>
                    <div className="a-award-1">
                        <EngineeringIcon />
                        <h3>Completed 8+ Projects. Like Social Media Platform and
                            Online Food Ordering resturent platform,whatsapp clone..
                        </h3>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About