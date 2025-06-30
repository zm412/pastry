import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButtonOutline from "./Header/DropdownButton";
import { useTheme } from '../contexts/ThemeContext';
import { useDashboardStore } from '../contexts/DashboardContext';
import "../styles/Header.css";

const Header = () => {
  const { theme } = useTheme();
  const { dashboard } = useDashboardStore();

    console.log(theme, 'THEME')
    console.log(dashboard, 'DASHBOARD')
  return (
    <header className="custom-container">
        <div className="header-inner">
            <img className="logo-img" src="./img/TestLogo.svg" alt="" />
            <div className="custom-nav">

                <div className="nav-item">
                    <img className="nav-icon" src="./img/home.svg" alt=""/>
                    <span className="nav-menu-label">Overview</span>
                </div>

                <div className="nav-item">
                    <button className="nav-button">
                        <img className="nav-icon" src="./img/group.svg" alt=""/>
                        <span className="nav-menu-label">Patients</span>
                    </button>
                </div>

                <div className="nav-item">
                    <img className="nav-icon" src="./img/calendar.svg" alt=""/>
                    <span className="nav-menu-label">Schedule</span>
                </div>

                <div className="nav-item">
                    <img className="nav-icon" src="./img/chat.svg" alt=""/>
                    <span className="nav-menu-label">Message</span>
                </div>

                <div className="nav-item">
                    <DropdownButtonOutline />
                </div>
          </div>

          <div className="profile-data">
            <div>
                <div className="profile-data">
                    <img className="profile-img" src="./img/doctor.jpg" alt=""/>
                <div className="profile-info">
                    <div className="profile-owner">Dr. Jose Simmons</div>
                    <div>General Practitioner</div>
                </div>
                <div className="line"></div>
                    <img className="settings-icon" src="./img/settings.jpg" alt=""/>
                    <img className="settings-icon" src="./img/more_vert.jpg" alt=""/>
                </div>
            </div>
          </div>
        </div>
    </header>
  );
};

export default Header;
