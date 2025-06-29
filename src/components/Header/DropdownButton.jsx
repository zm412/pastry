import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useTheme } from '../../ThemeContext';

function DropdownButtonOutline() {
    const { theme, changeTheme } = useTheme();

    const handleClick = (eventKey, event) => {
        console.log(eventKey, 'Клик по пункту меню');
        console.log(event, 'TTTTTTTTTTTT');
        event.preventDefault();
        event.persist();
        event.stopPropagation();
        changeTheme(eventKey)
    };

    return (
        <DropdownButton onSelect={handleClick} id="dropdown-basic-button" variant="outline-warning" title="Dropdown button">
            <Dropdown.Item eventKey="acid-1-theme">Action</Dropdown.Item>
            <Dropdown.Item eventKey="acid-2-theme">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="green-onion-theme">Something else</Dropdown.Item>
        </DropdownButton>
    );
}

export default DropdownButtonOutline;
