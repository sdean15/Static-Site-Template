import Link from 'next/link'
import ActiveLink from './activelink';

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top">
        <Link href="/">
            <a className="navbar-brand mb-0 h1">
                <img src="dent-logo.jpg" alt="logo" width="50" height="35"></img>
                Rexen Family Dentistry
            </a>
        </Link> 
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between align-items-center" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item" id="1">
                <ActiveLink activeClassName="activelink" href="/">
                    <a className="nav-link">Home</a>
                </ActiveLink> 
            </li>
            <li className="nav-item" id="2">
                <ActiveLink activeClassName="activelink" href="/Services">
                    <a className="nav-link">Services</a>
                </ActiveLink> 
            </li>
            <li className="nav-item" id="3">
                <ActiveLink activeClassName="activelink" href="/ForPatients">
                    <a className="nav-link">For Patients</a>
                </ActiveLink> 
            </li>
            <li className="nav-item" id="4">
                <ActiveLink activeClassName="activelink" href="/About">
                    <a className="nav-link">About</a>
                </ActiveLink> 
            </li>
            </ul>

            
            <ul class="navbar-nav flex-row justify-content-md-center justify-content-center flex-nowrap" id="logos">
                <li class="nav-item"><a class="svg" href="https://www.facebook.com"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a> </li>
                <li class="nav-item"><a class="svg" href="https://twitter.com/explore"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></a> </li>
                <li class="nav-item"><a class="svg" href="https://www.instagram.com/?hl=en"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a> </li>
            </ul>
            
        </div>


        <style jsx>{`

        .navbar-brand {
            font-size: 21px;
        }

        .navbar {
            background-color: #fff
        }

        .activelink{
            border-bottom: 2px solid #365780;
            background-color: #fff;
            font-weight: bold;
            color: #365780;
        }

        .activelink:after {
            
        }


        #logos li {
            list-style-type: none;
            display: inline;
        }

        .svg {
            background-color: #fff;
            border: none;
            border-color: #365780;
        }

        .nav-link a {
            border-bottom: 2px solid transparent;
        }

        .nav-link:hover {
            border-bottom: 2px solid #536E91;
        }

        .nav-item {
            padding-right: 10px;
            padding-left: 5px;
            font-size: 18px;
            color: #000000;
            font-weight: 500;
        }

          .navbar .navbar-collapse {
            text-align: center;
          }
        

        `}</style>
    </nav>
    
);

   

export default Navbar;