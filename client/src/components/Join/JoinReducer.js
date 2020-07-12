const initialstate = {
    name: '',
    room: '',
    roomList : []
}

export default function JoinReducer(state = initialstate, action) {
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

		case 'SET_ROOM_LIST': {
			console.log('payload in setroomlist reducer: ',payload)
			return {
				...state,
				roomList: payload
			}
		}

	
		
		default: {
			return state
		}
	}
}
