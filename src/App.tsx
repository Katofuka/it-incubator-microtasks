import React, {MouseEvent, useState} from 'react';


import './App.css';
import {Cars} from "./components/Cars";
import {Button} from "./components/Button";
import {FilterValute} from "./components/FilterValute";
import {FullInput} from "./components/FullInput";


function App() {
    // const [money, setMoney] = useState([
    //     {banknots: 'Dollars', value: 100, number: ' a1234567890'},
    //     {banknots: 'Dollars', value: 50, number: ' z1234567890'},
    //     {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
    //     {banknots: 'Dollars', value: 100, number: ' e1234567890'},
    //     {banknots: 'Dollars', value: 50, number: ' c1234567890'},
    //     {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
    //     {banknots: 'Dollars', value: 50, number: ' x1234567890'},
    //     {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    // ])

    const [messages, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])
    const addMessage = (title: string) => {
        let newMessage = {message: title}
        setMessage([newMessage, ...messages])
    }

    return (
        // <FilterValute money={money}/>
        <>
            <div>
                <FullInput buttonClick={addMessage}/>
                {/*<input/>*/}

            </div>
            {messages.map((msg, index) => {
                return (
                    <div key={index}>{msg.message}</div>
                )

            })}
        </>
    );
}

export default App;
