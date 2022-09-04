import { ContentTitle, SectionArea } from "./styled";

const Content = ({ title, body, extraContent }) => (

    <SectionArea>
        {extraContent}
        <ContentTitle>{title}</ContentTitle>
        {body}
    </SectionArea>
);

export default Content;