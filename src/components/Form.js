import styled from "styled-components";

export default function Form({ onCreateUser }) {
  return (
    <FormStyled onSubmit={handleSubmit}>
      <label htmlFor="userName">Name:</label>
      <input id="userName" name="userName" />
      <button>Submit</button>
    </FormStyled>
  );

  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const { userName } = form.elements;

    onCreateUser(userName.value);
    form.reset();
  }
}

const FormStyled = styled.form`
  display: grid;
  gap: 10px;
`;
