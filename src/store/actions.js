import Axios from "axios"

const getServer = "https://my-json-server.typicode.com/mrfunkster/json-server/products"
const postServer = "https://my-json-server.typicode.com/mrfunkster/json-server/purchaseInfo"
const messageTimeToShow = 5000

export function showLoader() {
    return {
        type: "SHOW_LOADER"
    }
}

export function deleteAllProductFromCart() {
    return {
        type: "REMOVE_ALL_PRODUCTS_FROM_CART"
    }
}

export function hideLoader() {
    return {
        type: "HIDE_LOADER"
    }
}

export function showErrorMessage(errorMessage, messageType = "ERROR") {
    return dispatch => {
        dispatch({
            type: "SHOW_ERROR",
            errorMessage,
            messageType
        })
        setTimeout(()=>{
            dispatch({
                type: "HIDE_ERROR"
            })
        }, messageTimeToShow)
    }
}

export function fetchData() {
    return async dispatch => {
        try {
            dispatch(showLoader())
            const data = await Axios.get(getServer)
                .then(response => response.data)
            setTimeout(() => {
                dispatch({
                    type: "FETCH_DATA",
                    payload: data
                })
                dispatch(hideLoader())
            }, 200)
        } catch (error) {
            dispatch(hideLoader())
            dispatch(showErrorMessage("Ooops.. Something go wrong... Refresh page!"))
        }
    }
}

export function postData(sData) {
    return async dispatch => {
        try {
            dispatch(showLoader())
            Axios.post(postServer, [sData])
                .then(response => {
                    console.log("SENDED DATA:")
                    console.log(response.data)
                })
            setTimeout(()=>{
                dispatch(hideLoader())
                dispatch(showErrorMessage("Your data succesfuly sended to server!", "NOTIFICATION"))
                dispatch(deleteAllProductFromCart())
                Axios.get(postServer)
                    .then(response => {
                        console.log("RECIEVED DATA:")
                        console.log(response.data)
                    })
            }, 3000)
        } catch (error) {
            dispatch(showErrorMessage("Something go wrong..."))
        }
    }

}