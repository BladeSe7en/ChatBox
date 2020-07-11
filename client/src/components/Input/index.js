import { connect } from 'react-redux';
import Input from './Input';

function mapStoreToProps(store){
    return {
     message     : store.Input.message
    };
}

export default connect(mapStoreToProps)(Input);