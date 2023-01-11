import React from "react";
import { StyledHeader, Nav, Logo, Image } from "./styles/Header.Styled";
import { Container } from "./styles/Container.Styled";
import { Button } from "./styles/Button.Styled";
import { Flex } from "./styles/Flex.Styled";

const Header = () => {
	return (
		<StyledHeader>
			<Container>
				<Nav>
					<Logo src="./logo.svg" />
					<Button>Try It Free</Button>
				</Nav>
				<Flex>
					<div>
						<h1>Build The Community Your Fans Will Love</h1>
						<p>
							Eu ut culpa ad ullamco do duis aliqua non sunt eiusmod occaecat
							est.
						</p>
						<Button bg="#ff0099" color="#fff">
							Get Started For Free
						</Button>
					</div>
					<Image src="./illustration-mockups.svg" />
				</Flex>
			</Container>
		</StyledHeader>
	);
};

export default Header;
