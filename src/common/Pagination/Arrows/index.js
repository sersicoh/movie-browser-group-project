import ArrowLeft from "../../../iconComponents/ArrowLeft";
import ArrowRight from "../../../iconComponents/ArrowRight";
import { theme } from "../../../theme";
import { ArrowSection } from "./styled";

export const SingleLeftArrow = ({ disabled }) => {

    if (disabled === true) {
        return <ArrowLeft fill={theme.colors.darkerGrey} />
    }
    return (
        <ArrowLeft fill={theme.colors.scienceBlue} />
    );
};

export const DoubleLeftArrow = ({ disabled }) => {

    if (disabled === true) {
        return (
            <ArrowSection>
                <ArrowLeft fill={theme.colors.darkerGrey} />
                <ArrowLeft fill={theme.colors.darkerGrey} />
            </ArrowSection>
        )
    }
    return (
        <ArrowSection>
            <ArrowLeft fill={theme.colors.scienceBlue} />
            <ArrowLeft fill={theme.colors.scienceBlue} />
        </ArrowSection>
    );
};


export const SingleRightArrow = ({ disabled }) => {

    if (disabled === true) {
        return <ArrowRight fill={theme.colors.darkerGrey} />
    }
    return (
        <ArrowRight fill={theme.colors.scienceBlue} />
    );
};

export const DoubleRightArrow = ({ disabled }) => {

    if (disabled === true) {
        return (
            <ArrowSection>
                <ArrowRight fill={theme.colors.darkerGrey} />
                <ArrowRight fill={theme.colors.darkerGrey} />
            </ArrowSection>
        )
    }
    return (
        <ArrowSection>
            <ArrowRight fill={theme.colors.scienceBlue} />
            <ArrowRight fill={theme.colors.scienceBlue} />
        </ArrowSection>
    );
};
