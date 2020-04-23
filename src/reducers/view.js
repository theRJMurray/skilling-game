const viewReducer = (state = 'Forest', action) => {
    switch (action.type) {
        case "PAGE_CHANGE":
            return action.payload;
        default:
            return state;
    }
}

export default viewReducer