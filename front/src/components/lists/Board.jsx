import React, {useState, useEffect, useRef} from 'react';

import { DragDropContext } from 'react-beautiful-dnd'
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
// import Container from '@material-ui/core/Container';
import {FlexContainer, Container, TitleBar, VerticalContainer} from '../layouts'
import {dummyData} from './initial-data';
import List from './List';

// const Container = styled.div`
//   display: flex;
// `;

let LISTID = 3;

const MenuBtn = styled.span`
  display: inline-block;
  margin-left: auto;
  padding: 6px 10px;
  font-size: 10px;
  line-height: 10px;
  vertical-align: text-bottom;
  border: 1px solid #ddd;
  cursor: pointer;
`;

const AddListBtn = styled.div`
  margin: 8px;
  width: 280px;
  height: 36px;
  line-height: 36px;
  text-align: center;
`;

const MenuContainer = styled.div`
  display: none;
  width:0px;
  height: 100vh;
  background: #eee;
  transition: all .3s;
  &.on{
    display: block;
    width: 350px;
    transition: all .3s .1s;
}`;

const Board = () => {
  const [state, setState] = useState(dummyData.item);
  const [listEditMode, setListEditMode] = useState(false);
  const [menuOn, setMenuOn] = useState(false);
  const menu = useRef();

  const addList = () => {
    const newState = {...state};
    newState.Lists.push({
      id: ++LISTID,
      title: "",
      pos: 99999,
      createdAt: "",
      updatedAt: "",
      BoardId: 17,
      Cards: [],
    });
    setListEditMode(true);
    setState(newState);
  }

  const showMenu = () => {
    setMenuOn(!menuOn)
    console.log('menuj',menuOn, menu.current);
    if(menuOn){
      menu.current.classList.add('on');
    }else {
      menu.current.classList.remove('on');

    }
  }
  const onDragUpdate = update => {
    const {destination} = update;
    const opacity = destination
      ? destination.index / Object.keys(state.Cards).length
      : 0;
    document.body.style.backgroundColor = `rgba(153, 141, 217, ${opacity})`
  }

  const onDragEnd = result => {
    //todo reorder this column
    console.log('result,', result)
    document.body.style.backgroundColor = 'inherit'
    const { destination, source, draggableId } = result;
  
    if(!destination){
      return;
    }
  
    if(destination.droppableId === source.droppableId && 
      destination.index === source.index
      ){
        return;
      }
    console.log(state.Lists, source.droppableId)
    const lists = state.Lists;
    const start = lists.find(o => o.id.toString() === source.droppableId);
    const finish = lists.find(o => o.id.toString() === destination.droppableId);
      console.log('start',start)
      
    const startCards = start.Cards;
    const moved = startCards.splice(source.index, 1);
    
    if(start === finish){

      console.log('moved',moved)
      startCards.splice(destination.index, 0, ...moved);

      startCards.forEach((o, i) => o.pos = i);

      setState(state);
      
      return;
    }

    const newStart = {
      ...start,
      Cards: startCards,
    }

    // const fininshTaskIds = Array.from(finish.taskIds);
    const finishCards = finish.Cards;
    finishCards.splice(destination.index, 0, ...moved);

    const newFinish = {
      ...finish,
      Cards: finishCards,
    }
    
    // const newState = {
    //   ...state,
    //   columns: {
    //     ...state.columns,
    //     [newStart.id] : newStart,
    //     [newFinish.id]: newFinish,
    //   }
    // }

    setState(state)

  }
    return (
      <VerticalContainer>
        <div style={{width: '100%'}}>
      <TitleBar >
        <b>{state.title}</b>
        <MenuBtn onClick={showMenu}>메뉴 보기</MenuBtn>
      </TitleBar>
        <FlexContainer>
          <DragDropContext onDragEnd={onDragEnd} >
            {state.Lists.map((o, i) => {
              const list = o;
              const cards = list.Cards;
              return <List key={'list'+list.id} state={state} list={list} listIndex={i} cards={cards} setState={setState} index={i} listEditmode={listEditMode}/>
            })}
            <AddListBtn>

              <Button variant="outlined" fullWidth size="medium" onClick={() => {addList()}}>
                + 리스트 추가
              </Button>
            </AddListBtn>
            {/* {state.columnOrder.map(columnId => {
            const column = state.Lists[columnId];
            const tasks = column.taskIds.map(taskId => state.Lists[taskId]);
            return <Column key={column.id} column={column} tasks={tasks}/>
            })} */}
          </DragDropContext>
        </FlexContainer>
        </div>
        <MenuContainer ref={menu}>
          <div>
            adsf<br/>
          asdfadsafa
          </div>
        </MenuContainer>
      </VerticalContainer>
    )
}

export default Board;