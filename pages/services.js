import Layout from '../components/layout'
import Head from 'next/head';

const Services = () => (
    <Layout>
        <div className="text-center">
            <h1 className="header">Services</h1>
        </div>

        <div className="container-fluid">
            <div className="container">
                <div className="container">
                    <div className="row">
                        <h2>General & Cosmetic Dentistry</h2>
                        <div>
                            <p>Lorem ient quis amet quam non felis ultrices tempus. Etiam ornare pharetra quam, quis consequat velit molestie rhoncus. Vivamus consequat rutrum augue non ultricies. Quisque aliquam ac nisl ut ornare. Maecenas feugiat posuere maximus. Maecenas lorem lectus, ullamcorper id massa vitae, feugiat posuere odio.</p>
                            <p>Lorem ient quis amet quam non felis ultrices tempus. Etiam ornare pharetra quam, quis consequat velit molestie rhoncus. Vivamus consequat rutrum augue non ultricies. Quisque aliquam ac nisl ut ornare. Maecenas feugiat posuere maximus. Maecenas lorem lectus, ullamcorper id massa vitae, feugiat posuere odio.</p>
                            <p>Below are the services we provide: </p>
                        </div>
                        <div className="container">
                            <div id="accordion">
                                <div className="card">
                                    <a className="card-header" id="headingOne" data-toggle="collapse" href="#collapseOne">
                                        <h3 className="mb-0">
                                            <button className="btn btn-link"  data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                <h6>Dental Checkups</h6>
                                            </button>
                                        </h3>
                                    </a>
                                    <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                        <div className="card-body">
                                            <p>Lorem ient quis amet quam non felis ultrices tempus. Etiam ornare pharetra quam, quis consequat velit molestie rhoncus. Vivamus consequat rutrum augue non ultricies. Quisque aliquam ac nisl ut ornare. Maecenas feugiat posuere maximus. Maecenas lorem lectus, ullamcorper id massa vitae, feugiat posuere odio.</p>
                                            <p>Lorem ient quis amet quam non felis ultrices tempus. Etiam ornare pharetra quam, quis consequat velit molestie rhoncus. Vivamus consequat rutrum augue non ultricies. Quisque aliquam ac nisl ut ornare. Maecenas feugiat posuere maximus. Maecenas lorem lectus, ullamcorper id massa vitae, feugiat posuere odio.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card">
                                    <a className="card-header" id="headingTwo" data-toggle="collapse" href="#collapseTwo">
                                        <h4 className="mb-0">
                                            <button className="btn btn-link" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            <h6>Fillings</h6>
                                            </button>
                                        </h4>
                                    </a>
                                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                        <div className="card-body">
                                            <p>Lorem ient quis amet quam non felis ultrices tempus. Etiam ornare pharetra quam, quis consequat velit molestie rhoncus. Vivamus consequat rutrum augue non ultricies. Quisque aliquam ac nisl ut ornare. Maecenas feugiat posuere maximus. Maecenas lorem lectus, ullamcorper id massa vitae, feugiat posuere odio.</p>
                                            <p>Lorem ient quis amet quam non felis ultrices tempus. Etiam ornare pharetra quam, quis consequat velit molestie rhoncus. Vivamus consequat rutrum augue non ultricies. Quisque aliquam ac nisl ut ornare. Maecenas feugiat posuere maximus. Maecenas lorem lectus, ullamcorper id massa vitae, feugiat posuere odio.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card">
                                    <a className="card-header" id="headingThree" data-toggle="collapse" href="#collapseThree">
                                        <h4 className="mb-0">
                                            <button className="btn btn-link" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            <h6>Dental Crowns</h6>
                                            </button>
                                        </h4>
                                    </a>
                                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                        <div className="card-body">
                                            <p>Lorem ient quis amet quam non felis ultrices tempus. Etiam ornare pharetra quam, quis consequat velit molestie rhoncus. Vivamus consequat rutrum augue non ultricies. Quisque aliquam ac nisl ut ornare. Maecenas feugiat posuere maximus. Maecenas lorem lectus, ullamcorper id massa vitae, feugiat posuere odio.</p>
                                            <p>Lorem ient quis amet quam non felis ultrices tempus. Etiam ornare pharetra quam, quis consequat velit molestie rhoncus. Vivamus consequat rutrum augue non ultricies. Quisque aliquam ac nisl ut ornare. Maecenas feugiat posuere maximus. Maecenas lorem lectus, ullamcorper id massa vitae, feugiat posuere odio.</p>
                                            <p>Lorem ient quis amet quam non felis ultrices tempus. Etiam ornare pharetra quam, quis consequat velit molestie rhoncus. Vivamus consequat rutrum augue non ultricies. Quisque aliquam ac nisl ut ornare. Maecenas feugiat posuere maximus. Maecenas lorem lectus, ullamcorper id massa vitae, feugiat posuere odio.</p>
                                            <p>Lorem ient quis amet quam non felis ultrices tempus. Etiam ornare pharetra quam, quis consequat velit molestie rhoncus. Vivamus consequat rutrum augue non ultricies. Quisque aliquam ac nisl ut ornare. Maecenas feugiat posuere maximus. Maecenas lorem lectus, ullamcorper id massa vitae, feugiat posuere odio.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card">
                                    <a className="card-header" id="headingFour" data-toggle="collapse" href="#collapseFour">
                                        <h4 className="mb-0">
                                            <button className="btn btn-link" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            <h6>Dentures & Bridges</h6>
                                            </button>
                                        </h4>
                                    </a>
                                    <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                                        <div className="card-body">
                                            <p>Lorem ient quis amet quam non felis ultrices tempus. Etiam ornare pharetra quam, quis consequat velit molestie rhoncus. Vivamus consequat rutrum augue non ultricies. Quisque aliquam ac nisl ut ornare. Maecenas feugiat posuere maximus. Maecenas lorem lectus, ullamcorper id massa vitae, feugiat posuere odio.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card">
                                    <a className="card-header" id="headingFive" data-toggle="collapse" href="#collapseFive">
                                        <h4 className="mb-0">
                                            <button className="btn btn-link" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                            <h6>Dental Implants</h6>
                                            </button>
                                        </h4>
                                    </a>
                                    <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordion">
                                        <div className="card-body">
                                            <p>Lorem ient quis amet quam non felis ultrices tempus. Etiam ornare pharetra quam, quis consequat velit molestie rhoncus. Vivamus consequat rutrum augue non ultricies. Quisque aliquam ac nisl ut ornare. Maecenas feugiat posuere maximus. Maecenas lorem lectus, ullamcorper id massa vitae, feugiat posuere odio.</p>
                                            <p>Lorem ient quis amet quam non felis ultrices tempus. Etiam ornare pharetra quam, quis consequat velit molestie rhoncus. Vivamus consequat rutrum augue non ultricies. Quisque aliquam ac nisl ut ornare. Maecenas feugiat posuere maximus. Maecenas lorem lectus, ullamcorper id massa vitae, feugiat posuere odio.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>

        <style jsx>{`

        .header {
            margin-top: 15px;
            margin-bottom: 20px;
        }

        h2 {
            color: #365780;
        }

        #accordion {
            margin-top: 20px;
            margin-bottom: 20px;
        }

        .btn-link {
            text-decoration: none;
        }

        .row {
            margin-top: 20px;
            margin-bottom: 35px;
        }

        `}</style>
    </Layout>
);

export default Services;