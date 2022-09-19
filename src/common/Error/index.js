import { ErrorContainer, DangerIcon, Title, Text, Button } from "./styled";

function ErrorPage () {
    return (
        <ErrorContainer>
            <DangerIcon />
            <Title>Ooops! Something went wrong...</Title>
            <Text>Please check your network connection<br /> and try again</Text>
            <Button big to="/movies">Back to home page</Button>
        </ErrorContainer>
    )
};

export default ErrorPage;