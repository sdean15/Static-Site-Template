import Layout from '../components/layout'
import Head from 'next/head';

const ForPatients = () => (
    <Layout>
        <div className="text-center">
            <h1 className="header">For Patients</h1>
        </div>

        <div className="container-fluid">
            <div className="container">
                <div className="container">
                    <div className="row">
                        <h2>Your First Visit</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis ante nec lorem commodo vestibulum. Duis vitae ultricies nulla. Suspendisse sit amet quam non felis ultrices tempus. Etiam ornare pharetra quam, quis consequat velit molestie rhoncus. Vivamus consequat rutrum augue non ultricies. Quisque aliquam ac nisl ut ornare. Maecenas feugiat posuere maximus. Maecenas lorem lectus, ullamcorper id massa vitae, feugiat posuere odio. Fusce magna elit, iaculis interdum dolor id, volutpat dapibus orci. Fusce ac sapien laoreet, efficitur turpis sit amet, luctus mauris. Nunc a luctus eros. Aenean sed interdum metus, a scelerisque dolor.</p>
                    </div>
                    <div className="row">
                        <h2>Registration and Patient Forms</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis ante nec lorem commodo vestibulum. Duis vitae ultricies nulla. Suspendisse sit amet quam non felis ultrices tempus. Etiam ornare pharetra quam, quis consequat velit molestie rhoncus. Vivamus consequat rutrum augue non ultricies. Quisque aliquam ac nisl ut ornare. Maecenas feugiat posuere maximus. Maecenas lorem lectus, ullamcorper id massa vitae, feugiat posuere odio. Fusce magna elit, iaculis interdum dolor id, volutpat dapibus orci. Fusce ac sapien laoreet, efficitur turpis sit amet, luctus mauris. Nunc a luctus eros. 
                            Aenean sed interdum metus, a scelerisque dolor. <br></br> 
                            <br></br> 
                            <span>Please complete the forms below:</span></p>

                        <ul className="list-group-flush">
                            <li className="list-group-item"><a href="https://victims.ca.gov/docs/forms/providers/adaclaimform.pdf" >PDF Form</a></li>
                            <li className="list-group-item"><a href="https://victims.ca.gov/docs/forms/providers/adaclaimform.pdf" >PDF Form</a></li>
                            <li className="list-group-item"><a href="https://victims.ca.gov/docs/forms/providers/adaclaimform.pdf" >PDF Form</a></li>
                            <li className="list-group-item"><a href="/Appointment-request" >Appointment Request</a></li>
                        </ul>
                    </div>
                    <div className="row">
                        <h2>Dental Insurance</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis ante nec lorem commodo vestibulum. Duis vitae ultricies nulla. Suspendisse sit amet quam non felis ultrices tempus. Etiam ornare pharetra quam, quis consequat velit molestie rhoncus. Vivamus consequat rutrum augue non ultricies. Quisque aliquam ac nisl ut ornare. Maecenas feugiat posuere maximus. Maecenas lorem lectus, ullamcorper id massa vitae, feugiat posuere odio. Fusce magna elit, iaculis interdum dolor id, volutpat dapibus orci. Fusce ac sapien laoreet, efficitur turpis sit amet, luctus mauris. Nunc a luctus eros. Aenean sed interdum metus, a scelerisque dolor.</p>
                    </div>
                    <div className="row">
                        <h2>Payment & Financing</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis ante nec lorem commodo vestibulum. Duis vitae ultricies nulla. Suspendisse sit amet quam non felis ultrices tempus. Etiam ornare pharetra quam, quis consequat velit molestie rhoncus. Vivamus consequat rutrum augue non ultricies. Quisque aliquam ac nisl ut ornare. Maecenas feugiat posuere maximus. Maecenas lorem lectus, ullamcorper id massa vitae, feugiat posuere odio. Fusce magna elit, iaculis interdum dolor id, volutpat dapibus orci. Fusce ac sapien laoreet, efficitur turpis sit amet, luctus mauris. Nunc a luctus eros. Aenean sed interdum metus, a scelerisque dolor.</p>
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

        .row {
            margin-top: 20px;
            margin-bottom: 35px;
        }


        `}</style>
    </Layout>
);

export default ForPatients;