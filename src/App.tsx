import React from 'react';
import {renderRoutes} from 'react-router-config';
import 'typeface-roboto';
import './App.css';

const App: React.FC<any> = ({route}) => {
    return (
        <>{renderRoutes(route.routes)}</>
    );
};

export default App;
