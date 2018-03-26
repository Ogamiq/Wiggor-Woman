import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 14%;
  padding: 70px 0 40px;
  text-align: center;
  @media (max-width: 1199px) {
    margin: 0 10px;
  }
`;

export const GalleryContainer = styled.div`
  padding: 20px;
  display: block;
  min-height: 1px;
  overflow: auto;
  background-color: #F3F3F3;
`;

export const Header = styled.h1`
  color: #91414D;
  display: block;
  margin: 20px;
  font-size: 26px;
  letter-spacing: 1px;
  font-weight: 400;
  font-family: 'LibreBaskervilleItalic', sans-serif;
`;
