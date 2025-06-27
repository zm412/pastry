import ProjectList from "./leftAisle/ProjectList";
import Project from "./centerAisle/Project";
import PersonalInfo from "./rightAisle/PersonalInfo";
import '../styles/Main.css'

const Main = () => {
  return (
        <div className="container main-block">
            <ProjectList />
            <Project />
            <PersonalInfo />
        </div>
  );
};

export default Main;
