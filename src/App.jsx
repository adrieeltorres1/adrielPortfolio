import Experiencias from "./components/Experiencias";
import Header from "./components/header";
import Projetos from "./components/Projetos";
import Stack from "./components/Stack";
import './style.css';

const App = () => {
  return (
    <>
      <Header/>
      <Stack />
      <Experiencias/>
      <Projetos />
    </>
  );
}

export default App;