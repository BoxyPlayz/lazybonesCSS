import { ReactElement, ReactNode } from "react";

export function Card(props: {
    title: string, 
    description?: string,
    children?: ReactNode
}): ReactElement {
    return(
    <div style={{
        display: "flex",
        border: "4px solid black",
        borderRadius: "4px",
        width: "fit-content",
        height: "fit-content",
        padding: "4px",
        flexDirection: "column"
    }}>
        <h3>{props.title}</h3>
        {props.description}
        <br />
        {props.children}
    </div>
    )
}