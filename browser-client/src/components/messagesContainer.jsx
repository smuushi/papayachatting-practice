import React, { useState } from "react";

import message from "./messages";

function MessagesContainer() {

    const [messages, setMessages] = useState([]);

    const [userId, setUserId] = useState("")

    const userIdChangeHandler = (e) => {
        // debugger
        setUserId(e.target.value)
        console.log(userId)
    }


    

    return(
        <section className="MessageContainer">
            hello from messages container
            <form action="">
                <input type="number" value={userId} onChange={userIdChangeHandler} />
            </form> must be digits...
        </section>

    );


}

export default MessagesContainer;