import styled from "styled-components";
import PropTypes from "prop-types";



const Team = (props) => {
  
  const TeamContainer = styled.section`
  display: flex;
  justify-content: center;
  padding: 32px;
  background-color: ${props.corSecundaria};

  & h3{
    font-size: 4vmin;
    border-bottom: 4px solid ${props.corPrimaria};
    padding-bottom: 16px;
  }
`;

  return (
    <>
      <TeamContainer>
        <h3>{props.name}</h3>
      </TeamContainer>
    </>
  );
};

Team.propTypes = {
  name: PropTypes.string.isRequired,
  corPrimaria: PropTypes.string.isRequired,
  corSecundaria: PropTypes.string.isRequired,
};

export { Team };
