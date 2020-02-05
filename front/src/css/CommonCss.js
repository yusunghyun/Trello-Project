// 공통 css에 해당하는 파일
const CommonCss = {
  //헤더의 크기만큼 container를 아래로 내려주는 css. 
  //static으로 잡혀 있는 헤더 아래에 자동으로 컴포넌트를 렌더링 할 수 있으면 없어질 css
  commonContainerCss: {
    position: 'relative',
    marginTop: '65px'
  }
}

export default CommonCss;