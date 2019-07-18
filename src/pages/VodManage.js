import React, { useEffect } from 'react'

const VodManage = ({ onChangeSelectKey }) => {
    const keys = ['vodmanage']

    useEffect(() => {
        onChangeSelectKey(keys)
    }, [])

    return (
        <div>
            vod manage
        </div>
    )
}
export default VodManage