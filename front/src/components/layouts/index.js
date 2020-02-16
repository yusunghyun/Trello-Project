import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const VerticalContainer = styled.div`
  display: flex;
  flex-direction: vertical;
`;

const FlexContainer = styled.div`
  display: flex;
  width: 100%;
  overflow: auto;
  flex-wrap: nowrap;
`;

const TitleBar = styled.div`
  display: inline-flex;
  justify-content: space-between;
  padding: 4px 16px;
  width: 100%;
  height: 48px;
  background: rgb(149, 207, 255);
  font-size: 20px;
  line-height: 40px;
  box-sizing: border-box;
`;

const BgEEE = styled.div`
  background-color: #eee;
  border-radius: 0 0 5px 5px;
`;

const Bg_ddd = styled.div`
  background-color: #ddd;
  padding: 8px;
  border-radius: 0 0 5px 5px;
`;

const BgColor = (color) => styled.div`
  background-color: color
`;

export { Container, VerticalContainer, FlexContainer, TitleBar, BgEEE};