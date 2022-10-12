import {
  PageInfo,
  PageNumber,
  PaginationTiles,
  StyledPaginationSection,
  StyledText,
  ButtonDiv,
} from "./styled";
import {
  DoubleLeftArrow,
  DoubleRightArrow,
  SingleLeftArrow,
  SingleRightArrow,
} from "./Arrows";

function Pagination({ param, page, searchQuery, totalPages }) {
  if (totalPages > 500) {
    totalPages = 500;
  }
  if (searchQuery == undefined) {
    searchQuery = "";
  }

  return (
    <StyledPaginationSection>
      <ButtonDiv>
        <PaginationTiles
          disabled={page <= 1 ? true : false}
          to={`/${param}/${searchQuery}1`}
        >
          <DoubleLeftArrow disabled={page <= 1 ? true : false} />
          <StyledText>First</StyledText>
        </PaginationTiles>
      </ButtonDiv>

      <ButtonDiv>
        <PaginationTiles
          disabled={page <= 1 ? true : false}
          to={`/${param}/${searchQuery}${page - 1}`}
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
          to={`/${param}/${searchQuery}${page + 1}`}
        >
          <StyledText>Next</StyledText>
          <SingleRightArrow disabled={page === totalPages ? true : false} />
        </PaginationTiles>
      </ButtonDiv>

      <ButtonDiv>
        <PaginationTiles
          disabled={page === totalPages ? true : false}
          to={`/${param}/${searchQuery}${totalPages}`}
        >
          <StyledText>Last</StyledText>
          <DoubleRightArrow disabled={page === totalPages ? true : false} />
        </PaginationTiles>
      </ButtonDiv>
    </StyledPaginationSection>
  );
}

export default Pagination;
