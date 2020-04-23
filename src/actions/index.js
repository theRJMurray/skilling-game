export const changePage = input => {
    return {
        type: "PAGE_CHANGE",
        payload: input
    }
}

export const landmarkChange = input => {
    return {
        type: "LANDMARK",
        payload: input
    }
}