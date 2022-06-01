import {useState, useEffect} from 'react';
import {Container} from 'react-bootstrap';

import Service from './Service/Service';
import './App.css';

const CurrencyConverter = () => {
    const service = new Service();
    const [сurrencies, setCurrencies] = useState([]);
    const [UAH, setUAH] = useState(0);
    const invalidValue = <div className="Invalid-value">Invalid Value</div>

    useEffect(() => {
      updateCurrencies()
    }, []);

    function updateCurrencies() {
      service.getCurrencies()
        .then(changeCurrencies)
    }

    function changeCurrencies(currency) {
      setCurrencies(сurrencies => currency);
    }
  
    function onChangeUAH(money) {
      setUAH(UAH => money);
    }

    return (
      <Container>
        <input type="number" placeholder='UAH' onChange={(e) => onChangeUAH(e.target.value)}/>
        <div>
          {UAH < 0 
            ? invalidValue 
            : сurrencies.map((item, i) => {
                  return (
                    <div key={i}>{item.cc}: {UAH / item.rate} ({item.txt})</div>
                  )
              })
          }
        </div>
        <div>
          <button onClick={updateCurrencies}>Update data</button>
        </div>
      </Container>
    )
}

function App() {
  return (
    <>
      <CurrencyConverter/>
    </>
  );
}

export default App;