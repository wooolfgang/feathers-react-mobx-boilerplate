import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  text-align: center;
`

class App extends React.Component {
  render() {
    return (
      <StyledDiv>
        <h1> All systems go. Happy Hacking! </h1>
      </StyledDiv>
    )
  }
}

export default App;