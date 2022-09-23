import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  form {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 3.5rem;

    button[type="submit"] {
      width: 100%;
      border: 0;
      padding: 1rem;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      font-weight: bold;
      cursor: pointer;

      background: ${(props) => props.theme["green-500"]};
      color: ${(props) => props.theme["gray-100"]};

      &:disabled {
        opacity: 0.7;
      }

      &:not(:disabled):hover {
        background: ${(props) => props.theme["green-700"]};
      }
    }

    button[type="reset"] {
      width: 100%;
      border: 0;
      padding: 1rem;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      font-weight: bold;
      cursor: pointer;

      background: ${(props) => props.theme["red-500"]};
      color: ${(props) => props.theme["gray-100"]};

      &:disabled {
        opacity: 0.7;
      }

      &:not(:disabled):hover {
        background: ${(props) => props.theme["red-700"]};
      }
    }
  }
`;


