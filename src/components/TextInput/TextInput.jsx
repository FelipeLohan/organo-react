import styled from "styled-components";
import PropTypes from 'prop-types';


const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;

  & label {
    font-size: 2.5vmin;
    margin-bottom: 5px;
  }

  & input {
    font-size: 2vmin;
    padding: 10px;
    border: 0.3px solid #c2c2c2;
    border-radius: 6px;
  }
`

export const TextInput = (props) => {
  return (
    <>
      <InputContainer>
        <label>{props.label}</label>
        <input required={props.valueRequired} placeholder={props.placeholder} />
      </InputContainer>
    </>
  );
};

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  valueRequired: PropTypes.string.isRequired,
};
