export const setMessage = value => {
	console.log('value in setMessage: ',value)
	return {
		type: 'SET_MESSAGE',
		payload: {
			message: value
		}
	};
};