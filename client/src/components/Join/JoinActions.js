export const setRoom = value => {
    console.log('inside setRoom action: ',value)
	return {
		type: 'SET_ROOM',
		payload: {
			room: value
		}
	};
};

export const setName = value => {
	console.log('inside setName action: ',value)
	return {
		type: 'SET_NAME',
		payload: {
			name: value
		}
	};
};