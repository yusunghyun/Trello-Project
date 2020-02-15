//Board에 메인 컨테이너. 보드와 관련된 컴포넌트는 모두 여기서 시작된다.
import React, { useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CommonCss from '../../css/CommonCss';
import BoardAddItem from './BoardAddItem';
import BoardLinkItem from './BoardLinkItem';
import * as api from '../../api/index';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  board: CommonCss.commonContainerCss,
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  boardAddInput: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
  boardAddButton: {
    marginTop: 18,
  }
}));

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

/**
 * 페이지 용도
 *  - 처음 시작 됐을 때 화면
 */
const BoardContainer = () => {
  const classes = useStyles();
  
  //유저의 board 데이터를 관리하는 state
  let [board, setBoard] = React.useState([]);

  //modal 관련 state
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  
  //button 클릭시 유효성 체크 state
  const [inputErr, setInputErr] = React.useState(false);
  const [inputErrMessage, setInputErrMessage] = React.useState("");

  React.useEffect(() => {
    //board data를 가져오는 ajax.
    function makeBoardData() {
      api.board.fetch().then(
        data => setBoard(data.list)
      );
    }
    makeBoardData();
  }, []);
  
  //보드 추가 모달창 열기
  const boardAddOpen = () => {
    console.log("board를 추가 합니다.");
    setOpen(true);
  };

  //보드 추가 모달창 닫기
  const boardAddClose = () => {
    console.log("board를 추가 modal을 닫습니다.");
    setOpen(false);
  };

  //보드 추가 인풋 값 ref, 보드 추가 하기 버튼 클릭
  const boardAddInput = React.useRef();
  const boardAddClick = React.useCallback((e) => {
    api.board.fetch().then(
      data => {
        setBoard(data.list);
        console.log(board)
      }
    )
  }, [boardAddInput])

  return (
    <div className={[classes.board].join(' ')}>
      {/*board의 기본 경로*/}

        {
          board.map((v, i)=>(
            <BoardLinkItem key={v.id} id={v.id} title={v.title}/>
          ))
        }
      <BoardAddItem openModalEvent={boardAddOpen} setBoard={setBoard} title={"추가"}></BoardAddItem>

      {/* 보드 추가 모달 창 */}
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={boardAddClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">Board 추가</h2>
          <form className={classes.boardAddInput} noValidate autoComplete="off">
          <TextField
            error={inputErr}
            id="outlined-error-helper-text"
            defaultValue="Board 이름 입력"
            helperText={inputErrMessage}
            variant="outlined"
          />
          <Button onClick={boardAddClick} className={classes.boardAddButton} variant="contained" color="primary">
            추가
          </Button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default BoardContainer;