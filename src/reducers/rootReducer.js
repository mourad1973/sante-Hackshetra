// import config from '../config.json'
export default function reducer(state, action) {
    const {
        type,
        payload
    } = action;

    switch (type) {
        case 'LOGIN':
            return {
                ...state,
                user: payload,
                    isAuth: true
            }
            case 'LOGOUT':
                return {
                    ...state,
                    user: null,
                        isAuth: false
                }
                case 'UTYPE':
                    return {
                        ...state,
                        user: payload
                    }
                    default:
                        return state;
    }
}