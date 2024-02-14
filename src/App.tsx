import { type FC } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { SessionStatistic } from "./pages/TradingSession/session-statistic";
import { options } from "./utils/theme";

const App: FC = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: (
					<SessionStatistic/>
			)
		},
		{}
	]);

	const theme = createTheme(options);
	theme.typography.h1 = {
		fontSize: "2.35rem",
		[theme.breakpoints.up("sm")]: {
			fontSize: "2.65rem"
		},
		[theme.breakpoints.up("md")]: {
			fontSize: "3rem"
		}
	};

	return (
				<ThemeProvider theme={theme}>
						<RouterProvider router={router} />
				</ThemeProvider>
	);
};

export default App;
