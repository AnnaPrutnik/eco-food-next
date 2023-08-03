'use client';

import { PropsWithChildren } from 'react';
import * as RadixAccordion from '@radix-ui/react-accordion';
import { ArrowIcon } from '@/components';
import s from './accordion.module.scss';

interface AccordionProps {
  title: string;
  defaultOpen?: boolean;
}

export const Accordion = ({
  title,
  defaultOpen = false,
  children,
}: PropsWithChildren<AccordionProps>) => {
  return (
    <RadixAccordion.Root
      type="single"
      collapsible
      defaultValue={defaultOpen ? title : ''}
    >
      <RadixAccordion.Item value={title} className={s.item}>
        <RadixAccordion.Header className={s.header}>
          <RadixAccordion.Trigger className={s.trigger}>
            <span>{title}</span>

            <div aria-hidden>
              <ArrowIcon />
            </div>
          </RadixAccordion.Trigger>
        </RadixAccordion.Header>
        <RadixAccordion.Content className={s.content}>
          <div className={s.inner}>{children}</div>
        </RadixAccordion.Content>
      </RadixAccordion.Item>
    </RadixAccordion.Root>
  );
};
