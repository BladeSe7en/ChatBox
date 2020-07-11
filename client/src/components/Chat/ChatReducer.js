const initialstate = {
    name         : '',
    room    : '',
	roomList       : [], 
	users   : [],
	messages   : []
}

export default function ChatReducer(state = initialstate, action) {
	const { payload, type } = action;

	switch (type) {
        case 'SET_ROOM': {
			return {
				...state,
				...payload
			}
		}

		case 'SET_NAME': {
			return {
				...state,
				...payload
			}
		}

		case 'SET_MESSAGES': {
			return {
				...state,
				...payload
			}
		}

		case 'SET_ROOM_LIST': {
			return {
				...state,
				...payload
			}
		}

		case 'SET_USERS': {
			return {
				...state,
				...payload
			}
		}
		
	
	
		default: {
			return state
		}
	}
}


