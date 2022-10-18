import React from "react";

type studentType = {
    id: number
    name: string
    age: number
}

type NewComponentType = {
    students: Array<studentType>
}

export const NewComponent = (props: NewComponentType) => {

    return (
        <ul>
            {props.students.map((objectFromStudentArray, index) => {
                return (
                    <li key={objectFromStudentArray.id}><span>{objectFromStudentArray.name}</span>
                        <span>{objectFromStudentArray.age}</span>
                    </li>
                )
            })}
        </ul>
    );
};
