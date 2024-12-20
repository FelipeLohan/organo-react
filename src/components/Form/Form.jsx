import { TextInput } from "../TextInput";
import { DropdownList } from "../DropdownList";
import styled from "styled-components";
import { CtaButton } from "../CtaButton";

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

  const items = [
    "Programação",
    "Front-End",
    "Data Science",
    "DevOps",
    "UX e Design",
    "Mobile",
    "Inovação e Gestão"
  ]

  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log("Realizado o envio do formulário.")

  }

  return (
    <>
      <FormContainer>
        <form onSubmit={handleOnSubmit}>
          <h2>Preencha os dados para criar o card do colaborador</h2>
          <TextInput valueRequired={true} label="Nome" placeholder="Digite seu nome" />
          <TextInput valueRequired={true} label="Cargo" placeholder="Digite seu cargo" />
          <TextInput label="Imagem" placeholder="Informe o endereço da imagem"/>
          <DropdownList valueRequired={true} label="Time" item={items} />
          <CtaButton >
            Criar Card
          </CtaButton>
        </form>
      </FormContainer>
    </>
  );
};
