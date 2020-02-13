//Board를 추가하는 컴포넌트
import React from 'react';
import BoardItem from './BoardItem';
import styled from 'styled-components'

const BoardAddItemStyled = styled.div`
  cursor: pointer;
`;

const BoardAddItem = (props) => {
  //const classes = useStyles();

  const addBoardClick = () => {
    console.log("board를 추가 합니다.");
  };
  
  return (
    <BoardAddItemStyled>
      <BoardItem title={props.title} onClick={addBoardClick}>
      
      </BoardItem>
    </BoardAddItemStyled>
  );
};

export default BoardAddItem;