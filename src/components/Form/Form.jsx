import { TextInput } from "../TextInput";
import styled from "styled-components";

const FormContainer = styled.section`
  background-color: #F6F6F6;
  width: 80%;
  margin: 0 auto;
  padding: 40px;
  border-radius: 8px;
  margin-top: 40px;

  h2{
    font-size: 3vmin;
    margin-bottom: 40px;
  }
`

export const Form = () => {
  return (
    <>
      <FormContainer>
        <form>
          <h2>Preencha os dados para criar o card do colaborador</h2>
          <TextInput label="Nome" placeholder="Digite seu nome" />
          <TextInput label="Cargo" placeholder="Digite seu cargo" />
          <TextInput label="Imagem" placeholder="Informe o endereço da imagem"/>
        </form>
      </FormContainer>
    </>
  );
};
