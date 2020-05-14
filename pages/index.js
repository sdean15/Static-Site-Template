import Head from 'next/head'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <div className="text-center">
        <h1 className="header">Home</h1>
        <hr></hr>
      </div>
       
      <div className="row">
        <div className="col-sm-6">
          <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="dental2.jpg" className="d-block w-100" alt="..."></img>
              </div>
              <div className="carousel-item">
                <img src="dental3.jpg" className="d-block w-100" alt="..."></img>
              </div>
              <div className="carousel-item">
                <img src="dental4.jpg" className="d-block w-100" alt="..."></img>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="container">
            <div className="text-center">
              <div>
                <h2 id="welcome-text">Welcome to Rexen Family Dentistry</h2>
                <hr></hr>
              </div>
              <div className="container">
                <p className="welcometext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis ante nec lorem commodo vestibulum. Duis vitae ultricies nulla. Suspendisse sit amet quam non felis ultrices tempus. Etiam ornare pharetra quam, quis consequat velit molestie rhoncus. Vivamus consequat rutrum augue non ultricies. Quisque aliquam ac nisl ut ornare. Maecenas feugiat posuere maximus. Maecenas lorem lectus, ullamcorper id massa vitae, feugiat posuere odio. Fusce magna elit, iaculis interdum dolor id, volutpat dapibus orci. Fusce ac sapien laoreet, efficitur turpis sit amet, luctus mauris. Nunc a luctus eros. Aenean sed interdum metus, a scelerisque dolor.</p>
                <p className="welcometext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis ante nec lorem commodo vestibulum. Duis vitae ultricies nulla. Suspendisse sit amet quam non felis ultrices tempus. Etiam ornare pharetra quam, quis consequat velit molestie rhoncus. Vivamus consequat rutrum augue non ultricies. Quisque aliquam ac nisl ut ornare. Maecenas feugiat posuere maximus. Maecenas lorem lectus, ullamcorper id massa vitae, feugiat posuere odio. Fusce magna elit, iaculis interdum dolor id, volutpat dapibus orci. Fusce ac sapien laoreet, efficitur turpis sit amet, luctus mauris. Nunc a luctus eros. Aenean sed interdum metus, a scelerisque dolor.</p>
                <a href="/Appointment-request"><button className="btn btn-outline-dark" role="button">Request Appointment</button></a>

              </div>
            </div>
          </div>
        </div>
      </div>
       

        <div className="text-center">
         <hr></hr>
          <h1 id="subheader">What we offer</h1>
        </div>


        <div className="row">
          <div className="col">
            <p className="text-center">
              <img className="round-image" src="Dental1.jpg" width="300" height="300"></img>
            </p>
            <a href="/Services"><p className="text-center sub-text">Dental Checkups</p></a>
          </div>
          <div className="col">
            <p className="text-center">
              <img className="round-image" src="tooth-filling.jpg" width="300" height="300"></img>
            </p>
            <a href="/Services"><p className="text-center sub-text">Fillings</p></a>
          </div>
          <div className="col">
            <p className="text-center">
              <img className="round-image" src="dental-crown.jpg" width="300" height="300"></img>
            </p>
            <a href="/Services"><p className="text-center sub-text">Dental Crowns</p></a>
          </div>
          <div className="col">
            <p className="text-center">
              <img className="round-image" src="tooth1.jpg" width="300" height="300"></img>
            </p>
            <a href="/Services"><p className="text-center sub-text">Dentures & Bridges</p></a>
          </div>
          <div className="col">
            <p className="text-center">
              <img className="round-image" src="dental-implants.jpg" width="300" height="300"></img>
            </p>
            <a href="/Services"><p className="text-center sub-text">Dental Implants</p></a>
          </div>
        </div>

        <hr></hr>
        <div className="row">
          <div className="col-md-4 text-center">
            <div className="container">
              <h1 id="subheader">Contact</h1>
              <div className="container" id="contact-text">
                <p>123-456-7890</p>
                <p>notreal@email.com</p>
                <p>645 3th St N Town, AA 12345</p>

              </div>

            </div>

          </div>
          <div className="col-md-8 text-center btmrow">
            <div className="container">
              <h1 id="subheader">Reviews</h1>
              <blockquote id="quote-text">
                <p id="review-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis ante nec lorem commodo vestibulum. Duis vitae ultricies nulla. Suspendisse sit amet quam non felis ultrices tempus. Etiam ornare pharetra quam, quis consequat velit molestie rhoncus. Vivamus consequat rutrum augue non ultricies</p>
                <footer className="blockquote-footer">John Doe</footer>
              </blockquote>
            </div>
          </div>
        </div>




      <style jsx>{`

      #top {
        margin: auto;
        background-color: #365780;
      }
      #contact-text {
        font-size: 20px;
      }

      .welcometext {
        font-size: 18px;
      }

      .btmrow {
        margin-bottom: 20px;
      }

      .btn-outline-dark {
        border-color: #365780 !important;
      }

      .blockquote-footer {
        font-size: 20px;
      }

      .btn {
        margin-top: 45px;
      }

      h2 {
        color: #365780;
      }

      .round-image {
        border-radius: 50%;
      }

      .sub-text {
        font-size: 23px;
        color: #000;
      }

      #subheader {
        margin-top: 30px;
        margin-bottom: 25px;
        font-size: 35px;
        color: #365780;
      }

      #welcome-text {
        margin-top: 80px;
        margin-bottom: 20px;
        color: #365780;
      }

      #review-text {
        font-size: 21px;
      }

      #quote-text {
        margin: 10px 0 15px 0;
      }

      .header {
        margin-top: 10px;
        margin-bottom: 15px;
      }
        
      `}</style>

    </Layout>
  )
}
