const landmarkReducer = (state = null, action) => {
    switch (action.type) {
        case "LANDMARK":
            return action.payload;
        default:
            return state;
    }
}

export default landmarkReducer