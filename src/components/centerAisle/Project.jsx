import '../../styles/CenterAisle.css'
import { useDashboardStore } from '../../contexts/DashboardContext';
import DndTree from "./Projects/DndTree";
import Chart from "./Projects/Chart";

const Project = () => {
    const projects = {
        "proj1": <DndTree />,
        "proj2": <Chart />
    }
    const { dashboard } = useDashboardStore();
    const currentProject = projects[dashboard]
    console.log(dashboard, 'DDDDDDDDDDDDDDDDDDDDdd')
    
    return (
        <main className="main-grid-item center-aisle">
            <h1>JJJJJJJJJjjj</h1>
            {currentProject}
        </main>
    );
};

export default Project;
