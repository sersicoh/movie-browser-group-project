import styled from "styled-components";

export const Wrapper = styled.section`
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  border-radius: 5px;
  margin: auto 16px;
  padding: 40px;
  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    padding: 14px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 12px;
  }
`;
export const StyledTilePerson = styled.section`
  display: grid;
  grid-template-columns: 1fr 3fr;
  column-gap: 40px;
  row-gap: 24px;
  grid-template-areas:
    "poster rest"
    "poster description";

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    grid-template-columns: 1fr 2fr;
    column-gap: 24px;
    padding: 10px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.between}px) {
    row-gap: 20px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 16px;
    grid-template-areas:
      "poster rest"
      "description description";
  }
`;
export const Poster = styled.img`
  grid-area: poster;
  width: 100%;
  border-radius: 5px;
  aspect-ratio: 2/3;
`;
export const NoPoster = styled.div`
  grid-area: poster;
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.colors.silver};
  max-width: 100%;
  max-height: 100%;
  aspect-ratio: 2/3;
  border-radius: 5px;
`;
export const StyledPersonIcon = styled.div`
  width: 100px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    width: 70px;
  }
`;
export const InfoSection = styled.div`
  grid-area: rest;
  margin-top: 10px;
  display: inline-flex;
  flex-wrap: wrap;
  gap: 22px;
  flex-direction: column;
  @media (max-width: ${({ theme }) => theme.breakpoint.between}px) {
    gap: 10px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    gap: 3px;
    margin-top: 0px;
  }
`;
export const PersonName = styled.div`
  font-weight: ${({ theme }) => theme.fontSize.bold};
  line-height: 130%;
  font-size: 36px;

  @media (max-width: ${({ theme }) => theme.breakpoint.between}px) {
    font-size: 18px;
  }
`;
export const BirthYear = styled.div`
  line-height: 150%;
  font-weight: ${({ theme }) => theme.fontSize.regular};
  font-size: 22px;

  @media (max-width: ${({ theme }) => theme.breakpoint.between}px) {
    font-size: 13px;
  }
`;
export const BirthPlaceSection = styled.div`
  display: flex;
  font-size: 18px;
  margin-top: -12px;
  font-weight: ${({ theme }) => theme.fontSize.regular};
  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    font-size: 16px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.between}px) {
    font-size: 13px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 2px;
  }
`;
export const BirthdayDateSection = styled.div`
  display: flex;
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fontSize.regular};
  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    font-size: 16px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.between}px) {
    font-size: 13px;
    margin-top: -8px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 2px;
  }
`;
export const GreyText = styled.p`
  color: ${({ theme }) => theme.colors.darkerGrey};
  margin-right: 8px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: none;
  }
`;
export const Description = styled.div`
  grid-area: description;
  display: flex;
  font-size: 20px;
  line-height: 32px;
  font-weight: ${({ theme }) => theme.fontSize.regular};
  color: ${({ theme }) => theme.colors.black};
  text-align: justify;
  /* text-justify: inter-word; */
  /* margin-top: -140px; */
  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    font-weight: ${({ theme }) => theme.fontSize.regular};
    font-size: 18px;
    line-height: 160%;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.between}px) {
    font-size: 16px;
    line-height: 160%;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 14px;
    line-height: 160%;
  }
  @media (max-width: 1300px) {
    margin-top: -10px;
  }
`;
export const P = styled.div`
  align-self: flex-start;
`;

