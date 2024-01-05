import {ReactComponent as Logo} from '../img/mcm-logo.svg';
import {ReactComponent as Hamburger} from '../img/Hamburger.svg';

const Navbar = () => {
    return (
        <>
            <nav className='navbar'>
                <Logo />
                <Hamburger />
            </nav>
        </>
    )
}

export default Navbar;