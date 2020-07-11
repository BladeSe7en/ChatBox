import { combineReducers }     from 'redux';
import ChatReducer       from './components/Chat/ChatReducer';
import InputReducer      from './components/Input/InputReducer';
import JoinReducer       from './components/Join/JoinReducer';

const rootReducer = combineReducers({
    Chat : ChatReducer,
    Input: InputReducer,
    Join : JoinReducer
  

});

export default rootReducer;
