import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 10% 2px;
  text-align: center;
  display: flex;
  flex-flow: row wrap;

  @media (max-width: 1199px) {
    margin: 0 10px;
    flex-flow: column wrap;
  }
`;

export const TileContainer = styled.div`
  padding: 20px;
  font-family: 'RalewayRegular', sans-serif;
  background-color: ${props => props.backgroundColor ? props.backgroundColor : '#F6F6F6' };
  flex: 1;
`;

export const Header = styled.h1`
  color: #91414D;
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
`;

export const Text = styled.p`
  margin: 0 20%;
  padding: 10px 0;
  color: #605E5E;
  font-size: 14px;
  line-height: 130%;

  @media (max-width: 767px) {
    margin: 0 10%;
  }
  @media (max-width: 1700px) {
    margin: 0 5%;
  }
`;