import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import PageOne from "./components/PageOne/PageOne";
import PageTwo from "./components/PageTwo/PageTwo";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<PageOne />} />
        <Route path="/page-two" element={<PageTwo />} />
      </Routes>
    </Layout>
  );
}

export default App;
