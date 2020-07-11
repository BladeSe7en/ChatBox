import { combineReducers }     from 'redux';
import ChatReducer       from './components/Chat/ChatReducer';
import InputReducer      from './components/Input/InputReducer';

const rootReducer = combineReducers({
    Chat : ChatReducer,
    Input: InputReducer
  

});

export default rootReducer;
