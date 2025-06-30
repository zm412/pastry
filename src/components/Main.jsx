import ProjectList from "./leftAisle/ProjectList";
import Project from "./centerAisle/Project";
import PersonalInfo from "./rightAisle/PersonalInfo";
import '../styles/Main.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Main = () => {
    return (
        <div className="custom-container main-block">
            <ProjectList />
            <Project />
            <PersonalInfo />
        </div>
    );
};

export default Main;
