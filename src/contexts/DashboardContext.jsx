import React, { createContext, useContext, useState } from "react";

const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
    const [dashboard, setDashboard] = useState("basic");

    const changeDashboard = (newDashboard) => {
        setDashboard(newDashboard);
    };

    return (
        <DashboardContext.Provider value={{ dashboard, changeDashboard }}>
            {children}
        </DashboardContext.Provider>
    );
};

export const useDashboardStore = () => useContext(DashboardContext);
