import { jsx as _jsx } from "react/jsx-runtime";
export function Column(props) {
    return (_jsx("div", { style: {
            display: "flex",
            flexDirection: "column",
            flex: 1,
        }, className: props.className, children: props.children }));
}
export function Row(props) {
    return (_jsx("div", { style: {
            display: "flex",
            flexDirection: "row",
            alignItems: "stretch",
            flex: 1
        }, className: props.className, children: props.children }));
}
