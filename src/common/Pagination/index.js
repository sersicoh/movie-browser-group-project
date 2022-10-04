import {
  PageInfo,
  PageNumber,
  PaginationTiles,
  StyledPaginationSection,
  StyledText,
  ButtonDiv,
} from "./styled";
import { SingleLeftArrow, SingleRightArrow } from "./Arrows";

function MoviePagination({  param, page }) {
  let totalPages = 500;

  return (
    <StyledPaginationSection>

      <ButtonDiv>
        <PaginationTiles disabled={page <= 1 ? true : false} to={`/movies/1`}>
          <SingleLeftArrow disabled={page <= 1 ? true : false} />
          <StyledText>First</StyledText>
        </PaginationTiles>
      </ButtonDiv>

      <ButtonDiv>
        <PaginationTiles
          disabled={page <= 1 ? true : false}
          to={`/${param}/${page - 1}`}
        >
          <SingleLeftArrow disabled={page <= 1 ? true : false} />
          <StyledText>Previous</StyledText>
        </PaginationTiles>
      </ButtonDiv>

      <PageInfo>Page</PageInfo>
      <PageNumber>{page}</PageNumber>
      <PageInfo>of</PageInfo>
      <PageNumber>{totalPages}</PageNumber>

      <ButtonDiv>
        <PaginationTiles
          disabled={page === totalPages ? true : false}
          to={`/${param}/${page + 1}`}
        >
          <StyledText>Next</StyledText>
          <SingleRightArrow disabled={page === totalPages ? true : false} />
        </PaginationTiles>
      </ButtonDiv>

      <ButtonDiv>
        <PaginationTiles
          disabled={page === totalPages ? true : false}
          to={`/${param}/${totalPages}`}
        >
          <StyledText>Last</StyledText>
          <SingleRightArrow disabled={page === totalPages ? true : false} />
        </PaginationTiles>
      </ButtonDiv>
    </StyledPaginationSection>
  );
}

export default MoviePagination;
