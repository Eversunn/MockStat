export const getFormattedStart = (direction: "UP" | "DOWN" | undefined, start: number | undefined) => {
	return direction === "UP" ? `>${start}` : `<${start}`;
};

export const getDirectionStyle = (direction: "UP" | "DOWN" | undefined) => {
	return { color: direction === "UP" ? "#1aad8a" : "#eb4646" };
};
