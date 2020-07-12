import { connect } from 'react-redux';
import Join from './Join';

function mapStoreToProps(store) {
    return {
        name    : store.Join.name,
        room    : store.Join.room,
        roomList: store.Join.roomList
    }
}

export default connect(mapStoreToProps)(Join);
