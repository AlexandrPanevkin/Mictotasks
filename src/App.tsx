import React, {useState} from 'react';
import './App.css';
import {NewComponent} from "./NewComponent";
import {students} from "./students";
import {Cars} from "./Cars";
import {Button} from "./Button";


function App() {

    // const topCars = [
    //     {manufacturer: 'BMW', model: 'm5cs'},
    //     {manufacturer: 'Mercedes', model: 'e63s'},
    //     {manufacturer: 'Audi', model: 'rs6'}
    // ]

    // const Button1Foo=(subscriber: string, age: number)=>{
    //     console.log(subscriber, age)
    // }
    // const Button2Foo=(subscriber: string)=>{
    //     console.log(subscriber)
    // }
    // const Button3Foo=()=>{
    //     console.log('im button')
    // }


    let[a, setA]=useState(1)
    const onClickHandler=()=>{
        setA(++a)
    }
   useState(1)
    const onClickHandlerZero=()=>{
        setA(a=0)
    }

    return (
        <>
            <div>
                {/*<NewComponent students={students}/>*/}
                {/*<Cars cars={topCars} />*/}
            </div>
            <div>
                {/*<Button name={'YoutubeChanel-1'} callBack={()=>Button1Foo("Im Vasya", 21)}/>*/}
                {/*<Button name={'YoutubeChanel-2'} callBack={()=>Button2Foo("Im Ivan")}/>*/}
                {/*<Button name={'Im Button'} callBack={Button3Foo}/>*/}
            </div>
            <div>
                <h1>{a}</h1>
                <button onClick={onClickHandler}>number</button>
                <button onClick={onClickHandlerZero}>0</button>
            </div>

        </>
    );
}

export default App;
