//모듈들을 하나로 묶어주는 역할을 하는 파일
import { combineReducers } from 'redux';

//필요한 모듈을 불러온다.
import ModalOnOffModule from './BoardModalAdder';

//가져온 모듈을 통합한다.
const rootReducer = combineReducers({
  //모듈들은 컴마로 구분한다.
  ModalOnOffModule
});

export default rootReducer;