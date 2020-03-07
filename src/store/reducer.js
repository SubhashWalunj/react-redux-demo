const initialState = {
    counter: 5
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT': return {
            counter: state.counter + 1
        };
        case 'DECREMENT': return {
            counter: state.counter - 1
        };
        case 'ADD': return {
            counter: state.counter + action.value
        };
        case 'REMOVE': return {
            counter: state.counter - action.value
        }

    }
    return state;
}

export default reducer;