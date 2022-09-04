import MovieIcon from '../../iconComponents/MovieIcon'
import StarIcon from '../../iconComponents/StarIcon'
import { Destription, StyledMovieIcon, MovieTitle, MovieYear, NoPoster, Poster, StyledTileMovie, MovieSection, Tag, Tags, StyledStarIcon, RatingSection, Rate, Votes } from "./styled";

const TileMovie = () => {

    const picture = false;

    const data = {
        picture: false,
        title: "Mulan",
        year: 2020,
        tags: ["Action", "Adventure", "Drama", "Comedy"],
        rate: 7.8,
        votes: 30
    }

    return (
        <StyledTileMovie>
            <MovieSection>
                {picture ?
                    <Poster
                    /> :
                    <NoPoster>
                        <StyledMovieIcon>
                            <MovieIcon width={"100%"} height={"100%"} />
                        </StyledMovieIcon>
                    </NoPoster>}
                <Destription>
                    <MovieTitle>{data.title}</MovieTitle>
                    <MovieYear>{data.year}</MovieYear>
                    <Tags>
                        <Tag>{data.tags[0]}</Tag>
                        <Tag>{data.tags[1]}</Tag>
                        <Tag>{data.tags[2]}</Tag>
                    </Tags>
                    <RatingSection>
                        <StyledStarIcon>
                            <StarIcon width={"100%"} height={"100%"} />
                        </StyledStarIcon>
                        <Rate>{data.rate}</Rate>
                        <Votes>{data.votes} votes</Votes>
                    </RatingSection>
                </Destription>
            </MovieSection>
        </StyledTileMovie>
    );

};

export default TileMovie;
