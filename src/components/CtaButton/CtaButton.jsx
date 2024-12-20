import PropTypes from "prop-types";
import styled from "styled-components";

const CtaButtonContainer = styled.div`
  button {
    background-color: #6278f7;
    color: #fff;
    padding: 20px 28px;
    border: none;
    border-radius: 12px;
    cursor: pointer;
  }

  button:hover {
    color: #95ffd4;
  }
`;

const CtaButton = (props) => {
  return (
    <>
      <CtaButtonContainer>
        <button>{props.children}</button>
      </CtaButtonContainer>
    </>
  );
};

CtaButton.propTypes = {
  children: PropTypes.string.isRequired,
};

export { CtaButton };
