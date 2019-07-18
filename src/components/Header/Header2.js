import React, { useState } from 'react'

import { Layout, Button } from 'antd'
const { Header } = Layout

import './header.less'

export default () => {
    //const [ username, setUsername ] = useState('john');
    return (
        <Header className="app-header">
            压制系统
        </Header>
    )
}