import { GridRenderCellParams } from "@mui/x-data-grid";
import { type FC } from "react";

interface Props extends GridRenderCellParams {}

const SideCell: FC<Props> = ({ row }) => {
	const color = row.orderSide === "BUY" ? "#1aad8a" : "#eb4646";

	return <span style={{ color }}>{row.orderSide}</span>;
};

export default SideCell;
