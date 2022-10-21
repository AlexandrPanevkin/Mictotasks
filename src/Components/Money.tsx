import React, {useState} from "react";
import {filterType} from "../App";
type MoneyPropsType = {
    banknots: string
    value: number
    number: string
}
type MoneyType = {
    money: Array<MoneyPropsType>
}

export const Money = (props: MoneyType) => {
    const [filter, setFilter] = useState<filterType>('All')

    let currentMoney = props.money
    if (filter === 'Dollars') {
        currentMoney = props.money.filter((filteredMoney) => filteredMoney.banknots === 'Dollars')
    }
    if (filter === 'RUBLS') {
        currentMoney = props.money.filter((filteredMoney) => filteredMoney.banknots === 'RUBLS')
    }
    const onClickFilterHandler = (nameButton: filterType) => {
        setFilter(nameButton)
    }
    return (
        <div>
            <ul>
                {currentMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknots}</span>
                            <span>{objFromMoneyArr.value}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button onClick={() => onClickFilterHandler('All')}>All</button>
                <button onClick={() => onClickFilterHandler("RUBLS")}>Rubls</button>
                <button onClick={() => onClickFilterHandler("Dollars")}>Dollars</button>
            </div>
        </div>
            )
            }