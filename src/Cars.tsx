import React from "react";

type CarsType = {
    manufacturer: string
    model: string
}

type TopCarsType = {
    cars: Array<CarsType>
}

export const Cars = (props: TopCarsType) => {

    return (
        <ul>
            {props.cars.map((objectFromCarsArray, index) => {
                return (
                    <li><span>{objectFromCarsArray.manufacturer}</span>
                        <span>{objectFromCarsArray.model}</span>
                    </li>
                )
            })}
        </ul>
    );
};