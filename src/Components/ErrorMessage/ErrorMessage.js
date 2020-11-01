import React from 'react'
import { connect } from 'react-redux'

import './ErrorMessage.css'

const ErrorMessage = ({
    showMessage,
    errorMessage,
    messageType
}) => {
    return (
        <div className={showMessage ? messageType === "NOTIFICATION" ? "error-message notification active" : "error-message active" : "error-message"}>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className="error-message-text">{errorMessage}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    showMessage: state.app.showError,
    errorMessage: state.app.errorMessage,
    messageType: state.app.messageType
})

export default connect(
    mapStateToProps
)(ErrorMessage)