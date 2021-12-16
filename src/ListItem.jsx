import React, { useState } from "react";

function ListItem(props) {
    const [val, setVal] = useState(false);

    const checkbox = () => {
        setVal(true);
    };
    const style = {
        textDecoration: "lineThrough",
    };
    return ( <
        div className = "mainDiv" >
        <
        span >
        <
        input type = "checkbox"
        onClick = { checkbox }
        />{" "} <
        /span>{" "} <
        li className = "listItem"
        style = {
            {
                textDecoration: val ? "line-through" : "none",
                fontFamily: val ? "italic" : "none",
                color: val ? "grey" : "none",
            }
        } >
        { " " } { props.text } { " " } <
        /li>{" "} <
        /div>
    );
}

export default ListItem;