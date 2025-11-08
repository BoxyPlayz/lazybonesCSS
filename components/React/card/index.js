import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function Card(props) {
    return (_jsxs("div", { style: {
            border: "4px solid black",
        }, children: [_jsx("h3", { children: props.title }), props.description, _jsx("br", {}), props.children] }));
}
