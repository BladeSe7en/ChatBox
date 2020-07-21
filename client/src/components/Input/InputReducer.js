const initialstate = {
	message  : '',
}

export default function InputReducer(state = initialstate, action) {
	const { payload, type } = action;

	switch (type) {
		case 'SET_MESSAGE': {
			console.log('payload in setMessage reducer: ',payload)
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
