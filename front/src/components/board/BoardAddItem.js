//Board를 추가하는 컴포넌트
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BoardItem from './BoardItem';

const useStyles = makeStyles({
  pointer: {
    cursor: 'pointer',
    backgroundColor: 'red'
  }
});

const BoardAddItem = (props) => {
  const classes = useStyles();

  const addBoardClick = () => {
    console.log("board를 추가 합니다.");
  };
  
  return (
    <BoardItem boardId={props.boardId} onClick={addBoardClick}>
    
    </BoardItem>
  );
};

export default BoardAddItem;