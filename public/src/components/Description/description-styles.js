import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 10%;
  padding: 20px 0;
  background-color: #FCFCFC;
  font-family: 'RalewayRegular', sans-serif;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  direction: ${props => props.direction ? props.direction : 'ltr' };

  @media (max-width: 1199px) {
    margin: 0 10px;
    direction: ltr;
    flex-flow: column wrap;
  }
`;

export const ImageContainer = styled.div`
  width: 28vw;
  margin: 15px auto;
  text-align: center;

  @media (max-width: 1199px) {
    width: 80vw;
  }
`;

export const BigImage = styled.img`
  display: block;
  height: auto;
  max-width: 100%;

  @media (max-width: 1199px) {
    display: none;
  }
`;

export const SmallImage = styled.img`
  display: none;
  height: auto;
  max-width: 100%;

  @media (max-width: 1199px) {
    display: inline-block;
  }
`;

export const TextContainer = styled.div`
  margin: 0 12%;
  flex: 1;
  text-align: right;
  text-align: ${props => props.textAlign ? props.textAlign : 'left' };
  @media (max-width: 1199px) {
    text-align: left;
  }
`;

export const SubHeader = styled.h3`
  color: #605E5E;
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 2.5px;
  text-transform: uppercase;
`;

export const Header = styled.h1`
  color: #91414D;
  margin: 0 0 20px;
  font-weight: 400;
  font-family: 'LibreBaskervilleItalic', serif;
`;

export const Text = styled.p`
  color: #605E5E;
  font-size: 14px;
  line-height: 130%;
  letter-spacing: 0.5px;
`;

export const Parallax = styled.div`
  min-height: 40vh;
  background-image: url('/img/parallax.jpg');
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;


///
export const EventsIconContainer = styled.div`
  margin: 0 15%;
  display: flex;
  text-align: center;
  flex-flow: row wrap;
  background-color: red;
  @media (max-width: 1199px) {
    flex-flow: column wrap;
  }
`;