import styled from "styled-components";

const transition = "1000ms all ease-in";
export const CharacterStyled = styled.li`
  list-style: none;
  width: 20%;
  display: flex;
  margin: 10px;
  height: 80vh;
  position: relative;

  .character-description {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    transition: ${transition};
    text-align: center;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 15px;
  }
  .name {
    height: 15%;
    position: absolute;
    bottom: 0;
    background-color: ${(props) => props.back};
    margin: 0;
    border-radius: 0 0 15px 15px;
    width: 90%;
    color: white;
    padding: 5%;
    font-size: 3rem;
  }
  &:hover {
    img {
      transform: rotateY(180deg);
      transition: ${transition};
      opacity: 0;
    }

    .character-description {
      border-radius: 15px;
      opacity: 1;
      padding: 1%;
      font-size: 1.5rem;
    }
  }
`;
