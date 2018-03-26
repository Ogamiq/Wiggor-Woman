import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 10%;
  padding: 70px 0 40px;
  text-align: center;
  background-color: #FDFDFD;
  font-family: 'LibreBaskervilleItalic', sans-serif;
`;

export const Header = styled.h1`
  color: #91414D;
  font-size: 28px;
  font-weight: 400;
  letter-spacing: 2.5px;
`;

export const Text = styled.p`
  color: #605E5E;
  font-size: 16px;
  letter-spacing: 1px;
`;

export const PersonContainer = styled.div`
  margin: 5% 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;

  @media (max-width: 1185px) {
    margin: 0;
    flex-flow: column wrap;
    align-items: center;
  }
`;

export const PersonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 20px 0;

  @media (max-width: 600px) {
    flex-flow: column wrap;
  }
`;

export const Person = styled.div`
  min-width: 310px;
  display: inline-block;
  padding: 0 0 0 25px;
  text-align: left;

  @media (max-width: 600px) {
    display: block;
    min-width: 0;
    text-align: center;
    padding: 10px 0 0;
  }
`;

export const PersonImage = styled.img`
  width: 130px;
  height: 130px;
  display: inline-block;
  border-radius: 50%;

  @media (max-width: 600px) {
    display: block;
  }
`;

export const PersonName = styled.h3`
  color: #91414D;
  margin: 5px 0;
  letter-spacing: 1px;
  font-size: 18px;
  font-weight: 400;
  font-family: 'LibreBaskervilleItalic', sans-serif;
`;

export const PersonText = styled.h3`
  color: #605E5E;
  letter-spacing: 1px;
  font-size: 14px;
  font-weight: 400;
  font-family: 'RalewayRegular', sans-serif;
`;