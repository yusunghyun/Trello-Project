//Board에 메인 컨테이너. 보드와 관련된 컴포넌트는 모두 여기서 시작된다.
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CommonCss from '../../css/CommonCss';
import BoardItem from './BoardItem'
import BoardLinkItem from './BoardLinkItem'

const useStyles = makeStyles({
  board: CommonCss.commonContainerCss
})

//board를 가져오는 ajax. 서버 개발전 까지 하드 코딩 데이터로 대체
const boardData = [
  {title: 'board1', boardKey: 1, boardid: 1},
  {title: 'board2', boardKey: 2, boardid: 2},
  {title: 'board3', boardKey: 3, boardid: 3},
  {title: 'board4', boardKey: 4, boardid: 4}
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
  })
  
  return (
    <div className={[classes.board].join(' ')}>
      {/*board의 기본 경로*/}

        {
          board.map((v, i)=>(
            <BoardLinkItem key={i} boardid={v.boardid}/>
          ))
        }
      <BoardItem plus={"plus"} boardid={0}></BoardItem>
    </div>
  );
};

export default BoardContainer;