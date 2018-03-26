import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 12%;
  padding: 20px 0;
  text-align: center;
  background-color: #FDFDFD;
  font-family: 'RalewayRegular', sans-serif;
`;

export const Header = styled.h1`
  color: #91414D;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 2.5px;
`;

export const Image = styled.img`
  padding: 15px 0;
`;

export const Text = styled.p`
  margin: 0 19%;
  padding: 15px 0 60px;
  color: #605E5E;
  font-size: 15px;
  letter-spacing: 1px;
  line-height: 140%;

  @media (max-width: 575px) {
    margin: 0 5%;
  }
  @media (max-width: 991px) {
    margin: 0 10%;
  }
`;

export const GreetingsIconContainer = styled.div`
  display: flex;
  flex-flow: row wrap;

  @media (max-width: 1199px) {
    flex-flow: column wrap;
  }
`;

export const GreetingsIcon = styled.div`
  color: #91414D;
  font-size: 16px;
  text-transform: uppercase;
  flex: 1;
`;

export const GreetingsText = styled.p`
  color: #91414D;
`;