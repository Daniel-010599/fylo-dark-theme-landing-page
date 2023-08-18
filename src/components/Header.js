import Logo from '../images/logo.svg';
import '../styles/Header.css';

const Header = () =>{
    return(
        <div className='header'>
            <img src={Logo} alt='Fylo'/>
            <nav>
                <ul>
                    <li><a href='/'>Features</a></li>
                    <li className='li-team'><a href='/'>Team</a></li>
                    <li><a href='/'>Sign In</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;