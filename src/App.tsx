import * as C from './App.styles';
import { Header } from './App.styles';
import { PersonalItems } from './components/PersonalItems';
import { ProjectsItems } from './components/ProjectsItems';
import { ClassItems } from './components/ClassItems';
import { Footer } from './components/Footer';

const App = () => {
  return (
    <C.Container>

      <C.Header>
        <Header />
      </C.Header>

      <C.Personal>
        <PersonalItems />
      </C.Personal>

      <C.PersonalProjects>
        <ProjectsItems />
      </C.PersonalProjects>

      <C.ClassProjects>
        <ClassItems />
      </C.ClassProjects>

      <C.Footer>
        <Footer />
      </C.Footer>
    </C.Container>
  );
}

export default App;