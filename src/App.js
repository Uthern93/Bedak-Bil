// routing
import router from "./routes";
import React from 'react';
import { RouterProvider } from 'react-router-dom';

import './App.css';

const App = () => {
    return (
        <RouterProvider router={router}/>
    );
};

export default App;
