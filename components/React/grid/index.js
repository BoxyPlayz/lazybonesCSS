import { jsx as _jsx } from "react/jsx-runtime";
export function Column(props) {
    return (_jsx("div", { style: {
            display: "flex",
            flexDirection: "column",
            flex: 1,
        }, children: props.children }));
}
export function Row(props) {
    return (_jsx("div", { style: {
            display: "flex",
            flexDirection: "row",
            alignItems: "stretch",
        }, children: props.children }));
}
