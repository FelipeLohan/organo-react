import { useState } from "react";
import { Banner } from "./components/Banner";
import { Form } from "./components/Form";
import { Team } from "./components/Team";

function App() {
  const [teamMembers, setNewTeamMember] = useState([]);

  const handleNewMember = (newMember) => {
    setNewTeamMember([...teamMembers, newMember]);
    console.log(newMember);
  };

  const Teams = [
    {
      nome: "Programação",
      corPrimaria: "#57C278",
      corSecundaria: "#D9F7E9",
    },
    {
      nome: "Front-End",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF",
    },
    {
      nome: "Data Science",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2",
    },
    {
      nome: "DevOps",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8",
    },
    {
      nome: "UX e Design",
      corPrimaria: "#DB6EBF",
      corSecundaria: "#FAE9F5",
    },
    {
      nome: "Mobile",
      corPrimaria: "#FFBA05",
      corSecundaria: "#FFF5D9",
    },
    {
      nome: "Inovação e Gestão",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF",
    },
  ];

  return (
    <>
      <div>
        <Banner />
        <Form teamList={Teams.map(e => e.nome)} handleNewMember={handleNewMember} />
        {Teams.map(e => {
          return <Team key={e.nome} name={e.nome} corPrimaria={e.corPrimaria} corSecundaria={e.corSecundaria}/>
        })}
      </div>
    </>
  );
}

export default App;
