import { connect } from 'react-redux';
import Chat from './Chat';

function mapStoreToProps(store) {
    return {
        name: store.Chat.name,
        room: store.Chat.room,
        roomList: store.Chat.roomList,
        users: store.Chat.users,
    }
}

export default connect(mapStoreToProps)(Chat);
