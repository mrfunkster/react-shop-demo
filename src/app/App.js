import React from "react"

import '../common/style/reset.css'
import '../common/style/base.css'

import Header from './Header/Header.js'
import Main from './Main/Main.js'
import Footer from './Footer/Footer.js'

const App = () => {
    return (
        <div className="app">
            <Header />
            <Main />
            <Footer/>
        </div>
    )
}

export default App