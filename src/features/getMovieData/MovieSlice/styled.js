import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  justify-content: center;
  text-align: left;
  list-style-type: none;
  word-break: break-word;
  width: 500px;
`;

export const Movie = styled.span`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 2px solid rgb(158, 157, 157);
  width: 500px;
`;

export const Content = styled.span`
  text-align: justify;
  flex-grow: 1;
  margin: 5px;
`;

export const Img = styled.img`
  width: 292px;
  height: 434px;
`;
