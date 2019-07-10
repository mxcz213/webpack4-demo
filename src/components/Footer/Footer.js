import React from 'react'
import { Layout } from 'antd'
const { Footer } = Layout

import './footer.less'

export default () => {
    return (
        <Footer className="app-footer">
            Copyright @pptvyun 2007-2019
        </Footer>
    )
}