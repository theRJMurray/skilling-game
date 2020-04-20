const viewReducer = (state = 'Beach', action) => {
    switch (action.type) {
        case "Beach":
            return "Beach";
        case "Varoko":
            return "Varoko";
        default:
            return state;
    }
}

export default viewReducer