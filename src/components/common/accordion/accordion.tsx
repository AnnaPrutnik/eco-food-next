import React, { useState } from 'react';
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
  children: React.ReactNode;
}

export const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickAccordion = () => {
    setIsOpen((prev) => !prev);
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
        type="checkbox"
        id={title}
        hidden
        onChange={onClickAccordion}
        checked={isOpen}
      />
      <Content className="content">
        <Box display="flex" flexDirection="column" gridGap="sp16">
          {children}
        </Box>
      </Content>
    </Container>
  );
};
