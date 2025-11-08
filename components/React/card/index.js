import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function Card(props) {
    return (_jsxs("div", { style: {
            display: "flex",
            border: "4px solid black",
            borderRadius: "4px",
            width: "fit-content",
            height: "fit-content",
            padding: "4px",
            flexDirection: "column"
        }, children: [_jsx("h3", { children: props.title }), props.description, _jsx("br", {}), props.children] }));
}
