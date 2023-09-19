import styled from "styled-components";
import Header from "./components/Header";
import SearchComponent from "./components/SearchComponent";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002f52 35%, #326589);
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <SearchComponent />
    </AppContainer>
  );
}

export default App;
