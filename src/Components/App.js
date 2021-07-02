import React, { Fragment } from 'react'
import {Display} from './Display'
import {ButtonPanel} from './ButtonPanel'

const App = props => {
    return (
        <Fragment>
            <Display />
            <ButtonPanel />
        </Fragment>
    )
}

export default App