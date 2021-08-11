const initialState = {
    progress: false,
    totalVisits: localStorage.getItem("visitors") || 0,
    error: ""
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_STUDENT":
            return {
                ...state,
                progress: true
            }
        case "ADD_STUDENT_SUCCESS":
            return {
                ...state,
                progress: false,
                totalVisits: action.payload,
                error: ""
            }
        case "ADD_STUDENT_FAILED":
            return {
                ...state,
                progress: false,
                error: action.payload
            }
        default:
            return state
    }
}

export default reducer;