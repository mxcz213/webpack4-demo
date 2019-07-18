import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'antd'
import { leftMenu } from '../constant'

const MenuItem = Menu.Item
const SubMenu = Menu.SubMenu

const LeftMenu = ({ selectedKeys, onChangeSelectKey }) => {
    const constMenuStr = leftMenu.map((item, index) => {
        return item.subMenu.length === 0 
            ? 
                <MenuItem key={item.key}>
                    <Link to={item.path}>
                        <Icon type={item.iconType} />
                        <span>{item.title}</span>
                    </Link>
                </MenuItem>
            :   <SubMenu 
                    key={item.key} 
                    title={
                        <span>
                            <Icon type={item.iconType} />
                            <span>{item.title}</span>                       
                        </span>
                    }
                >
                    {
                        item.subMenu.map((sub) => {
                            return (
                                <MenuItem key={sub.key}>
                                    <Link to={sub.path}>
                                        <Icon type={sub.iconType} />
                                        <span>{sub.title}</span>
                                    </Link>
                                </MenuItem>
                            )
                        })
                    }
                </SubMenu>

    })
    return(
        <Menu 
            theme="dark"
            selectedKeys={selectedKeys}
            mode="inline" 
            onClick={({ item, key, keyPath, domEvent }) => onChangeSelectKey([key])}
        >
            { constMenuStr }
        </Menu>
    )
}

export default LeftMenu