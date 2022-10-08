import MovieIcon from "../../iconComponents/MovieIcon";
import { Searcher } from "../Searcher"
import { NavigationBackground, NavigationLink, NavigationList, NavigationLogo, NavigationLogoLink, NavigationSearcher } from "./styled";
import { StyledMovieIcon } from "../TileMovie/styled";
// w komponencie NavigationSearcher trzeba będzie umieścić komponent wyszukiwarka

function NavigationBar() {
    return (
        <NavigationBackground>
            <NavigationList>
                <NavigationLogoLink to="/movies">
                    <NavigationLogo>
                        <StyledMovieIcon>
                            <MovieIcon strokeWidth={3} opacity={1} />
                        </StyledMovieIcon>
                        Movie Browser
                    </NavigationLogo>
                </NavigationLogoLink>
                <NavigationLink to="/movies">
                    Movies
                </NavigationLink>
                <NavigationLink to="/people">
                    People
                </NavigationLink>
                <NavigationSearcher>
                    <Searcher />
                </NavigationSearcher>
            </NavigationList>
        </NavigationBackground>

    );
}

export default NavigationBar;