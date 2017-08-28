export default (state = {}, action) => {
    const reducer = {
        LOGGED: () => ({ ...state, user: action.payload }),
        DEFAULT: () => state
    }

    return (reducer[action.type] || reducer['DEFAULT'])();
};
