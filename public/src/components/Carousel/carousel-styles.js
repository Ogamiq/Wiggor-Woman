import styled from 'styled-components';

export const SlideImage = styled.div`
  width: 100%;
  height: 500px;
  background: ${props => props.url ? `url(${props.url})` : 'url("../img/carousel_1.png")' };
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  @media (max-width: 575px) {
    height: 200px;
  }

  @media (min-width: 576px) and (max-width: 767px) {
    height: 300px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    height: 400px;
  }
`;