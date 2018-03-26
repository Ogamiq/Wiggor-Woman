import styled from 'styled-components';

export const EventsIcon = styled.div`
  padding: 70px 0;
  color: #91414D;
  background-color: ${props => props.backgroundColor ? props.backgroundColor : '#FCFCFC' };
  flex: 1;
`;

export const EventsIconHeader = styled.h1`
  margin: 0 0 5px 0;
  font-size: 26px;
  letter-spacing: 1px;
  font-weight: 400;
  font-family: 'LibreBaskervilleItalic', sans-serif;

  @media (max-width: 400px) {
    font-size: 20px;
  }
`;

export const EventsIconText = styled.p`
  margin: 0;
  font-size: 17px;
  text-transform: uppercase;
  font-family: 'RalewayRegular', sans-serif;

  @media (max-width: 400px) {
    font-size: 14px;
  }
`;

export const Image = styled.img`
  padding: 15px 0;
`;