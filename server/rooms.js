const rooms = [];

const addRoom = ({ id, roomName }) => {
  roomName = roomName.trim().toLowerCase();
  console.log('this is trimmed room: ',roomName)

  const existingRoom = [...new Set(roomName)];;
  console.log('this existingRoom ',existingRoom)

  const oneRoom = { id, roomName };
  console.log('this is new room: ',oneRoom)

  rooms.push(oneRoom);

  console.log('this is rooms array: ',rooms)

  return { rooms };
}

const removeRoom = (id) => {
  const index = rooms.findIndex((room) => room.id === id);
  console.log('this is index of room: ',index)

  if(index !== -1) return rooms.splice(index, 1)[0];
  console.log('this is the new rooms array: ',rooms)
}

const getAllRooms = () => rooms;


 module.exports = { addRoom, removeRoom, getAllRooms };
