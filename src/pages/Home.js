import React, { useEffect } from 'react'

const Home = ({ onChangeSelectKey }) => {
    const keys = ['home']

    useEffect(() => {
        onChangeSelectKey(keys)
    }, [])

    return (
        <div>
            home  home   home 
        </div>
    )
}
export default Home