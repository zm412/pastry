import '../../styles/CenterAisle.css'
import { useDashboardStore } from '../../contexts/DashboardContext';
import DndTree from "./Projects/DndTree";

const Project = () => {
    const projects = {}
    const { dashboard } = useDashboardStore();
    console.log(dashboard, 'DDDDDDDDDDDDDDDDDDDDdd')
    
    return (
        <main className="main-grid-item center-aisle">
            <h1>JJJJJJJJJjjj</h1>
            <DndTree />
        </main>
    );
};

export default Project;
