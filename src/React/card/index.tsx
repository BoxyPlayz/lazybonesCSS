import { ReactElement, ReactNode } from "react";

export function Card(props: {
    title: string, 
    description?: string,
    children: ReactNode
}): ReactElement {
    return(
    <div style={{
        border: "4px solid black",
    }}>
        <h3>{props.title}</h3>
        {props.description}
        <br />
        {props.children}
    </div>
    )
}