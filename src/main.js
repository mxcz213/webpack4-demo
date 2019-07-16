import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import Layout from './components/Layout/Layout'

ReactDOM.render(
    //<App />,
    <Layout />,
    document.getElementById('app')
)

if(module.hot){
    module.hot.accept();
}