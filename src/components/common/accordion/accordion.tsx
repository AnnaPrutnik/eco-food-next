import React from 'react';
import {
  StyledDetail,
  StyledDetailsChildren,
  StyledSummary,
} from './accordion.styled';
import { ArrowIcon, Box } from 'components';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

export const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  return (
    <StyledDetail>
      <StyledSummary>
        {title}
        <Box width={20} height={20} textAlign="center">
          <ArrowIcon />
        </Box>
      </StyledSummary>
      <StyledDetailsChildren>{children}</StyledDetailsChildren>
    </StyledDetail>
  );
};
