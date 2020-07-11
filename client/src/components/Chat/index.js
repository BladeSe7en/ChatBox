import { connect } from 'react-redux';
import Chat from './Chat';

function mapStoreToProps(store) {
    return {
        roomList: store.Chat.roomList,
        users: store.Chat.users,
    }
}

export default connect(mapStoreToProps)(Chat);
