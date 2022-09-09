import React from 'react'
import "./skills.css"
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';

const Skills = () => {
    return (
        <div className='skills'>
            <div className="skillLine">
                <h1>Skills</h1>
            </div>
            <div className="skills-left">

                <div className="skills-left-w">
                    <div className="skills-inner">
                        <div className="sk-front">
                            <img src="https://cdn-icons-png.flaticon.com/512/2620/2620971.png" alt="" />

                            <h1>FrontEnd devolopement</h1>
                        </div>
                        <div className='sk-back'>
                            <div className="s-l-wl">
                                <div className="ls">
                                    <div style={{ display: "flex" }}>
                                        <HtmlIcon />
                                        <h3 style={{ marginLeft: "5px" }}>HTML</h3>

                                    </div>
                                    <p>Experienced</p>
                                </div>
                                <div className="ls">
                                    <div style={{ display: "flex" }}>
                                        <CssIcon />
                                        <h3>CSS</h3>
                                    </div>

                                    <p>Intermidiate</p>
                                </div>
                                <div className="ls">

                                    <h3>REACT</h3>
                                    <p>Experienced</p>

                                </div>

                            </div>
                            <div className="s-l-wr">

                                <div className="ls">
                                    <h3>Material UI</h3>
                                    <p>Experienced</p>
                                </div>
                                <div className="ls">
                                    <h3>BOOTSTRAP</h3>
                                    <p>Intermidiate</p>
                                </div>
                                <div className="ls">
                                    <div style={{ display: "flex" }}>
                                        <JavascriptIcon />
                                        <h3>Java Script</h3>
                                    </div>

                                    <p>Experienced</p>
                                </div>



                            </div>

                        </div>
                    </div>
                </div>
                <div className="skills-left-w">
                    <div className="skills-inner">
                        <div className="sk-front">
                            <img src="https://cdn-icons-png.flaticon.com/512/2166/2166823.png" alt="" />

                            <h1>Backend devolopement</h1>
                        </div>
                        <div className='sk-back'>
                            <div className="s-l-wl">
                                <div className="ls">
                                    <h3>Node JS</h3>
                                    <p>Intermidiate</p>
                                </div>
                                <div className="ls">
                                    <h3>MySQL</h3>
                                    <p>Intermidiate</p>
                                </div>
                            </div>
                            <div className="s-l-wr">

                                <div className="ls">
                                    <h3>MONGO DB</h3>
                                    <p>Experienced</p>
                                </div>
                                <div className="ls">
                                    <h3>FIREBASE</h3>
                                    <p>Beginer</p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                <div className="skills-left-w">
                    <div className="skills-inner">
                        <div className="sk-front">
                            <img src="https://cdn-icons-png.flaticon.com/512/2721/2721629.png" alt="" />

                            <h1>Coding Knowledge</h1>
                        </div>
                        <div className='sk-back'>
                            <div className="s-l-wl">
                                <div className="ls">
                                    <h3>C/C++</h3>
                                    <p>Experienced</p>
                                </div>
                                <div className="ls">
                                    <h3>JAVA</h3>
                                    <p>Begineer</p>
                                </div>
                                <div className="ls">
                                    <h3>JavaScript</h3>
                                    <p>Intermidiate</p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Skills;