import React,{useState,useCallback} from 'react';
import * as api from '../api'

const MyCallBack = () => {

  const [myText, setMyText] = useState('hello react')
  //이놈은 계속해서 함수를 새로 만들고 실행한다 비효율.
  // const onInputChange = (e) => {
  //   setMyText(e.currentTarget.value)
  // };
  //원래 만든 함수를 함수내용만 useCallback에 넣고 재구현
  //그러면 컴포넌트가 최초랜더링될때 1회만 함수정의. 계속 재사용함
  const onInputChange = useCallback(
    (e) => {setMyText(e.currentTarget.value)}
  ,[]);//  두번째파라미터배열에 특정state값하면 그 값이 수정될때만. ,[] 하면 최초1회?ㅋㅋ
  const getBoard = useCallback(()=>api.board.fetch().then(data=>console.log(data)))
  const getList = useCallback(()=>api.board.fetch(13).then(data=>console.log(data)))
  const getCard = useCallback(()=>api.card.fetch(13).then(data=>console.log(data)))
  return (
    <div>
      <h3>{myText}</h3>
      <input type='text' placeholder="input...." onChange={onInputChange}/>
      <button type='button' onClick={getBoard}>get board</button>
      <button type='button' onClick={getList}>get list</button>
      <button type='button' onClick={getCard}>get card</button>
    
    </div>
  );
};

export default MyCallBack;