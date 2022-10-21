import React, {useState} from 'react';
import './App.css';
import {NewComponent} from "./Components/NewComponent";
import {students} from "./Components/students";
import {Cars} from "./Components/Cars";
import {Button} from "./Components/Button";
import {Money} from "./Components/Money";
import {FullInput} from "./Components/FullInput";
import {ButtonInput} from "./Components/ButtonInput";
import {Input} from "./Components/Input";


export type filterType = 'All' | "RUBLS" | "Dollars"

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


    //  let[a, setA]=useState(1)
    //  const onClickHandler=()=>{
    //      setA(++a)
    //  }
    // useState(1)
    //  const onClickHandlerZero=()=>{
    //      setA(a=0)
    //  }

    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    let [message, setMessage] = useState([
        {message: "message1"},
        {message: "message2"},
        {message: "message3"},

    ])

    const addMessage = (title: string) => {
        let newMessage = {message: title};
        setMessage([newMessage, ...message])
    }

    let [title, setTitle] = useState('')

    const callbackButtonHandler = () => {
        addMessage(title)
        setTitle('')
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
                {/*<h1>{a}</h1>*/}
                {/*<button onClick={onClickHandler}>number</button>*/}
                {/*<button onClick={onClickHandlerZero}>0</button>*/}
            </div>
            <div>
                {/*<Money money={money}/>*/}
            </div>
            <div>
                {/*<FullInput addMessage={addMessage}/>*/}
                {/*{message.map((el, index) => {*/}
                {/*    return (*/}
                {/*        <div key={index}>{el.message}</div>*/}
                {/*    )*/}
                {/*})}*/}
            </div>
            <div>
                <Input title={title} setTitle={setTitle}/>
                <ButtonInput
                    name={'+'}
                    callback={callbackButtonHandler}/>
                {message.map((el, index) => {
                    return (
                        <div key={index}>{el.message}</div>
                    )
                })}
            </div>
        </>
    );
}

export default App;
