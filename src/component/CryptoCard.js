import React from "react";

const CryptoCard = ({ coin }) => {
  return (
    <div className="card shadow-lg border-0 rounded-lg text-center p-3 bg-light">
      <div className="card-body">
        <h5 className="card-title text-primary fw-bold">{coin.name}</h5>
        <p className="card-text h5">
          💰 ${coin.current_price.toLocaleString()}
        </p>
        <p
          className={`fw-bold h6 ${
            coin.price_change_percentage_24h > 0
              ? "text-success"
              : "text-danger"
          }`}>
          {coin.price_change_percentage_24h.toFixed(2)}%
        </p>
      </div>
    </div>
  );
};

export default CryptoCard;
