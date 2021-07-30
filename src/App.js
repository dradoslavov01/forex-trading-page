import './App.css';
import { useEffect, useState, useRef } from 'react';

import data from './data'

function App() {

  const [currencies, setCurrencies] = useState([...data]);

  const [values, setValues] = useState(data.map(e => Number(Object.values(e)[0])));


  let updateTime = Date.now();
  const endTime = updateTime + 300000;
  const flipTime = 60000;
  let dir = 1;

  useEffect(() => {
    const timer = setInterval(function () {

      if (Date.now() - updateTime >= flipTime) {
        updateTime = Date.now();
        dir *= -1;
      }
      setValues(prevValue => prevValue.map(e => {
        if (e > 1.0001) {
          return e += dir * 0.0001
        } else {
          return e = 1.0001;
        }
      }
      ))

      // If over end time, stop looping
      if (Date.now() >= endTime) {
        window.clearTimeout(timer);
      }

    }, 5000);
  }, []);
  const prevVal = usePrevious(values) || values;


  return (
    <div className="App">
      <ul>
        {currencies.map((e, index) => {
          return (
            <div className='currency'>
              <li>{`EUR${Object.keys(e)}`} : </li>
              <p className={values[index] < prevVal[index] ? 'red' : 'green'}>{`${values[index].toFixed(4)}`}</p>
            </div>
          )
        })}
      </ul>
    </div>
  );
}
export default App;


//custom hook for getting the previous values of the currencies
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}