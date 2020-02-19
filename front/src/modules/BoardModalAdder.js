import { createAction, handleActions } from 'redux-actions';

//1) board 추가 모달의 on/off 액션
const ModalOnOff = 'board/ModalOnOff';

//2) board 추가 모달의 액션 함수
export const modalOnOffAction = createAction(ModalOnOff);

//3) board 추가 모달의 상태 값
const initialState = {
  open: false
}

//4) board 추가 모달의 리듀서
const modalOnOffReducer = {
  [ModalOnOff] : function(state, action) {
    const openValue = state.open ? false : true;

    return {open: openValue};
  }
}

//5) 스토어 생성
// 리듀서와 상태값을 묶어 스토어 생성. 실제 스토어 생성은 index.js에서 된다.
const ModalOnOffModule = handleActions(modalOnOffReducer, initialState);
export default ModalOnOffModule;
