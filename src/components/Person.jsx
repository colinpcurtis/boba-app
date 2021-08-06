import React from "react";

const Person = (props) => {

    return (
        <div>
            <p key={props.name}>{props.name} got boba {props.count} times</p>
        </div>
    )
}

export default Person;
