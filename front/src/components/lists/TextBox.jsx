import React, { useState, useRef, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { BgEEE } from '../layouts'
import * as api from '../../api';

let id = 10;

const TextBox = ({mode, listIndex, initialText, state, changeMode, setState, cardIndex }) => {
  const [newCardMsg, setCardMsg] = useState(initialText);
  const textbox = useRef();
  useEffect(() => {
    textbox.current.focus();
  },[])
  const handleChange = (e) => {
    const {value} = e.target;
    setCardMsg(value);
  }

  const btnX = () => {
    setCardMsg(initialText);
    changeMode(false)
  }

  const saveCard = () => {
    changeMode(false);
    if(!newCardMsg || newCardMsg.trim() === '') {
      return;
    }
    const Lists = state.Lists;
    let newLists = [...Lists];
    if(mode === 'ADD'){
      newLists[listIndex].Cards.push({
        id: ++id,
        title: newCardMsg,
      });
    } else if (mode === 'EDIT'){
      newLists[listIndex].Cards[cardIndex].title = newCardMsg;
    }

    const newState = {...state, Lists: newLists};
    api.card.create("ffddd",1,122).then((res) =>{
      console.log('res', res);
      
    })
    setState(newState);

  }


  return (
    <BgEEE>
      <TextField
        ref={textbox}
        placeholder="제목을 입력해주세요."
        fullWidth
        multiline
        variant="outlined"
        value={newCardMsg}
        onChange={e => handleChange(e)}
        // onBlur={(e) => saveCard(e)}
        style={{background: '#fff'}}
      />
      <Button variant="contained" size="small" color="secondary" style={{margin: '8px 0 3px'}}
        onClick={() => saveCard()}>
        저장
      </Button>

      <IconButton  style={{float: 'right'}} onClick={() => {btnX()}}>
        <FontAwesomeIcon icon={faTimes} />
      </IconButton>
    </BgEEE>
  );
};

export default TextBox;