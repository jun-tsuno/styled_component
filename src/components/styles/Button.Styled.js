import styled from "styled-components";

export const Button = styled.button`
	border-radius: 50px;
	border: none;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
	cursor: pointer;
	font-size: 16px;
	font-weight: 700px;
	padding: 15px 60px;
	background: ${({ bg }) => bg};
	color: ${({ color }) => color || "#000"};

	&:hover {
		opacity: 0.9;
		transform: scale(0.98);
	}
`;
