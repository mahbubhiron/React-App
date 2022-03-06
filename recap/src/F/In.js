// import React from 'react';

const In = () => {
    fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
    .then(res => res.json())
    .then(data => {
      const d = data.slice(0,10)
      console.log('first = ',d);
    } )
};

export default In;