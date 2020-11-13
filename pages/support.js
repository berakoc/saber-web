import React from 'react'
import App from '../components/App'
import NavBar from '../components/common/NavBar'
import Body from '../components/support/Body'

function Support() {
    return (
        <App
            pageIndex={3}
            content={
                <>
                    <Body />
                </>
            }
        />
    )
}

export default Support
