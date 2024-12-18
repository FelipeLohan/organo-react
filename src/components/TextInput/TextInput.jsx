import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;

  & label {
    font-size: 3vmin;
  }

  & input {
    font-size: 2.5vmin;
    padding: 5px;
    border: 0.3px solid #c2c2c2;
    border-radius: 6px;
  }
`

export const TextInput = () => {
  return (
    <>
      <InputContainer>
        <label>Nome</label>
        <input placeholder="Digite seu nome" />
      </InputContainer>
    </>
  );
};
