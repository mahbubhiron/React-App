// import React from 'react';

const In1 = () => {
    fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
    .then(res => res.json())
    .then(data => {
      const d = data.slice(11,20);
      console.log('second = ',d);
    } )
};

export default In1;