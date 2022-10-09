
import { Searcher } from "../Searcher"
import { NavigationBackground, NavigationLink, NavigationList, NavigationLogo, NavigationLogoLink, NavigationSearcher, StyledMovieIcon  } from "./styled";


function NavigationBar() {
    return (
        <NavigationBackground>
            <NavigationList>
                <NavigationLogoLink to="/movies">
                    <NavigationLogo>
                        
                            <StyledMovieIcon strokeWidth={3} opacity={1} />
                       
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