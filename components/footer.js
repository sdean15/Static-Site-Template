import Link from 'next/link'

const Footer = () => (
    <footer className="page-footer font-small">
        <div className="footer-copyright text-center py-3">
            <p>Rexen Family Dentistry</p>
            © 2020 Copyright:
            <p>Spencer Dean</p>
            <span className="navbar-text">
                <a href="https://www.facebook.com/"><button className="svg"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></button></a>
            </span>
            <span className="navbar-text">
                <a href="https://twitter.com/explore"><button className="svg"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></button></a>
            </span>
            <span className="navbar-text">
                <a href="https://www.instagram.com/?hl=en"><button className="svg" ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></button></a>
            </span>
        </div>
        <style jsx>{`

        .page-footer {
            margin-top: 10px;
            background-color: #365780;
        }

        .svg {
            background-color: transparent;
            border: none;
            margin: 0px 10px 0 10px;
        }

        `}</style>

    </footer>
);

export default Footer;