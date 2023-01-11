import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global.Styled";
import { Container } from "./components/styles/Container.Styled";
import Header from "./components/Header";
import content from "./content";
import Card from "./components/Card";
import Footer from "./components/Footer";

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
				{content.map((item, index) => (
					<Card key={index} item={item} />
				))}
			</Container>
			<Footer />
		</ThemeProvider>
	);
};

export default App;
