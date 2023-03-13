import { useState, FC, PropsWithChildren } from 'react';
import {
	Container,
	Header,
	Title,
	Content,
	ArrowContainer,
	StyledInput,
} from './accordion.styled';
import { ArrowIcon, Box } from 'components';

export interface AccordionProps {
	title: string;
	defaultOpen?: boolean;
}

export const Accordion: FC<PropsWithChildren<AccordionProps>> = ({
	title,
	defaultOpen = false,
	children,
}) => {
	const [isOpen, setIsOpen] = useState(defaultOpen);

	const onClickAccordion = () => {
		setIsOpen(prev => !prev);
	};

	return (
		<Container isOpen={isOpen}>
			<Header htmlFor={title}>
				<Title>{title}</Title>
				<ArrowContainer isOpen={isOpen}>
					<ArrowIcon />
				</ArrowContainer>
			</Header>
			<StyledInput
				type='checkbox'
				id={title}
				hidden
				onChange={onClickAccordion}
				checked={isOpen}
			/>
			<Content className='content'>
				<Box display='flex' flexDirection='column' gridGap='sp16'>
					{children}
				</Box>
			</Content>
		</Container>
	);
};
