import { type FC } from "react";
import { DataGrid, GridColDef, } from "@mui/x-data-grid";
import { useTranslation } from "react-i18next";
import { Box, Typography } from "@mui/material";
import SideCell from "./components/SideCell";
import PositionSideCell from "./components/PositionSideCell";

const statusSx = { textAlign: "center", mt: "4rem" };

interface CollapsedProps extends TradingSessionState {
	mode: "collapsed";
}

interface ExpandedProps {
	mode: "expanded";
}

type Props = CollapsedProps | ExpandedProps;

const FilledOrderTable: FC<Props> = (props) => {
    function getRowId(row:any) {
        return row.orderId;
      }
	const { t } = useTranslation();
	const columns: GridColDef[] = [
		{ field: "orderId", headerName: "ID", type: "string", minWidth: 320, flex: 2 },
		{
			field: "orderType",
			headerName: "orderType",
			minWidth: 150,
			flex: 1
		},
		{
			field: "orderSide",
			headerName: "orderSide",
			minWidth: 100,
			renderCell: (params) => <SideCell {...params} />
		},
		{
			field: "orderPositionSide",
			headerName: "orderPositionSide",
			minWidth: 160,
			renderCell: (params) => <PositionSideCell {...params} />
		},
		{
			field: "filledAt",
			headerName: "filledAt",
			minWidth: 200,
		},
		{
			field: "marketPrice",
			align: "left",
			headerAlign: "left",
			headerName: "marketPrice",
			type: "number",
			minWidth: 120,
			flex: 1
		},
		{ field: "amount", headerName: "amount", type: "number", minWidth: 120, flex: 1 }
	];
    
	if (props.mode === "collapsed") {
		const { error, isLoading, orders } = props;

		if (isLoading) {
			return (
				<Box sx={statusSx}>
					<span className="loader md" />
				</Box>
			);
		} else if (error) {
			return (
				<Box sx={statusSx}>
					<Typography variant="body1">{t("TradingSession.table.error")}</Typography>
				</Box>
			);
		} else if (orders?.length === 0) {
			return (
				<Box sx={statusSx}>
					<Typography variant="h5" component="p">
						{t("TradingSession.table.notFound")}
					</Typography>
				</Box>
			);
		} else {
			return (
				<>
					<Typography variant="body1">
						{t("TradingSession.table.title")}: {orders?.length}
					</Typography>
					<DataGrid
						sx={{ mx: "auto", mt: "1rem", borderRadius: "0.5rem" }}
						initialState={{ sorting: { sortModel: [{ field: "marketPrice", sort: "desc" }] } }}
						pageSizeOptions={[10, 25, 50, 100]}
						columns={columns}
						rows={orders || []}
                        getRowId={getRowId}
					/>
				</>
			);
		}
	} else {
        
		const { orders } = props;
		return (
			<DataGrid
            sx={{ borderRadius: "0.5rem", "& .MuiDataGrid-virtualScroller": { minHeight: "max(300px, 30vh)" } }}
            initialState={{ sorting: { sortModel: [{ field: "marketPrice", sort: "desc" }] } }}
            pageSizeOptions={[10, 25, 50, 100]}
            columns={[...columns].splice(1)}
            rows={orders}
            getRowId={getRowId}
                
			/>
		);
	}
};

export default FilledOrderTable;
