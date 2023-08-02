'use client';
import { PropsWithChildren } from 'react';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import s from './component-scroll.module.scss';

interface ComponentScrollProps {
  hidden?: boolean;
}

export const ComponentScroll = ({
  children,
  hidden = false,
}: PropsWithChildren<ComponentScrollProps>) => {
  return (
    <ScrollArea.Root className={s.root} type="always">
      <ScrollArea.Viewport className={s.viewport}>
        {children}
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar
        orientation="vertical"
        hidden={hidden}
        className={s.scrollbar}
      >
        <ScrollArea.Thumb className={s.thumb} />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  );
};
