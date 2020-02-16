import React, {useState, useRef, useEffect} from 'react';

const ListTitleInput = ({listTitle, setListTitle, onBlur}) => {
  const inputEl = useRef();
  // input.current.focus();
  const [text, setText] = useState(listTitle);
  const [editMode, setEditMode] = useState(false)

  useEffect(() => {
    setEditMode(true);
    inputEl.current.focus();
  }, [editMode]);

  const handleChange = (e) => {
    setText(e.target.value);
  console.log('text',text);
  setListTitle(text);
}

  const saveTitle = () => {
    // if(!text) {
    //   alert("!");
    //   return;
    // }
    setListTitle(text);
    onBlur();
  }

  return (
    <div>
      <input ref={inputEl} type="text" value={text} style={{width: '100%'}}
        onChange={(e) => handleChange(e)} onBlur={saveTitle} />
    </div>
  );
};

export default ListTitleInput;