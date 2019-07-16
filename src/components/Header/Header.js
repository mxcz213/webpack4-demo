import React, { useState } from 'react'
import { connect } from 'react-redux'

import { Layout, Button } from 'antd'
const { Header } = Layout

import './header.less'

/*export default () => {
    //const [ username, setUsername ] = useState('john');
    return (
        <Header className="app-header">
            压制系统
        </Header>
    )
}*/

const HeaderBar = ({ counter, username, rename, add }) => {
    return <Header>
        counter： {counter}，username：{username}
        <button onClick={() => add(counter + counter)}>add</button>
        <input value={username} onChange={(e) => rename(e.target.value)}/>
    </Header>
}

//mapStateToProps, 在每次store中的state改变时都会被调用，接收参数为整个的state, 返回Header组件所需的数据对象，这个对象会作为props传给Header组件
const mapStateToProps = (state) => {
    return {
        counter: state.counter.count,
        username: state.user.username
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        add: (num) => dispatch({ type: 'ADD', num}),
        rename: (newName) => dispatch({type: 'UPDATE_USERNAME', newName})
    }
}

//Connecting the Components
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderBar)