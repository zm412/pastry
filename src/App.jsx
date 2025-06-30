import React, { useState, useEffect } from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import './App.css'
import { ThemeProvider } from './contexts/ThemeContext';
import { DashboardProvider } from './contexts/DashboardContext';

function App() {
    return (
        <ThemeProvider>
            <DashboardProvider>
                <Header />
                <Main />
            </DashboardProvider>
        </ThemeProvider>
    );
}

export default App;
