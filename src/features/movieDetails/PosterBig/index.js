import MovieIcon from '../../../iconComponents/MovieIcon';
import StarIcon from '../../../iconComponents/StarIcon';
import {
    StyledMovieIcon,
    MovieTitle,
    MovieYear,
    NoPoster,
    Poster,
    StyledTileMovie,
    BackgroundColor,
    Tag,
    Tags,
    StyledStarIcon,
    RatingSection,
    Rate,
    Votes,
    RateScale,
    BackgroundImage,
    InfoSection,
    Wrapper
} from "./styled";
import { useSelector } from "react-redux";
import { getMovieById } from "../../getMovieData/MovieList/movieSlice";
import { useParams } from "react-router-dom";


const PosterBig = () => {

    // const picture = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
    // const { genreList } = useSelector(selectGenres);
    const params = useParams();
    const movie = useSelector((state) => getMovieById(state, params.id));

    return (
        <BackgroundColor>
            <BackgroundImage>
            <Wrapper>
                <InfoSection> 
                <MovieTitle>Full movie title</MovieTitle>
                <RatingSection>
                    <StyledStarIcon>
                        <StarIcon width={"100%"} height={"100%"} />
                    </StyledStarIcon>
                    <Rate>7.8</Rate>
                    <RateScale> / 10</RateScale>
                </RatingSection>
            <Votes>1723 votes</Votes> 
            </InfoSection>
            </Wrapper>
            </BackgroundImage>
        </BackgroundColor>
    );

};

export default PosterBig;


// {movie.title}
// {movie.vote_average}
// {movie.vote_count}