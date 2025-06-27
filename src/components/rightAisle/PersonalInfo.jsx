import '../../styles/RightAisle.css'

const PersonalInfo = () => {
    const data = [
        {
            icon: 'BirthIcon.svg',
            label: 'Date Of Birth',
            data: '02.26.1983',
        }, {
            icon: '/FemaleIcon.svg',
            label: 'Gender',
            data: 'female',
        }, {
            icon: '/PhoneIcon.svg',
            label: 'Contact Info.',
            data: '0908080800980809808',
        }, {
            icon: '/PhoneIcon.svg',
            label: 'Emergency Contacts',
            data: '0909809808',
        }, 
    ];

    const list_elements = data.map(item => 
        <li className="person-data">
            <img src={item.icon} alt="" />
            <div className="person-info">
            <div className="person-item-label">{item.label}</div>
            <div className="person-item-value">{item.data}</div>
            </div>
        </li>
    )



    return (
        <main className="main-grid-item right-aisle person">
            <h1>OOOOOOOOOO</h1>
            <div className="person-card">

                <div className="person-cover">
                    <img className="person-img"  src="/HelloWorld.svg" />
                    <div className="person-name">lljljljk</div>
                </div>
                <ul className="person-icon-list">

                    { list_elements }
                </ul>
                <button className="person-show-button">lkjlkjk</button>

            </div>
            <div className=""></div>
        </main>
    );
};

export default PersonalInfo;
