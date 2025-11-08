import React, { type ReactElement, type ReactNode } from "react";

export function Column(props: { children?: ReactNode, className?: string }): ReactElement {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				flex: 1,
			}}
			className={props.className}
			>
			{props.children}
		</div>
	);
}

export function Row(props: { children?: ReactNode, className?: string }): ReactElement {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "row",
				alignItems: "stretch",
				flex: 1
			}}
			className={props.className}>
			{props.children}
		</div>
	);
}
