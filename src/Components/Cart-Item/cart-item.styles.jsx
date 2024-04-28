import styled from "styled-components"

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
  border-top: 2px solid white;
  border-bottom: 2px solid white;
  img {
    width: 30%;
  }
  transition: transform 0.3s ease; 

  &:hover {
    opacity: 0.8;
    box-shadow: -10px 10px 10px rgba(0, 0, 0, 0.6);
    transform: scale(1.08); 
  }
`
export const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
`

export const Name = styled.span`
  font-size: 16px;
`
