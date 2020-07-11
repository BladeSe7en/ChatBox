const initialstate = {
    name: '',
    room: '',
    test: 'hello'
}

export default function JoinReducer(state = initialstate, action) {
	const { payload, type } = action;

	switch (type) {
        case 'SET_ROOM': {
            console.log('this is payload setroom: ',payload)
			return {
				...state,
				...payload
			}
		}

		case 'SET_NAME': {
            console.log('this is payload setName: ',payload)
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
