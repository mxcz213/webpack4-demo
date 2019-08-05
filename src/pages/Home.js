import React, { useEffect } from 'react'

import { Hello } from 'npm-publish-ts-demo';

const Home = ({ onChangeSelectKey }) => {
    const keys = ['home']

    useEffect(() => {
        onChangeSelectKey(keys)
    }, [])

    return (
        <div>
            {Hello('TypeScript')}
        </div>
    )
}
export default Home