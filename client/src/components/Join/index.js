import { connect } from 'react-redux';
import Join from './Join';

function mapStoreToProps(store) {
    return {
        name: store.Join.name,
        room: store.Join.room
    }
}

export default connect(mapStoreToProps)(Join);
