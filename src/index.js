import React from 'react'
import  { render } from 'react-dom'
import * as serviceWorker from './serviceWorker'
import "bootstrap/dist/css/bootstrap.min.css"
import HomePage from './components/HomePage'


render(<HomePage/>, document.getElementById("root"))




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
