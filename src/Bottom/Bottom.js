import {useState, useEffect} from 'react';
import {Container} from 'react-bootstrap';

import bottom from '../Images/Bottom.jpg';

import './Bottom.css';

const Bottom = () => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        setInterval(() => {
            var now = new Date();
            setTime(time => now.toLocaleTimeString());
        }, 1000);
    }, [time]);

    return (
        <Container>
            <div className='footer'>
                <div className='clock'>{time}</div>
                <img src={bottom} className="bottom mt-5"/>
            </div>
        </Container>
    )
}

export default Bottom;