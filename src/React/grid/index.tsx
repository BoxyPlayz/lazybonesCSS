import React, { type ReactElement, type ReactNode } from "react";

export function Column(props: { children?: ReactNode }): ReactElement {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				flex: 1,
			}}>
			{props.children}
		</div>
	);
}

export function Row(props: { children?: ReactNode }): ReactElement {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "row",
				alignItems: "stretch",
			}}>
			{props.children}
		</div>
	);
}
