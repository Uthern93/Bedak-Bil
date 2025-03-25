// routing
import router from "./routes";
import React, { useEffect, useState, Suspense } from "react";
import { RouterProvider } from 'react-router-dom';
import SplashScreen from './views/SplashScreen'
import './App.css';
import {AuthProvider} from "./context/AuthContext";
import Loader from './ui-component/Loader'

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
        <AuthProvider>
            <Suspense fallback={<Loader/>}>
                {isLoading ? <SplashScreen /> : <RouterProvider router={router} />}
            </Suspense>
        </AuthProvider>
    );
};

export default App;
