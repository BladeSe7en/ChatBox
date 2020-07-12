export const setRoom = value => {
	
	return {
		type: 'SET_ROOM',
		payload: {
			room: value
		}
	};
};

export const setName = value => {
	return {
		type: 'SET_NAME',
		payload: {
			name: value
		}
	};
};

export const setRoomList = value => {
	console.log('value in setroomlist action: ',value)
	return {
		type: 'SET_ROOM_LIST',
		payload: {
			roomList: value
		}
	};
};