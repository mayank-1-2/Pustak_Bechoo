import React, { Component } from 'react';
import './home_body.css';
import Typical from 'react-typical'
// import ReactCardCarousel from 'react-card-carousel';


export default class Home_Body extends Component {

    render() {
        return (
            <div className="Home">
                <main>

                    <img src="https://cdn.pixabay.com/photo/2016/03/26/22/21/books-1281581_960_720.jpg" className="d-block w-100 top_picture" alt="first" style={{opacity:"0.8"}}/>
                    <div className="centered">
                        WE HAVE
                        <Typical
                            steps={['Books you can’t resist', 1000, 
                            'Rarest ones here', 1000, 
                            'The collection you will love',
                            1500,
                            'The best vintage collections',
                            1000,
                            'The best collection of books for passionate readers',
                            1000
                        ]}
                            loop={Infinity}
                            wrapper="p"
                        />
                    </div>

                </main>

               <section>
               <div className="album py-5 bg-light">
                        <div className="container">
                            <h3>Popular items</h3>
                            <div className="row ">
                                <div className="col-sm-12">
                                    <div id="inam" className="carousel slide " data-ride="carousel">
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-sm-12 col-lg-3 zoom">
                                                            <div className="card" style={{ width: "250px", margin: "auto", marginTop: "20px" }}>
                                                                <img className="card-img-top blur" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                                                                    alt="Thumbnail [100%x225]" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22226%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20226%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1728fdd3e73%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1728fdd3e73%22%3E%3Crect%20width%3D%22288%22%20height%3D%22226%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.8203125%22%20y%3D%22119.24375%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                                                    data-holder-rendered="true" style={{ height: "225px;", width: "100%;", display: "block;" }} />
                                                                <div className="card-body">
                                                                    <h4 className="card-title">Why you should use skin masks ?</h4>
                                                                    <p className="card-text">Skin masks help us to make are skin fresh and also they protect our skin from the harm rays of sun</p>
                                                                    <button type="button" className="btn btn-warning">Read More</button>

                                                                </div>

                                                            </div>

                                                        </div>
                                                        <div className="col-sm-12 col-lg-3 zoom">
                                                            <div className="card" style={{ width: "250px", margin: "auto", marginTop: "20px" }}>
                                                                <img className="card-img-top blur" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                                                                    alt="Thumbnail [100%x225]" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22226%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20226%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1728fdd3e73%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1728fdd3e73%22%3E%3Crect%20width%3D%22288%22%20height%3D%22226%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.8203125%22%20y%3D%22119.24375%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                                                    data-holder-rendered="true" style={{ height: "225px;", width: "100%;", display: "block;" }} />
                                                                <div className="card-body">
                                                                    <h4 className="card-title">Why you should use skin masks ?</h4>
                                                                    <p className="card-text">Skin masks help us to make are skin fresh and also they protect our skin from the harm rays of sun</p>
                                                                    <button type="button" className="btn btn-warning">Read More</button>

                                                                </div>

                                                            </div>

                                                        </div>
                                                        <div className="col-sm-12 col-lg-3 zoom">
                                                            <div className="card" style={{ width: "250px", margin: "auto", marginTop: "20px" }}>
                                                                <img className="card-img-top blur" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                                                                    alt="Thumbnail [100%x225]" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22226%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20226%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1728fdd3e73%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1728fdd3e73%22%3E%3Crect%20width%3D%22288%22%20height%3D%22226%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.8203125%22%20y%3D%22119.24375%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                                                    data-holder-rendered="true" style={{ height: "225px;", width: "100%;", display: "block;" }} />
                                                                <div className="card-body">
                                                                    <h4 className="card-title">Why you should use skin masks ?</h4>
                                                                    <p className="card-text">Skin masks help us to make are skin fresh and also they protect our skin from the harm rays of sun</p>
                                                                    <button type="button" className="btn btn-warning">Read More</button>

                                                                </div>

                                                            </div>

                                                        </div>
                                                        <div className="col-sm-12 col-lg-3 zoom">
                                                            <div className="card" style={{ width: "250px", margin: "auto", marginTop: "20px" }}>
                                                                <img className="card-img-top blur" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                                                                    alt="Thumbnail [100%x225]" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22226%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20226%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1728fdd3e73%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1728fdd3e73%22%3E%3Crect%20width%3D%22288%22%20height%3D%22226%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.8203125%22%20y%3D%22119.24375%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                                                    data-holder-rendered="true" style={{ height: "225px;", width: "100%;", display: "block;" }} />
                                                                <div className="card-body">
                                                                    <h4 className="card-title">Why you should use skin masks ?</h4>
                                                                    <p className="card-text">Skin masks help us to make are skin fresh and also they protect our skin from the harm rays of sun</p>
                                                                    <button type="button" className="btn btn-warning">Read More</button>

                                                                </div>

                                                            </div>

                                                        </div>

                                                    </div>

                                                </div>


                                            </div>
                                            <div className="carousel-item">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-sm-12 col-lg-3 zoom">
                                                            <div className="card" style={{ width: "250px", margin: "auto", marginTop: "20px" }}>
                                                                <img className="card-img-top blur" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                                                                    alt="Thumbnail [100%x225]" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22226%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20226%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1728fdd3e73%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1728fdd3e73%22%3E%3Crect%20width%3D%22288%22%20height%3D%22226%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.8203125%22%20y%3D%22119.24375%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                                                    data-holder-rendered="true" style={{ height: "225px;", width: "100%;", display: "block;" }} />
                                                                <div className="card-body">
                                                                    <h4 className="card-title">Why you should use skin masks ?</h4>
                                                                    <p className="card-text">Skin masks help us to make are skin fresh and also they protect our skin from the harm rays of sun</p>
                                                                    <button type="button" className="btn btn-warning">Read More</button>

                                                                </div>

                                                            </div>

                                                        </div>
                                                        <div className="col-sm-12 col-lg-3 zoom">
                                                            <div className="card" style={{ width: "250px", margin: "auto", marginTop: "20px" }}>
                                                                <img className="card-img-top blur" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                                                                    alt="Thumbnail [100%x225]" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22226%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20226%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1728fdd3e73%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1728fdd3e73%22%3E%3Crect%20width%3D%22288%22%20height%3D%22226%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.8203125%22%20y%3D%22119.24375%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                                                    data-holder-rendered="true" style={{ height: "225px;", width: "100%;", display: "block;" }} />
                                                                <div className="card-body">
                                                                    <h4 className="card-title">Why you should use skin masks ?</h4>
                                                                    <p className="card-text">Skin masks help us to make are skin fresh and also they protect our skin from the harm rays of sun</p>
                                                                    <button type="button" className="btn btn-warning">Read More</button>

                                                                </div>

                                                            </div>

                                                        </div>
                                                        <div className="col-sm-12 col-lg-3 zoom">
                                                            <div className="card" style={{ width: "250px", margin: "auto", marginTop: "20px" }}>
                                                                <img className="card-img-top blur" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                                                                    alt="Thumbnail [100%x225]" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22226%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20226%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1728fdd3e73%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1728fdd3e73%22%3E%3Crect%20width%3D%22288%22%20height%3D%22226%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.8203125%22%20y%3D%22119.24375%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                                                    data-holder-rendered="true" style={{ height: "225px;", width: "100%;", display: "block;" }} />
                                                                <div className="card-body">
                                                                    <h4 className="card-title">Why you should use skin masks ?</h4>
                                                                    <p className="card-text">Skin masks help us to make are skin fresh and also they protect our skin from the harm rays of sun</p>
                                                                    <button type="button" className="btn btn-warning">Read More</button>

                                                                </div>

                                                            </div>

                                                        </div>

                                                    </div>

                                                </div>


                                            </div>

                                        </div>
                                        <a href="#inam" className="carousel-control-prev" data-slide="prev">
                                            <span className="carousel-control-prev-icon" ></span>
                                        </a>
                                        <a href="#inam" className="carousel-control-next" data-slide="next">
                                            <span className="carousel-control-next-icon-dark"></span>
                                        </a>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="album py-5 bg-light">
                        <div className="container">
                            <h3>Deal of the day</h3>
                            <div className="row ">
                                <div className="col-sm-12">
                                    <div id="inam1" className="carousel slide " data-ride="carousel">
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-sm-12 col-lg-3 zoom">
                                                            <div className="card" style={{ width: "250px", margin: "auto", marginTop: "20px" }}>
                                                                <img className="card-img-top blur" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                                                                    alt="Thumbnail [100%x225]" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22226%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20226%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1728fdd3e73%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1728fdd3e73%22%3E%3Crect%20width%3D%22288%22%20height%3D%22226%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.8203125%22%20y%3D%22119.24375%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                                                    data-holder-rendered="true" style={{ height: "225px;", width: "100%;", display: "block;" }} />
                                                                <div className="card-body">
                                                                    <h4 className="card-title">Why you should use skin masks ?</h4>
                                                                    <p className="card-text">Skin masks help us to make are skin fresh and also they protect our skin from the harm rays of sun</p>
                                                                    <button type="button" className="btn btn-warning">Read More</button>

                                                                </div>

                                                            </div>

                                                        </div>
                                                        <div className="col-sm-12 col-lg-3 zoom">
                                                            <div className="card" style={{ width: "250px", margin: "auto", marginTop: "20px" }}>
                                                                <img className="card-img-top blur" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                                                                    alt="Thumbnail [100%x225]" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22226%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20226%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1728fdd3e73%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1728fdd3e73%22%3E%3Crect%20width%3D%22288%22%20height%3D%22226%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.8203125%22%20y%3D%22119.24375%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                                                    data-holder-rendered="true" style={{ height: "225px;", width: "100%;", display: "block;" }} />
                                                                <div className="card-body">
                                                                    <h4 className="card-title">Why you should use skin masks ?</h4>
                                                                    <p className="card-text">Skin masks help us to make are skin fresh and also they protect our skin from the harm rays of sun</p>
                                                                    <button type="button" className="btn btn-warning">Read More</button>

                                                                </div>

                                                            </div>

                                                        </div>
                                                        <div className="col-sm-12 col-lg-3 zoom">
                                                            <div className="card" style={{ width: "250px", margin: "auto", marginTop: "20px" }}>
                                                                <img className="card-img-top blur" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                                                                    alt="Thumbnail [100%x225]" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22226%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20226%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1728fdd3e73%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1728fdd3e73%22%3E%3Crect%20width%3D%22288%22%20height%3D%22226%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.8203125%22%20y%3D%22119.24375%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                                                    data-holder-rendered="true" style={{ height: "225px;", width: "100%;", display: "block;" }} />
                                                                <div className="card-body">
                                                                    <h4 className="card-title">Why you should use skin masks ?</h4>
                                                                    <p className="card-text">Skin masks help us to make are skin fresh and also they protect our skin from the harm rays of sun</p>
                                                                    <button type="button" className="btn btn-warning">Read More</button>

                                                                </div>

                                                            </div>

                                                        </div>
                                                        <div className="col-sm-12 col-lg-3 zoom">
                                                            <div className="card" style={{ width: "250px", margin: "auto", marginTop: "20px" }}>
                                                                <img className="card-img-top blur" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                                                                    alt="Thumbnail [100%x225]" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22226%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20226%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1728fdd3e73%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1728fdd3e73%22%3E%3Crect%20width%3D%22288%22%20height%3D%22226%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.8203125%22%20y%3D%22119.24375%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                                                    data-holder-rendered="true" style={{ height: "225px;", width: "100%;", display: "block;" }} />
                                                                <div className="card-body">
                                                                    <h4 className="card-title">Why you should use skin masks ?</h4>
                                                                    <p className="card-text">Skin masks help us to make are skin fresh and also they protect our skin from the harm rays of sun</p>
                                                                    <button type="button" className="btn btn-warning">Read More</button>

                                                                </div>

                                                            </div>

                                                        </div>

                                                    </div>

                                                </div>


                                            </div>
                                            <div className="carousel-item">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-sm-12 col-lg-3 zoom">
                                                            <div className="card" style={{ width: "250px", margin: "auto", marginTop: "20px" }}>
                                                                <img className="card-img-top blur" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                                                                    alt="Thumbnail [100%x225]" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22226%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20226%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1728fdd3e73%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1728fdd3e73%22%3E%3Crect%20width%3D%22288%22%20height%3D%22226%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.8203125%22%20y%3D%22119.24375%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                                                    data-holder-rendered="true" style={{ height: "225px;", width: "100%;", display: "block;" }} />
                                                                <div className="card-body">
                                                                    <h4 className="card-title">Why you should use skin masks ?</h4>
                                                                    <p className="card-text">Skin masks help us to make are skin fresh and also they protect our skin from the harm rays of sun</p>
                                                                    <button type="button" className="btn btn-warning">Read More</button>

                                                                </div>

                                                            </div>

                                                        </div>
                                                        <div className="col-sm-12 col-lg-3 zoom">
                                                            <div className="card" style={{ width: "250px", margin: "auto", marginTop: "20px" }}>
                                                                <img className="card-img-top blur" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                                                                    alt="Thumbnail [100%x225]" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22226%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20226%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1728fdd3e73%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1728fdd3e73%22%3E%3Crect%20width%3D%22288%22%20height%3D%22226%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.8203125%22%20y%3D%22119.24375%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                                                    data-holder-rendered="true" style={{ height: "225px;", width: "100%;", display: "block;" }} />
                                                                <div className="card-body">
                                                                    <h4 className="card-title">Why you should use skin masks ?</h4>
                                                                    <p className="card-text">Skin masks help us to make are skin fresh and also they protect our skin from the harm rays of sun</p>
                                                                    <button type="button" className="btn btn-warning">Read More</button>

                                                                </div>

                                                            </div>

                                                        </div>
                                                        <div className="col-sm-12 col-lg-3 zoom">
                                                            <div className="card" style={{ width: "250px", margin: "auto", marginTop: "20px" }}>
                                                                <img className="card-img-top blur" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                                                                    alt="Thumbnail [100%x225]" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22226%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20226%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1728fdd3e73%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1728fdd3e73%22%3E%3Crect%20width%3D%22288%22%20height%3D%22226%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.8203125%22%20y%3D%22119.24375%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                                                    data-holder-rendered="true" style={{ height: "225px;", width: "100%;", display: "block;" }} />
                                                                <div className="card-body">
                                                                    <h4 className="card-title">Why you should use skin masks ?</h4>
                                                                    <p className="card-text">Skin masks help us to make are skin fresh and also they protect our skin from the harm rays of sun</p>
                                                                    <button type="button" className="btn btn-warning">Read More</button>

                                                                </div>

                                                            </div>

                                                        </div>

                                                    </div>

                                                </div>


                                            </div>

                                        </div>
                                        <a href="#inam1" className="carousel-control-prev" data-slide="prev">
                                            <span className="carousel-control-prev-icon" ></span>
                                        </a>
                                        <a href="#inam1" className="carousel-control-next" data-slide="next">
                                            <span className="carousel-control-next-icon-dark"></span>
                                        </a>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="album py-5 bg-light">
                        <div className="container">
                            <h3>Best of our site</h3>
                            <div className="row ">
                                <div className="col-sm-12">
                                    <div id="inam2" className="carousel slide " data-ride="carousel">
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-sm-12 col-lg-3 zoom">
                                                            <div className="card" style={{ width: "250px", margin: "auto", marginTop: "20px" }}>
                                                                <img className="card-img-top blur" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                                                                    alt="Thumbnail [100%x225]" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22226%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20226%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1728fdd3e73%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1728fdd3e73%22%3E%3Crect%20width%3D%22288%22%20height%3D%22226%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.8203125%22%20y%3D%22119.24375%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                                                    data-holder-rendered="true" style={{ height: "225px;", width: "100%;", display: "block;" }} />
                                                                <div className="card-body">
                                                                    <h4 className="card-title">Why you should use skin masks ?</h4>
                                                                    <p className="card-text">Skin masks help us to make are skin fresh and also they protect our skin from the harm rays of sun</p>
                                                                    <button type="button" className="btn btn-warning">Read More</button>

                                                                </div>

                                                            </div>

                                                        </div>
                                                        <div className="col-sm-12 col-lg-3 zoom">
                                                            <div className="card" style={{ width: "250px", margin: "auto", marginTop: "20px" }}>
                                                                <img className="card-img-top blur" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                                                                    alt="Thumbnail [100%x225]" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22226%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20226%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1728fdd3e73%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1728fdd3e73%22%3E%3Crect%20width%3D%22288%22%20height%3D%22226%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.8203125%22%20y%3D%22119.24375%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                                                    data-holder-rendered="true" style={{ height: "225px;", width: "100%;", display: "block;" }} />
                                                                <div className="card-body">
                                                                    <h4 className="card-title">Why you should use skin masks ?</h4>
                                                                    <p className="card-text">Skin masks help us to make are skin fresh and also they protect our skin from the harm rays of sun</p>
                                                                    <button type="button" className="btn btn-warning">Read More</button>

                                                                </div>

                                                            </div>

                                                        </div>
                                                        <div className="col-sm-12 col-lg-3 zoom">
                                                            <div className="card" style={{ width: "250px", margin: "auto", marginTop: "20px" }}>
                                                                <img className="card-img-top blur" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                                                                    alt="Thumbnail [100%x225]" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22226%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20226%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1728fdd3e73%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1728fdd3e73%22%3E%3Crect%20width%3D%22288%22%20height%3D%22226%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.8203125%22%20y%3D%22119.24375%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                                                    data-holder-rendered="true" style={{ height: "225px;", width: "100%;", display: "block;" }} />
                                                                <div className="card-body">
                                                                    <h4 className="card-title">Why you should use skin masks ?</h4>
                                                                    <p className="card-text">Skin masks help us to make are skin fresh and also they protect our skin from the harm rays of sun</p>
                                                                    <button type="button" className="btn btn-warning">Read More</button>

                                                                </div>

                                                            </div>

                                                        </div>
                                                        <div className="col-sm-12 col-lg-3 zoom">
                                                            <div className="card" style={{ width: "250px", margin: "auto", marginTop: "20px" }}>
                                                                <img className="card-img-top blur" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                                                                    alt="Thumbnail [100%x225]" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22226%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20226%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1728fdd3e73%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1728fdd3e73%22%3E%3Crect%20width%3D%22288%22%20height%3D%22226%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.8203125%22%20y%3D%22119.24375%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                                                    data-holder-rendered="true" style={{ height: "225px;", width: "100%;", display: "block;" }} />
                                                                <div className="card-body">
                                                                    <h4 className="card-title">Why you should use skin masks ?</h4>
                                                                    <p className="card-text">Skin masks help us to make are skin fresh and also they protect our skin from the harm rays of sun</p>
                                                                    <button type="button" className="btn btn-warning">Read More</button>

                                                                </div>

                                                            </div>

                                                        </div>

                                                    </div>

                                                </div>


                                            </div>
                                            <div className="carousel-item">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-sm-12 col-lg-3 zoom">
                                                            <div className="card" style={{ width: "250px", margin: "auto", marginTop: "20px" }}>
                                                                <img className="card-img-top blur" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                                                                    alt="Thumbnail [100%x225]" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22226%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20226%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1728fdd3e73%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1728fdd3e73%22%3E%3Crect%20width%3D%22288%22%20height%3D%22226%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.8203125%22%20y%3D%22119.24375%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                                                    data-holder-rendered="true" style={{ height: "225px;", width: "100%;", display: "block;" }} />
                                                                <div className="card-body">
                                                                    <h4 className="card-title">Why you should use skin masks ?</h4>
                                                                    <p className="card-text">Skin masks help us to make are skin fresh and also they protect our skin from the harm rays of sun</p>
                                                                    <button type="button" className="btn btn-warning">Read More</button>

                                                                </div>

                                                            </div>

                                                        </div>
                                                        <div className="col-sm-12 col-lg-3 zoom">
                                                            <div className="card" style={{ width: "250px", margin: "auto", marginTop: "20px" }}>
                                                                <img className="card-img-top blur" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                                                                    alt="Thumbnail [100%x225]" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22226%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20226%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1728fdd3e73%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1728fdd3e73%22%3E%3Crect%20width%3D%22288%22%20height%3D%22226%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.8203125%22%20y%3D%22119.24375%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                                                    data-holder-rendered="true" style={{ height: "225px;", width: "100%;", display: "block;" }} />
                                                                <div className="card-body">
                                                                    <h4 className="card-title">Why you should use skin masks ?</h4>
                                                                    <p className="card-text">Skin masks help us to make are skin fresh and also they protect our skin from the harm rays of sun</p>
                                                                    <button type="button" className="btn btn-warning">Read More</button>

                                                                </div>

                                                            </div>

                                                        </div>
                                                        <div className="col-sm-12 col-lg-3 zoom">
                                                            <div className="card" style={{ width: "250px", margin: "auto", marginTop: "20px" }}>
                                                                <img className="card-img-top blur" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                                                                    alt="Thumbnail [100%x225]" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22226%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20226%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1728fdd3e73%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1728fdd3e73%22%3E%3Crect%20width%3D%22288%22%20height%3D%22226%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.8203125%22%20y%3D%22119.24375%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                                                    data-holder-rendered="true" style={{ height: "225px;", width: "100%;", display: "block;" }} />
                                                                <div className="card-body">
                                                                    <h4 className="card-title">Why you should use skin masks ?</h4>
                                                                    <p className="card-text">Skin masks help us to make are skin fresh and also they protect our skin from the harm rays of sun</p>
                                                                    <button type="button" className="btn btn-warning">Read More</button>

                                                                </div>

                                                            </div>

                                                        </div>

                                                    </div>

                                                </div>


                                            </div>

                                        </div>
                                        <a href="#inam2" className="carousel-control-prev" data-slide="prev">
                                            <span className="carousel-control-prev-icon" ></span>
                                        </a>
                                        <a href="#inam2" className="carousel-control-next" data-slide="next">
                                            <span className="carousel-control-next-icon-dark"></span>
                                        </a>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                     </div>

        );
    }
}