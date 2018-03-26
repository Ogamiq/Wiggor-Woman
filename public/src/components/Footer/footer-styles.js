import styled from 'styled-components';

export const Footer = styled.section`
  background: #f2f2f2;
  display: flex;
  width: 100%;
  font-family: RalewayRegular;

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 479px) {
    font-size: 17px;
  }
`;

export const FlexboxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 80%;
  margin: 0 auto;

  @media (max-width: 479px) {
    flex-direction: column;
    justify-content: center;
    width: 60%;
  }
`;

export const Item = styled.div`
  text-align: left;
  width: 25%;
  margin-bottom: 40px;

  @media (max-width: 479px) {
    width: 100%;
  }
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;

  @media (max-width: 479px) {
    margin-left: 20px;
  }
`;

export const ListItem = styled.li`
  padding: 2px 0;
`;

export const Title = styled.h4`
  text-transform: uppercase;
  font-size: 19px;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #babab9;
  width: 40%;
  color: #686868;
`;

export const ItemContent = styled.div`
  margin-left: 10px;
  padding: 2px 0;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export const Image = styled.img`
  width: 280px;
  height: 100px;
  padding-top: 15px;

  @media (max-width: 991px) {
    width: 250px;
    height: 80px;
  }

  @media (max-width: 768px) {
    width: 150px;
    height: 60px;
  }
`;