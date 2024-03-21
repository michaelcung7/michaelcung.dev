import { About } from "./Components/About";
import { Contact } from "./Components/Contact";
import { Home } from "./Components/Home";
import NavBar from "./Components/NavBar";
import { Project } from "./Components/Project";
import { Skills } from "./Components/Skills";
import { SocialLinks } from "./Components/SocialLink";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Skills />
      <Project />
      <About />
      <Contact />

      <SocialLinks />
    </div>
  );
}

export default App;
