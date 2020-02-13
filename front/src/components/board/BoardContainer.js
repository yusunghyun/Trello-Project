//Board에 메인 컨테이너. 보드와 관련된 컴포넌트는 모두 여기서 시작된다.
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CommonCss from '../../css/CommonCss';
import BoardAddItem from './BoardAddItem'
import BoardLinkItem from './BoardLinkItem'

const useStyles = makeStyles({
  board: CommonCss.commonContainerCss,
})

//board를 가져오는 ajax. 서버 개발전 까지 하드 코딩 데이터로 대체
const boardData = [
  {title: 'board1', boardId: 1},
  {title: 'board2', boardId: 2},
  {title: 'board3', boardId: 3},
  {title: 'board4', boardId: 4}
];

/**
 * 페이지 용도
 *  - 처음 시작 됐을 때 화면
 */
const BoardContainer = () => {
  const classes = useStyles();
  
  //유저의 board 데이터를 관리하는 state
  let [board, setBoard] = React.useState([]);

  React.useEffect(() => {
    //board data를 가져오는 ajax. 서버 개발 후 로직 작성
    // let boardData = () => {
  
    // }

    setBoard(boardData);
  }, []);
  
  return (
    <div className={[classes.board].join(' ')}>
      {/*board의 기본 경로*/}

        {
          board.map((v, i)=>(
            <BoardLinkItem key={i} boardId={v.boardId}/>
          ))
        }1
      <BoardAddItem setBoard={setBoard} boardId={0}></BoardAddItem>
    </div>
  );
};

export default BoardContainer;