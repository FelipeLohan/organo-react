import { TextInput } from "../TextInput";
import { DropdownList } from "../DropdownList";
import styled from "styled-components";
import { CtaButton } from "../CtaButton";
import { useState } from "react";
import PropTypes from "prop-types";

const FormContainer = styled.section`
  background-color: #f6f6f6;
  width: 80%;
  margin: 0 auto;
  padding: 40px;
  border-radius: 8px;
  margin-top: 40px;

  h2 {
    font-size: 3vmin;
    margin-bottom: 40px;
  }
`;

export const Form = (props) => {
  const items = [
    "Programação",
    "Front-End",
    "Data Science",
    "DevOps",
    "UX e Design",
    "Mobile",
    "Inovação e Gestão",
  ];

  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("")

  const handleOnSubmit = (event) => {
    event.preventDefault();
    props.handleNewMember({
      nome,
      cargo,
      imagem,
      time
    })
  };

  return (
    <>
      <FormContainer>
        <form onSubmit={handleOnSubmit}>
          <h2>Preencha os dados para criar o card do colaborador</h2>
          <TextInput
            valueRequired={true}
            label="Nome"
            placeholder="Digite seu nome"
            value={nome}
            handleState={(e) => setNome(e)}
          />
          <TextInput
            valueRequired={true}
            label="Cargo"
            placeholder="Digite seu cargo"
            value={cargo}
            handleState={(e) => setCargo(e)}
          />
          <TextInput
            label="Imagem"
            placeholder="Informe o endereço da imagem"
            value={imagem}
            handleState={(e) => setImagem(e)}
          />
          <DropdownList value={time} handleState={e => setTime(e)} valueRequired={true} label="Time" item={items} />
          <CtaButton>Criar Card</CtaButton>
        </form>
      </FormContainer>
    </>
  );
};

Form.propTypes = {
  handleNewMember: PropTypes.string.isRequired,
};