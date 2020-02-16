import React, {useState} from 'react'
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import TextBox from './TextBox';

const Container = styled.div`
  position:relative;
  display: flex;
  flex-direction: column;
  border: 1px solid #eee;
  border-color: ${props => (props.isDragging? '#000' : '#eee')};
  border-radius: 10px;
  padding : 8px;
  margin-bottom: 8px;
  background-color: ${props => (props.isDragging? 'rgb(0, 0, 0, 0.3)' : 'white')};
  transition: all .3s;
  &:hover > div, &:focus > div{
    display: block;
  }
`
const HoverCover = styled.div`
  position: absolute;
  top:0;
  right: 0;
  display: none;
  width:100%;
  height:100%;
  padding:3px;
  text-align: right;
  color: #fff;
  border-radius: 10px;
  background-color: rgb(0, 0, 0, 0.3);
  box-sizing: border-box;
`;

const EditBtn = styled.span`
  display: inline-block;
  width: 30px;
  height: 30px;
  font-size: 10px;
  line-height:30px;
  text-align: center;
  border-radius: 50%;
  :after{
    display: block;
    width: 100%;
    height: 100%;
    line-height:30px;
    text-align: center;
    border-radius: 50%;
    content: '…';
    background-color: rgb(0, 0, 0, 0.3);
    cursor: pointer;
  }
`;

const TextContainer = styled.div`
  padding: 8px 0;
`;

const alert1 = (e) => {
  e.preventDefault()
  e.stopPropagation();
}

const Card = ({state, setState, listIndex, card, cardIndex}) =>  {
  const [mode, setMode] = useState(false);
  const [text, setText] = useState('');
  
  const edit = (e) => {
    e.stopPropagation();
    setText(e.target.parentElement.parentElement.textContent)
    setMode('EDIT');
  } 
  const editOnHover = (e) => {
    e.stopPropagation();

    e.preventDefault();
    setText(e.target.parentElement.textContent)
    setMode('EDIT');
  }

    return (
      mode === "EDIT"
      ?
      <TextContainer>
        <TextBox mode={"EDIT"} listIndex={listIndex} initialText={text} state={state} changeMode={setMode} setState={setState} cardIndex={cardIndex} />
      </TextContainer>
      :<>
        <Draggable draggableId={card.id.toString()} index={cardIndex}>
          {(provided, snapshot) => (
            <Container
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
              isDragging={snapshot.isDragging}
            >
              <HoverCover onClick={(e) => alert1(e)} onContextMenu={(e) => editOnHover(e)}>
                <EditBtn onClick={(e) => edit(e)} onContextMenu={e => {e.stopPropagation(); e.preventDefault()}} />
              </HoverCover>
              
              {card.title}
            </Container>
          )}
          
        </Draggable>
      </>
    )
  
}

export default Card;