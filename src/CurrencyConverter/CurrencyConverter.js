import {useState, useEffect} from 'react';
import {Container} from 'react-bootstrap';

import Service from '../Service/Service';

import './CurrencyConverter.css';

const CurrencyConverter = () => {
    const service = new Service();
    const [сurrencies, setCurrencies] = useState([]);
    const [UAH, setUAH] = useState(0);
    const [search, setSearch] = useState(null);
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

    function onUpdateSearch(value) {
      setSearch(search => value.toLowerCase());
    }

    const content = UAH < 0 
      ? invalidValue 
      : UAH != 0 
        ? сurrencies.map((item, i) => {
              return (
                search == null || search == ''
                  ? <div key={i} 
                      className={i % 2 === 0
                        ? 'form-control value_1' 
                        : 'form-control value_2'}>
                          {item.cc}: {UAH / item.rate} ({item.txt})
                    </div>
                  : item.txt.toLowerCase().includes(search)
                    ? <div key={i} 
                        className={'form-control value_1'}>
                          {item.cc}: {UAH / item.rate} ({item.txt})
                      </div>
                    : null
              )
            })
          : null

    const searchForm = UAH > 0
      ? <input 
          type="text" 
          placeholder='search by alias' 
          className='form-control mb-1 search-form' 
          onChange={(e) => onUpdateSearch(e.target.value)}/>
      : null

    return (
      <Container>
        <input type="number" placeholder='UAH' className='form-control mb-1 input_value' onChange={(e) => onChangeUAH(e.target.value)}/>
        <div>
          {searchForm}
          {content}
        </div>
        <div>
          <button onClick={updateCurrencies} className='btn btn-outline-success mt-3 btn_style'>Update data</button>
        </div>
      </Container>
    )
}

export default CurrencyConverter;