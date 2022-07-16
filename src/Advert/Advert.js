import {useState} from 'react';
import {Container} from 'react-bootstrap';

import './Advert.css';

const Advert = () => {
    const [closed, setClosed] = useState(false);
    const [timer, setTimer] = useState('Close');
    
    const btn = <button className='btn btn-outline-danger btn-style' onClick={() => ClosedWindow(5000)}>{timer}</button>

    const advert = (
        <div className='wrapper'>
            <div className='advert'>ADVERT</div>
            {btn}
        </div>
    )

    function ClosedWindow(time) {
        let t = time / 1000;
        ChangeTimer(t);
        const timeId = setInterval(() => {
            t--;
            ChangeTimer(t);
        }, 1000);
        
        setTimeout(() => {
            ChangeClosed();
            clearInterval(timeId);
        }, time);
    }

    function ChangeClosed() {
        setClosed(closed => true)
    }

    function ChangeTimer(time) {
        setTimer(timer => time);
    }

    return (
        <Container>
            {!closed ? advert : null}
        </Container>
    )
}

export default Advert;