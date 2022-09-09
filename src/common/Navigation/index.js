import MovieIcon from "../../iconComponents/MovieIcon";
import { NavigationBackground, NavigationLink, NavigationList, NavigationLogo, NavigationSearcher, Icon } from "./styled";

// w komponencie NavigationSearcher trzeba będzie umieścić komponent wyszukiwarka

function NavigationBar() {
    return (
        <NavigationBackground>
            <NavigationList>
                <NavigationLogo>
                <Icon><MovieIcon width={20} height={40} strokeWidth={3} opacity={1} /></Icon>
                {/* MovieIcon width={60} przy normalnych wymiarach strony */}
                    Movie Browser
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