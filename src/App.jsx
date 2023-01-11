import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global.Styled";
import { Container } from "./components/styles/Container.Styled";
import Header from "./components/Header";

const theme = {
	colors: {
		header: "#ebfbff",
		body: "#00000",
		footer: "#003333",
	},
	mobile: "768px",
};

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Header />
			<Container>
				<h1>Hello World</h1>
			</Container>
		</ThemeProvider>
	);
};

export default App;
