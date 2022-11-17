import {Button} from "./Button";
import React, {useState} from "react";
import {debug} from "util";

type BanknotsType = { banknots: string, value: number, number: string }

type FileterType = 'All' | 'Dollars' | 'RUBLS'

type MoneyType = {
    money: Array<BanknotsType>
}

export const FilterValute = (props: MoneyType) => {

    const [banknote, bankState] = useState<FileterType>('All')
    let currentMoney = props.money

    if (banknote === 'All') {
        currentMoney = props.money
    } else {
        currentMoney = props.money.filter(filterMoney => filterMoney.banknots === banknote)
    }

    const onClickHandler = (valute: FileterType) => {
        bankState(valute)
    }

    return (
        <>
            <ul>
                {currentMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknots} </span>
                            <span>{objFromMoneyArr.value} </span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>

                    )
                })}
            </ul>
            <div style={{marginLeft: "20px"}}>

                <Button name={'All'} callback={() => onClickHandler('All')}/>
                <Button name={'Рубли'} callback={() => onClickHandler('RUBLS')}/>
                <Button name={'Доллары'} callback={() => onClickHandler('Dollars')}/>
            </div>
            {/*<button></button>*/}
        </>

    )
}