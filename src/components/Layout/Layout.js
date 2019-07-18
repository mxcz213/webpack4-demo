import { hot } from 'react-hot-loader/root'
import React from 'react'
import { Provider } from 'react-redux'
import store from '../../components/Redux/store.js'

import { Layout } from 'antd'
import Header from '../Header/Header2'
import LeftMenu from '../LeftMenu/LeftMenu'
import './layout.less'

const { Content, Sider } = Layout

class LayoutContainer extends React.Component {
    state = {
        collapsed: false
    }

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    }

    render() {
        const { selectedKeys, openKeys, onChangeSelectKey, onOpenChange } = this.props
        return (
            <Provider store={store}>
                <Layout style={{ minHeight: '100vh' }}>
                    <Header />           
                    <Layout>
                        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                            <LeftMenu selectedKeys={selectedKeys} onChangeSelectKey={(keys) => onChangeSelectKey(keys)} onOpenChange={(openKeys) => setOpenKeys(openKeys)}/>
                        </Sider>
                        <Content style={{ margin: '0 16px' }}>
                            { this.props.children }
                        </Content>
                    </Layout>
                </Layout>
            </Provider>
        );
    }
}

export default hot(LayoutContainer)
