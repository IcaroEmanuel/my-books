import styled from "styled-components";

export const IconsContainer = styled.ul`
  display: flex;
`;

export const IconContainer = styled.li`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;
`;

export const ImageContainer = styled.img`
  margin-right: 30px;
`;

export const StyledContainers = {
  IconsContainer,
  IconContainer,
  ImageContainer,
}
