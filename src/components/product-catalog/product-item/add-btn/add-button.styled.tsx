import styled from 'styled-components';
import {
	btnBaseMobile,
	btnBaseTablet,
	mobileSettingWithIcons,
	tabletSettingsWithIcons,
} from 'styles/buttons';

export const Btn = styled.button`
	${btnBaseMobile}
	${mobileSettingWithIcons}
	position: absolute;
	bottom: 16px;
	right: 16px;

	width: 36px;
	height: 36px;
	color: ${({ theme }) => theme.colors.primary};
	background-color: ${({ theme }) => theme.colors.white};
	border-color: ${({ theme }) => theme.colors.primary};

	&:hover,
	&:active {
		color: ${({ theme }) => theme.colors.white};
		background-color: ${({ theme }) => theme.colors.primary};
	}

	${({ theme }) => theme.media.xmMin} {
		${btnBaseTablet}
		${tabletSettingsWithIcons}
		width: 88px;
		bottom: 24px;
		left: 24px;
	}
`;
