import Logo from '../images/logo.svg';
import IconLocation from '../images/icon-location.svg';
import IconPhone from '../images/icon-phone.svg';
import IconEmail from '../images/icon-email.svg';

import '../styles/Footer.css';

const Footer = () =>{
    return(
        <div className='footer'>
            <div className='footer-center'>
                <img src={Logo} alt="Fylo"/>
                <div className='flex-footer'>
                    <div className='flex-location'>
                        <img src={IconLocation} alt="icon-location"/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                    <div>
                        <div className='flex-phone'>
                            <img src={IconPhone} alt="icon-phone"/>
                            <p>+1-543-123-4567</p>
                        </div>
                        <div className='flex-email'>
                            <img src={IconEmail} alt="icon-email"/>
                            <p>example@fylo.com</p>
                        </div>
                    </div>
                    
                    <ul>
                        <li><a href='/'>About Us</a></li>
                        <li><a href='/'>Jobs</a></li>
                        <li><a href='/'>Press</a></li>
                        <li><a href='/'>Blog</a></li>
                    </ul>
                    <ul>
                        <li><a href='/'>Contact Us</a></li>
                        <li><a href='/'>Terms</a></li>
                        <li><a href='/'>Privacy</a></li>
                    </ul>
                    <div className='social-media'>
                        {/*<img src={IconFacebook} alt="icon-facebook"/>
                        <img src={IconTwitter} alt="icon-twitter"/>
                        <img src={IconInstagram} alt="icon-instagram"/>*/}
                        <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="50px" height="50px" fillRule="nonzero"><g className='hover-social-media' fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: 'normal'}}><g transform="scale(5.12,5.12)"><path d="M32,11h5c0.552,0 1,-0.448 1,-1v-6.737c0,-0.524 -0.403,-0.96 -0.925,-0.997c-1.591,-0.113 -4.699,-0.266 -6.934,-0.266c-6.141,0 -10.141,3.68 -10.141,10.368v6.632h-7c-0.552,0 -1,0.448 -1,1v7c0,0.552 0.448,1 1,1h7v19c0,0.552 0.448,1 1,1h7c0.552,0 1,-0.448 1,-1v-19h7.222c0.51,0 0.938,-0.383 0.994,-0.89l0.778,-7c0.066,-0.592 -0.398,-1.11 -0.994,-1.11h-8v-5c0,-1.657 1.343,-3 3,-3z"></path></g></g></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="50px" height="50px" fillRule="nonzero"><g className='hover-social-media' fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: 'normal'}}><g transform="scale(5.12,5.12)"><path d="M50.0625,10.4375c-1.84766,0.82031 -3.82812,1.37109 -5.91016,1.62109c2.125,-1.27344 3.75781,-3.28906 4.52344,-5.6875c-1.98437,1.17578 -4.19141,2.03125 -6.53125,2.49219c-1.875,-2 -4.54687,-3.24609 -7.50391,-3.24609c-5.67969,0 -10.28516,4.60156 -10.28516,10.28125c0,0.80469 0.09375,1.58984 0.26953,2.34375c-8.54687,-0.42969 -16.12109,-4.52344 -21.19531,-10.74609c-0.88672,1.52344 -1.39062,3.28906 -1.39062,5.17187c0,3.56641 1.8125,6.71484 4.57422,8.5625c-1.6875,-0.05469 -3.27344,-0.51953 -4.66016,-1.28906c0,0.04297 0,0.08594 0,0.12891c0,4.98438 3.54688,9.13672 8.24609,10.08594c-0.85937,0.23438 -1.76953,0.35938 -2.70703,0.35938c-0.66406,0 -1.30859,-0.0625 -1.9375,-0.1875c1.3125,4.08203 5.10938,7.0625 9.60547,7.14453c-3.51562,2.75781 -7.94922,4.39844 -12.76953,4.39844c-0.83203,0 -1.64844,-0.04687 -2.44922,-0.14453c4.54687,2.92188 9.95312,4.62109 15.76172,4.62109c18.91406,0 29.25781,-15.66797 29.25781,-29.25391c0,-0.44531 -0.01172,-0.89453 -0.02734,-1.33203c2.00781,-1.44922 3.75,-3.26172 5.12891,-5.32422z"></path></g></g></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="50px" height="50px" fillRule="nonzero"><g className='hover-social-media' fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: 'normal'}}><g transform="scale(10.66667,10.66667)"><path d="M8,3c-2.757,0 -5,2.243 -5,5v8c0,2.757 2.243,5 5,5h8c2.757,0 5,-2.243 5,-5v-8c0,-2.757 -2.243,-5 -5,-5zM8,5h8c1.654,0 3,1.346 3,3v8c0,1.654 -1.346,3 -3,3h-8c-1.654,0 -3,-1.346 -3,-3v-8c0,-1.654 1.346,-3 3,-3zM17,6c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM12,7c-2.757,0 -5,2.243 -5,5c0,2.757 2.243,5 5,5c2.757,0 5,-2.243 5,-5c0,-2.757 -2.243,-5 -5,-5zM12,9c1.654,0 3,1.346 3,3c0,1.654 -1.346,3 -3,3c-1.654,0 -3,-1.346 -3,-3c0,-1.654 1.346,-3 3,-3z"></path></g></g></svg>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Footer;