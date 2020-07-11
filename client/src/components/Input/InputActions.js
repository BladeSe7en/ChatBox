export const setMessage = value => {
	return {
		type: 'SET_MESSAGE',
		payload: {
			message: value
		}
	};
};