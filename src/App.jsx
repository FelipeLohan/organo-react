import { useState } from "react";
import { Banner } from "./components/Banner";
import { Form } from "./components/Form";

function App() {
  const [teamMembers, setNewTeamMember] = useState([]);

  const handleNewMember = (newMember) => {
    setNewTeamMember([...teamMembers, newMember]);
    console.log(newMember);
  };

  return (
    <>
      <div>
        <Banner />
        <Form handleNewMember={handleNewMember} />
      </div>
    </>
  );
}

export default App;
