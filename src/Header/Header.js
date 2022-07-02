import {Container} from 'react-bootstrap';

import currency from '../Images/Currency.png';

import './Header.css';

const Header = () => {
    return (
        <Container>
            <div className='navigation mb-3'>
                <img src={currency} alt='currency' className='photo'/>
                <a className='nav' href='#'>fifth</a>
                <a className='nav' href='#'>fourth</a>
                <a className='nav' href='#'>third</a>
                <a className='nav' href='#'>second</a>
                <a className='nav' href='#'>first</a>
            </div>
        </Container>
    )
}

export default Header;