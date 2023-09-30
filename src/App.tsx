import { BrowserRouter as Router } from "react-router-dom";
import { Routing } from "./routing/Routing";
import { Layout } from "./components/shared/Layout/Layout";
import { GlobalAppStyles } from "./GlobalAppStyles";

function App() {
  return (
    <>
      <GlobalAppStyles />
      <Router>
        <Layout>
          <Routing />
        </Layout>
      </Router>
    </>
  );
}

export default App;
