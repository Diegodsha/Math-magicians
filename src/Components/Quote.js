import React from 'react';
import quoteImg from '../assets/quote.jpg';

const Quote = () => (
  <div style={{ maxWidth: '537px', margin: 'auto' }} className="card">
    <img src={quoteImg} className="card-img-top" alt="quote" />
    <div className="card-body">
      <blockquote className="blockquote mb-0">
        <p>
          Without mathematics, there’s nothing you can do. Everything around you
          is mathematics. Everything around you is numbers.
        </p>
        <footer className="blockquote-footer">
          Shakuntala Devi
          <cite title="Source Title"> - Indian writer and mental calculator</cite>
        </footer>
      </blockquote>
    </div>
  </div>
);

export default Quote;
