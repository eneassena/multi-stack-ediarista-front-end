import { SafeEnvironmentContainer } from "./SafeEnvironment.style";
import { Container } from '@material-ui/core';


const SafeEnvironment = (props) => {
  return (
    <SafeEnvironmentContainer>
      <Container>
        Ambiente 100% Seguro <i className={'twf-lock'}></i>
      </Container>
    </SafeEnvironmentContainer>
  );
}


export default SafeEnvironment;