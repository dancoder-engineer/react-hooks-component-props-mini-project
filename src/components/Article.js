import React from "react";

function Article({title, date="January 1, 1970", preview, cupsBoxes}){
    return(
        <article>
            <h3>{title}</h3>
            <small>{date} • {cupsBoxes}</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article
