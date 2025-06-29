import React, { useState, useEffect } from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import './App.css'
import { ThemeProvider } from './ThemeContext';

function App() {
    return (
        <ThemeProvider>
            <Header />
            <Main />
        </ThemeProvider>
    );
}

export default App;
