



export const setMessages = value => {
    console.log('inside setMessages')
	return {
		type: 'SET_MESSAGES',
		payload: {
			messages: value
		}
	};
};




export const setUsers = value => {
    console.log('value: ',value)
	return {
		type: 'SET_USERS',
		payload: {
			users: value
		}
	};
};