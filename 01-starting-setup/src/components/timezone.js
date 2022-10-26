import React, { useState } from "react";

function DateTime(props) {
    const [date, setDate] = useState(new Date());

    setInterval(
        function () {
            setDate(new Date());
        }, 100);
    props.onGetTime(date);
    return (
        <div>
            <div>{date.toISOString()}</div>
        </div>
    )
}

export default DateTime;
