import React, { useEffect, useState } from "react";
import axios from "axios";
import CryptoCard from "./component/CryptoCard";
import CryptoChart from "./component/CryptoChart";
const API_URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=3&page=1&sparkline=false";

function App() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setCoins(response.data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <div className="container my-5">
      <h2 className="text-center text-primary fw-bold mb-4">
        🚀 Crypto Dashboard
      </h2>
      <div className="row">
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : (
          coins.map((coin) => (
            <div key={coin.id} className="col-md-4 mb-3">
              <CryptoCard coin={coin} />
            </div>
          ))
        )}
      </div>
      <CryptoChart coins={coins} />
    </div>
  );
}

export default App;
