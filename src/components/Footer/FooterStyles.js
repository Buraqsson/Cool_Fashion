import styled from 'styled-components';
import img from "./Footer-img/bild1.png"
export const Box = styled.div`
 padding: 80px 90px 80px 90px;
background-image: url(${img});
 background-position: center;
 background-size: cover;
background-repeat: no-repeat;
//width: 100%;
  bottom: 0;

  @media (max-width: 1000px) {
    padding: 80px 60px;
  }
  @media (max-width: 600px) {
    padding: 120px 90px;
  } 
`;
   
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    /* background: red; */
`
   
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;
   
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 20px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;
   
export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
   
  &:hover {
      color: green;
      transition: 200ms ease-in;
  }
`;
   
export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;
