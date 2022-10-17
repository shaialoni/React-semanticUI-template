import React from 'react'
import {createRoot} from 'react-dom/client'
import 'semantic-ui-css/semantic.min.css'

const container = document.getElementById('root')
const root = createRoot(container)

const App = () => {
    return (
        <div>
            Hello World!
        </div>
    )
}

root.render(<App tab="root" />)