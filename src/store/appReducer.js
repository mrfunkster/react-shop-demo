const initialState = {
    loading: false,
    showError: false,
    errorMessage: "",
    messageType: "ERROR"
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SHOW_LOADER":
            return {...state, loading: true}
        case "HIDE_LOADER":
            return {...state, loading: false}
        case "SHOW_ERROR": 
            return {
                ...state,
                showError: true,
                errorMessage: action.errorMessage,
                messageType: action.messageType
            }
        case "HIDE_ERROR": 
            return {
                ...state,
                showError: false,
                errorMessage: "",
                messageType: "ERROR"
            }
        default: return state
    }
}

export default appReducer