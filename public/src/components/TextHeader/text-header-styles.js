import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 10%;
  padding: 20px 0;
  text-align: center;
  background-color: ${props => props.backgroundColor ? props.backgroundColor : '#FDFDFD' };
  font-family: 'RalewayRegular', sans-serif;

  @media (max-width: 1199px) {
    margin: 0 10px;
  }
`;

export const Header = styled.h1`
  color: #91414D;
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
`;

export const Text = styled.p`
  margin: 0 25%;
  color: #605E5E;
  font-size: 14px;
  letter-spacing: 0.5px;
  line-height: 150%;

  @media (max-width: 1199px) {
    margin: 0 15%;
  }
`;