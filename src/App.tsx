import React from 'react';
import './App.css';
import {NewComponent} from "./NewComponent";
import {students} from "./students";
import {Cars} from "./Cars";


function App() {

    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    return (
        <>
            <NewComponent students={students}/>
            <Cars cars={topCars} />
        </>
    );
}

export default App;
