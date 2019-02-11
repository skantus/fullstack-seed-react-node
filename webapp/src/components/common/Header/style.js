import styled from 'styled-components';

export const Wrapper = styled.div`
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    display: inline-block;
    margin-left: 20px;
    a {
      text-decoration: none;
      font-size: 20px;
      color: #333;
      text-transform: capitalize;
    }
  }
`;

export const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => (props.primary ? 'tomato' : 'white')};
  color: ${props => (props.primary ? 'white' : 'tomato')};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid tomato;
  border-radius: 3px;
`;
