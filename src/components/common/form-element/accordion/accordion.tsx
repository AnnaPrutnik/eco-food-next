import { PropsWithChildren, FC } from 'react';
import { ArrowIcon } from 'components/svg';
import {
	Item,
	Trigger,
	Header,
	Content,
	ArrowContainer,
	ContentWrapper,
	Title,
} from './accordion.styled';
import * as RadixAccordion from '@radix-ui/react-accordion';

export interface AccordionProps {
	title: string;
	defaultOpen?: boolean;
	titleSize?: number;
}

export const Accordion: FC<PropsWithChildren<AccordionProps>> = ({
	children,
	title,
	defaultOpen = false,
	titleSize = 18,
}) => {
	return (
		<RadixAccordion.Root
			type='single'
			collapsible
			defaultValue={defaultOpen ? title : ''}
		>
			<Item value={title}>
				<Header>
					<Trigger>
						<Title fontSize={titleSize}>{title}</Title>

						<ArrowContainer aria-hidden>
							<ArrowIcon />
						</ArrowContainer>
					</Trigger>
				</Header>
				<Content>
					<ContentWrapper>{children}</ContentWrapper>
				</Content>
			</Item>
		</RadixAccordion.Root>
	);
};
