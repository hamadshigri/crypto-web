import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [coins, setCoins] = useState([])
  useEffect(() => {
    axios
     .get(
       'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
     ).then(res => {
       setCoins(res.data);
     }).catch(error => console.log(error));
  });
  return (
    <div className="App">
      {coins.map(coin => {
        return (
          <div>
            <table style= {{border: 2 + "px black solid"}}>
              <tr>
                <td><img src={coin.image} style={{width: 20 + "%"}}></img></td>
                <td>{coin.symbol}</td>
                <td>{coin.current_price}</td>
              </tr>
            </table>
          </div>
        );
      })}
    </div>
  );
}

export default App;
