const initialstate = {
	 
	users    : [],
	messages : []
}

export default function ChatReducer(state = initialstate, action) {
	const { payload, type } = action;

	switch (type) {
      

		case 'SET_MESSAGES': {
			return {
				...state,
				...payload,
				message: ''
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


