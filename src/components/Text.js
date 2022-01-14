import React from 'react'
import {useSelector} from 'react-redux'

function Text() {
    const themeColor = useSelector((state) => state.theme.value)

    return (
        <div style={{color:themeColor}}>
            <h1>This is a text</h1>
            <h3>This is a text</h3>
            <h5>This is a text</h5>
        </div>
    )
}

export default Text
