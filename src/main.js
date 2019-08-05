import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Redirect } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import VodManage from './pages/VodManage'

const App = () => {
    const [selectedKeys, setSelectedKeys] = useState(['home'])

    return(
        <HashRouter basename="/">
            <Layout 
                selectedKeys={selectedKeys}
                onChangeSelectKey={(keys) => setSelectedKeys(keys)}
            >
                <Route path="/" render={() => <Home onChangeSelectKey={(keys) => setSelectedKeys(keys)} />} exact />
                <Route path="/vodmanage" render={() => <VodManage onChangeSelectKey={(keys) => setSelectedKeys(keys)} />} />
            </Layout>
        </HashRouter>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)

if(module.hot){
    module.hot.accept();
}