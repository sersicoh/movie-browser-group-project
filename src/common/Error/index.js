import {
  ErrorContainer,
  Title,
  Text,
  Button,
  StyledDangerIcon,
} from "./styled";

function ErrorPage() {
  return (
    <ErrorContainer>
      <StyledDangerIcon />
      <Title>Ooops! Something went wrong...</Title>
      <Text>
        Please check your network connection
        <br /> and try again
      </Text>
      <Button to="/movies">Back to home page</Button>
    </ErrorContainer>
  );
}

export default ErrorPage;
