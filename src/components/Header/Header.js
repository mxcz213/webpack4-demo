import React, { useState } from 'react'
import { Layout, Button } from 'antd'
const { Header } = Layout

import './header.less'

export default () => {
    const [ username, setUsername ] = useState('john');
    return (
        <Header className="app-header">
            <span>我的名字叫 {username}</span>
            <Button type="primary" onClick={() => setUsername('lyli')}>修改名字</Button>
        </Header>
    )
}