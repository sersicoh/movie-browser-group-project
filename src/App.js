import { HashRouter } from "react-router-dom";
import NavigationBar from "./common/Navigation";

function App() {
  return (
    <HashRouter>
      <nav>
        <NavigationBar />
      </nav>
    </HashRouter>
  );
}

export default App;
