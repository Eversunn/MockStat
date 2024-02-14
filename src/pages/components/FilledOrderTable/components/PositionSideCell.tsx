import { GridRenderCellParams } from "@mui/x-data-grid";
import { type FC } from "react"

interface Props extends GridRenderCellParams {}

const PositionSideCell: FC<Props> = ({ row }) => {
	const color = row.orderPositionSide === "LONG" ? "#1aad8a" : "#eb4646";

	return <span style={{ color }}>{row.orderPositionSide}</span>;
};

export default PositionSideCell;