import React, { Component } from 'react'
import { Button } from 'antd'
import './css/main'

export default class App extends Component {
    render(){
        return (
            <div>
                <span>hello react</span>
                <Button type="primary">搜索</Button>
            </div>
        )
    }
}