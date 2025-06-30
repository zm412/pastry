import '../../styles/LeftAisle.css'
import { useDashboardStore } from '../../contexts/DashboardContext';

const project_list_data = [
    {
        name: "Project1",
        id: 'proj1',
    },
    {
        name: "Project2",
        id: 'proj2',
    },
    {
        name: "Project3",
        id: 'proj3',
    },
    {
        name: "Project4",
        id: 'proj4',
    },
    {
        name: "Project5",
        id: 'proj5',
    },
] 

const ProjectList = () => {
    const { dashboard, changeDashboard } = useDashboardStore();
    const projectList = project_list_data.map(project => 
        <li
            className="project-card"
            data-id={project.id}
            onClick={(e) => changeDashboard(e.currentTarget.dataset.id)}
        >
            <div className="project-info">
                <div className="project-name">{project.name}</div>
            </div>
        </li>
    )

    return (
        <div className="main-grid-item left-aisle">
            <h1>Projects</h1>
            <ul className="project-list">
                {projectList}
            </ul>
        </div>
    );
};

export default ProjectList;
