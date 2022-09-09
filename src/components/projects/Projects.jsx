import React from 'react'
import "./projects.css"

const Projects = () => {

    const ProjectsPage = (type) => {
        if (type == "socialbookdemo") {
            window.open(`http://socialbooksumit.herokuapp.com/`, "_blank")
        } else if (type == "socialbookrepo") {
            window.open("https://github.com/sumit9748/socialbook", "_blank");
        } else if (type == "resturentrepo") {
            window.open("https://github.com/sumit9748/spoffy", "_blank");
        } else if (type == "whatsapprepo") {
            window.open("https://github.com/sumit9748/letschat", "_blank");
        }
    }
    return (
        <div className='projects'>

            <div className="line">
                <h1>Projects</h1>
            </div>
            <div className="p-wrapper">
                <div className="container">
                    <div className="card">
                        <img src="https://cdn.pixabay.com/photo/2020/05/18/16/17/social-media-5187243__340.png" alt="Person" className="card__image" />
                        <p className="card__name">SocialBook </p>
                        <ul className="social-icons">
                            <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                            <li><a href="#"><i className="fa fa-codepen"></i></a></li>
                        </ul>
                        <button className="btn draw-border" onClick={() => ProjectsPage("socialbookrepo")}>Git Repo</button>
                        <button className="btn draw-border" onClick={() => ProjectsPage("socialbookdemo")}>Demo</button>

                    </div>
                    <div className="card">
                        <img src="https://assets3.thrillist.com/v1/image/3089743/1200x600/scale;" alt="Person" className="card__image" />
                        <p className="card__name">Online Resturent</p>
                        <ul className="social-icons">
                            <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                            <li><a href="#"><i className="fa fa-codepen"></i></a></li>
                        </ul>
                        <button className="btn draw-border" onClick={() => ProjectsPage("resturentrepo")}>Git Repo</button>
                        <button className="btn draw-border">Demo</button>
                    </div>
                    <div className="card">
                        <img src="https://images.firstpost.com/wp-content/uploads/2018/10/WhatsApp-1024.jpg" alt="Person" className="card__image" />
                        <p className="card__name">WhatsApp Clone</p>
                        <ul className="social-icons">
                            <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                            <li><a href="#"><i className="fa fa-codepen"></i></a></li>
                        </ul>
                        <button className="btn draw-border" onClick={() => ProjectsPage("whatsapprepo")}>Git Repo</button>
                        <button className="btn draw-border">Demo</button>
                    </div>
                    <div className="card">
                        <img src="https://cdn2.vectorstock.com/i/1000x1000/91/31/portfolio-paper-poster-with-colorful-brush-strokes-vector-21849131.jpg" alt="Person" className="card__image" />
                        <p className="card__name">Portfolio</p>
                        <ul className="social-icons">
                            <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                            <li><a href="#"><i className="fa fa-codepen"></i></a></li>
                        </ul>
                        <button className="btn draw-border">Git Repo</button>
                        <button className="btn draw-border">Demo</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects