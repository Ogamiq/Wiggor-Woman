import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px;
  background-color: white;
  font-family: 'RalewayBold', sans-serif;
  display: flex;
  justify-content: flex-end;

  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;

  -webkit-box-shadow: 0px 1px 1px #D28479;
  -moz-box-shadow: 0px 1px 1px #D28479;
  box-shadow: 0px 1px 1px #D28479;
`;

export const Image = styled.img`
  padding-left: 30px;
`;

export const MenuContainer = styled.div`
  padding: 10px 0;
  background-color: white;

  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;

  -webkit-box-shadow: 0px 1px 1px #D28479;
  -moz-box-shadow: 0px 1px 1px #D28479;
  box-shadow: 0px 1px 1px #D28479;
`;

export const MenuItem = styled.div`
  color: #605E5E;
  padding: ${props => props.lastElement ? '10px 30px 10px 10px' : '10px' };
  font-size: ${props => props.hamburger ? '16px' : '14px' };
  font-family: ${props => props.hamburger ? 'RalewayBold' : 'RalewayRegular' };
  transition: ${props => props.hamburger ? 'all 1s' : 'all .4s' };

  &:hover {
    color: #91414D;
  }

  &:active {
    color: #91414D;
  }
`;