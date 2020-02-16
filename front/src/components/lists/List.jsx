import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import {Droppable} from 'react-beautiful-dnd';
import Card from './Card';
import Button from '@material-ui/core/Button';

import TextBox from './TextBox';
import ListTitleInput from './ListTitleInput';

const Container = styled.div`
  flex-direction: column;
  margin: 8px;
  width: 280px;
  display: flex;
  border-radius: 5px 5px 0 0;
  box-sizing: border-box;
`;
const Title = styled.h3`
  padding: 8px;
  background-color: #eee;
  border-radius: 5px 5px 0 0;
  cursor: text;
`;
const CardList = styled.div`
  flex-grow: 1;
  min-height: Calc(100vh - 110px);
  border-radius: 5px;
`;


const CardBox = styled.div`
  background-color: ${props => (props.isDraggingOver ? 'rgb(255, 188, 157)' : '#eee')};
  padding: 8px;
  min-height: 10px;
  // overflow-y: auto;
`;

const BtnContainer = styled.div`
  background-color: #eee;
  padding: 8px;
`;

const List = (props) => {
  console.log(props);
  console.log(props.list);
  const [mode, setMode] = useState(props.listEditMode);
  const [listTitle, setListTitle] = useState(props.list.title);
  const [titleEditMode, setTitleEditMode] = useState(props.listEditmode);
  const textAreaRef = useRef();
  
  useEffect(() => {
    console.log('textAreaRef',textAreaRef.current); // DOM node
  }, []);

  useEffect(() => {
    console.log('LIST',props.list);
  }, [props.list]);

  const changeMode = (mode) => {
    // textAreaRef.current.focus();
    setMode(mode);
  }

  const changeListTitle = (text) => {
    setListTitle(text)
    console.log(text);
  }

  return (
    <Container>
      <Title> 
        {console.log('listEditmode', props.listEditmode)}
        {console.log('title', titleEditMode)}
        {titleEditMode 
          ? <ListTitleInput listTitle={listTitle} setListTitle={changeListTitle} onBlur={() => setTitleEditMode(false)}/> 
          : <div onClick={() => setTitleEditMode(true)}>{listTitle}</div>
        } 
      </Title>
      <Droppable droppableId={props.list.id.toString()}>
        {(provided, snapshot) => (
          <CardList
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <CardBox
              isDraggingOver={snapshot.isDraggingOver}
            >
              {props.cards.map((card, index) => 
                <Card key={'card'+card.id} card={card} cardIndex={index} state={props.state} setState={props.setState} listIndex={props.listIndex}/>)}
              {provided.placeholder}
              
            </CardBox>
            <BtnContainer>
              {mode
              ? <TextBox mode={mode} listIndex={props.listIndex} initialText={''} state={props.state} changeMode={changeMode} setState={props.setState}/>
              : <Button variant="outlined" fullWidth size="medium" onClick={() => changeMode("ADD")}>
                  + 카드 추가
                </Button>
              }
            </BtnContainer>
          </CardList>
        )}
      </Droppable>
    </Container>
  )
}

export default List;