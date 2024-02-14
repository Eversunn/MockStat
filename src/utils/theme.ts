import { ThemeOptions } from "@mui/material/styles";

export const options: ThemeOptions = {
	palette: {
		primary: { main: "#81909f" },
		secondary: { main: "#f50057" },
		background: { default: "#10161c", paper: "#070e16" },
		mode: "dark"
	},
	components: {
		MuiTypography: {
			styleOverrides: {
				h2: { fontWeight: 500, fontSize: "2.5rem" },
				h3: { fontWeight: 500, fontSize: "2rem" },
				h4: { fontWeight: 500, fontSize: "1.75rem" },
				h5: { fontWeight: 500, fontSize: "1.5rem" },
				h6: { fontWeight: 500, fontSize: "1.25rem" }
			}
		}
	}
};
