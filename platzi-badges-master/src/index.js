import React from 'react';
import ReactDOM from 'react-dom';

const name = 'Diego';
const jsx = <h1>Hello, i am {2-2}!</h1>;

// const element = React.createElement(
//     'a', 
//     { href: 'https://brumier.com.ar' },
//      'Ir a brumier'
//      );
const container = document.getElementById('app');



// ReactDOM.render(__que__, __donde__)
ReactDOM.render(jsx, container);