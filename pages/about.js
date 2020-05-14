import Layout from '../components/layout'
import Head from 'next/head';

const About = () => (
    <Layout>
        <div className="text-center">
            <h1 className="header">About Us</h1>
         </div>
        <div className="container-fluid" id="top">
            <div className="container text-center" id="x">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <h2 className="card-title">Contact</h2>
                                    <hr></hr>
                                    <p><b>Phone: </b>123-456-7890</p>
                                    <p><b>Email: </b>notreal@email.com</p>
                                    <p><b>Mailing address: </b>645 3th St N Town, AA 12345</p>
                                    <p><b>Office hours: </b></p>
                                    <p>Monday 8:00am - 5:00pm</p>
                                    <p>Tuesday 8:00am - 5:00pm</p>
                                    <p>Wednesday 8:00am - 5:00pm</p>
                                    <p>Thursday 8:00am - 5:00pm</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <h2 className="card-title">About</h2>
                                    <hr></hr>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis ante nec lorem commodo vestibulum. Duis vitae ultricies nulla. Suspendisse sit amet quam non felis ultrices tempus. Etiam ornare pharetra quam, quis consequat velit molestie rhoncus. Vivamus consequat rutrum augue non ultricies. Quisque aliquam ac nisl ut ornare. Maecenas feugiat posuere maximus. Maecenas lorem lectus, ullamcorper id massa vitae, feugiat posuere odio. Fusce magna elit, iaculis interdum dolor id, volutpat dapibus orci. Fusce ac sapien laoreet, efficitur turpis sit amet, luctus mauris. Nunc a luctus eros. Aenean sed interdum metus, a scelerisque dolor.</p>
                                    <p> - Rexen Family Dentistry</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="text-center">
            <h1 className="header">Meet our team</h1>
        </div>


        <div className="container-fluid">
           <div className="container">
               <div className="container">
                   <div className="row meet">
                        <div className="col-md-4">
                            <img src="stock1.jpg" alt="Dr.John Doe" width="350" height="250" className="doc-photo"></img>
                        </div>
                        <div className="col-md-8">
                            <h3 className="team-doc">Dr. John Doe</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis ante nec lorem commodo vestibulum. Duis vitae ultricies nulla. Suspendisse sit amet quam non felis ultrices tempus. Etiam ornare pharetra quam, quis consequat velit molestie rhoncus. Vivamus consequat rutrum augue non ultricies. Quisque aliquam ac nisl ut ornare. Maecenas feugiat posuere maximus. Maecenas lorem lectus, ullamcorper id massa vitae, feugiat posuere odio</p>
                        </div>
                    </div>
                    <div className="row meet">
                        <div className="col-md-4">
                            <img src="stock2.jpg" alt="Dr.John Doe" width="350" height="250" className="doc-photo"></img>
                        </div>
                        <div className="col-md-8">
                            <h3 className="team-doc">Dr. Jane Doe</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis ante nec lorem commodo vestibulum. Duis vitae ultricies nulla. Suspendisse sit amet quam non felis ultrices tempus. Etiam ornare pharetra quam, quis consequat velit molestie rhoncus. Vivamus consequat rutrum augue non ultricies. Quisque aliquam ac nisl ut ornare. Maecenas feugiat posuere maximus. Maecenas lorem lectus, ullamcorper id massa vitae, feugiat posuere odio</p>
                        </div>
                    </div>
               </div>
            </div>
        </div>

        <div className="container-fluid">
            <div className="container">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="card meet">
                                <img className="card-img-top" src="stock4.jpg" width="100" height="225" alt="photo"></img>
                                <div className="card-body">
                                    <h5 className="card-title">First Last</h5>
                                    <p className="card-text">Position title</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card meet">
                                <img className="card-img-top" src="stock3.jpg" width="100" height="225" alt="photo"></img>
                                <div className="card-body">
                                    <h5 className="card-title">First Last</h5>
                                    <p className="card-text">Position title</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card meet">
                                <img className="card-img-top" src="stock4.jpg" width="100" height="225" alt="photo"></img>
                                <div className="card-body">
                                    <h5 className="card-title">First Last</h5>
                                    <p className="card-text">Position title</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="card meet">
                                <img className="card-img-top" src="stock3.jpg" width="100" height="225" alt="photo"></img>
                                <div className="card-body">
                                    <h5 className="card-title">First Last</h5>
                                    <p className="card-text">Position title</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card meet">
                                <img className="card-img-top" src="stock4.jpg" width="100" height="225" alt="photo"></img>
                                <div className="card-body">
                                    <h5 className="card-title">First Last</h5>
                                    <p className="card-text">Position title</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card meet">
                                <img className="card-img-top" src="stock3.jpg" width="100" height="225" alt="photo"></img>
                                <div className="card-body">
                                    <h5 className="card-title">First Last</h5>
                                    <p className="card-text">Position title</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <style jsx>{`


         #top {
             margin: auto;
             background-color: #365780;
            }

         .doc-photo {
             float: right;
         }

         .header {
             margin-top: 10px;
             margin-bottom: 15px;
         }

         .team-doc {
             margin-top: 25px;
             margin-bottom: 20px;
             color: #365780;
         }

         .row.meet {
             margin: 25px 5px 25px 35px;
         }

         .card.meet {
            width: 16rem;
            margin: 15px;
        }

         .card {
             margin: 20px;
         }

         .card-title {
             color: #365780;
         }

        `}</style>
    </Layout>
);

export default About;