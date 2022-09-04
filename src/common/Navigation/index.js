import MovieIcon from "../../iconComponents/MovieIcon";
import { NavigationBackground, NavigationLink, NavigationList, NavigationLogo, NavigationSearcher } from "./styled";

// w komponencie NavigationSearcher trzeba będzie umieścić komponent wyszukiwarka

function NavigationBar() {
    return (
        <NavigationBackground>
            <NavigationList>
                <NavigationLogo>
                    <MovieIcon width={60} height={40} strokeWidth={3} opacity={1} />Movie Browser
                </NavigationLogo>
                <NavigationLink to="/movies">
                    Movies
                </NavigationLink>
                <NavigationLink to="/people">
                    People
                </NavigationLink>
                <NavigationSearcher>
                    Tu będzie wyszukiwarka
                </NavigationSearcher>
            </NavigationList>
        </NavigationBackground>

    );
}

export default NavigationBar;