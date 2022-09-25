import ArrowLeft from "../../../iconComponents/ArrowLeft";
import ArrowRight from "../../../iconComponents/ArrowRight";
import { theme } from "../../../theme";

export const SingleLeftArrow = ({ disabled }) => {

    if(disabled === true) {
        return <ArrowLeft fill={theme.colors.darkerGrey} />
    }
    return (
        <ArrowLeft fill={theme.colors.scienceBlue} />
    );
};

export const SingleRightArrow = ({ disabled }) => {

    if(disabled === true) {
        return <ArrowRight fill={theme.colors.darkerGrey} />
    }
    return (
        <ArrowRight fill={theme.colors.scienceBlue} />
    );
};
