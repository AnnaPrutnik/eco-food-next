'use client';
import { PropsWithChildren } from 'react';

import * as ScrollArea from '@radix-ui/react-scroll-area';
import s from './body-scroll.module.scss';

export const BodyScroll = ({ children }: PropsWithChildren) => {
  return (
    <ScrollArea.Root className={s.root}>
      <ScrollArea.Viewport className={s.viewport}>
        {children}
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar
        orientation="horizontal"
        data-state="visible"
        className={s.scrollbar}
      >
        <ScrollArea.Thumb className={s.thumb} />
      </ScrollArea.Scrollbar>
      <ScrollArea.Scrollbar orientation="vertical" className={s.scrollbar}>
        <ScrollArea.Thumb className={s.thumb} />
      </ScrollArea.Scrollbar>
      <ScrollArea.Corner className={s.corner} />
    </ScrollArea.Root>
  );
};
