import React from 'react'

import LoaderAnimation from './Loader.svg'

const Loader = () => {
    const style = {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
    return (
        <div className="loader" style={style}>
            <img src={LoaderAnimation} alt="" style={{width: "10%"}}/>
        </div>
    )
}

export default Loader