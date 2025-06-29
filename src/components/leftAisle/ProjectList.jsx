import '../../styles/LeftAisle.css'

const project_list_data = [
    {
        name: "Project1",
    },
    {
        name: "Project2",
    },
    {
        name: "Project3",
    },
    {
        name: "Project4",
    },
    {
        name: "Project5",
    },
] 

const ProjectList = () => {
    const projectList = project_list_data.map(project => 
        <li className="project-card" onClick={(e) => console.log(e)}>
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
