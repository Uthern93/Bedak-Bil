// routing
import router from "./routes";
import React, { useEffect, useState } from "react";
import { RouterProvider } from 'react-router-dom';
import SplashScreen from './views/SplashScreen'
import './App.css';

const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Show splash screen for 3 seconds
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 6000);

        return () => clearTimeout(timer); // Cleanup timer
    }, []);

    return (
        <>
            {isLoading ? <SplashScreen /> : <RouterProvider router={router} />}
        </>
    );
};

export default App;
