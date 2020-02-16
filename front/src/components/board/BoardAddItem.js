//Board를 추가하는 컴포넌트
import React from 'react';
import BoardItem from './BoardItem';
import styled from 'styled-components'

const BoardAddItemStyled = styled.div`
  cursor: pointer;
`;


const BoardAddItem = (props) => {
  //const classes = useStyles();
  
  return (
    <BoardAddItemStyled  onClick={props.openModalEvent}>
      <BoardItem title={props.title}>
      
      </BoardItem>
    </BoardAddItemStyled>
  );
};

export default BoardAddItem;