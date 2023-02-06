import React from 'react';
import { IconBtn, VisuallyHiddenSpan } from './buttons.styled';

interface IIconBtnProp {
  icon: React.ReactNode;
  label: string;
  onClickBtn: () => void;
}

export const IconButton: React.FC<IIconBtnProp> = ({
  icon,
  onClickBtn,
  label,
}) => {
  return (
    <IconBtn onClick={onClickBtn}>
      {icon}
      <VisuallyHiddenSpan>{label}</VisuallyHiddenSpan>
    </IconBtn>
  );
};
