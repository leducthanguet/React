import classes from "./UsersList.module.css";
import Card from "../UI/Card.js";
import React from "react";

const UsersList = (props) => {

    console.log(props);
    return (
        <Card className={classes.users}>
            <ul>
                {props.users.map((user) => {
                    return(
                        <li>
                            {user.name} ({user.age} years old)
                        </li>
                    )
                })}
            </ul>
        </Card>
    );
}

export default UsersList;
