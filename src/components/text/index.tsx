import { Typography, useTheme } from '@mui/material';
import { SxProps } from '@mui/system';
import { CSSProperties, ReactNode } from 'react';

type TextProps = {
  children?: ReactNode;
  type?:
    | 'body1'
    | 'body2'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'inherit'
    | 'overline'
    | 'subtitle1'
    | 'subtitle2'
    | 'caption';
  style?: CSSProperties;
  sx?: SxProps;
  secondary?: boolean;
  textAlign?:
    | 'center'
    | 'right'
    | 'left'
    | 'inherit'
    | 'justify';
};

export const Text = ({
  children,
  type,
  style,
  sx,
  secondary = false,
  textAlign,
}: TextProps) => {
  const theme = useTheme();
  return (
    <Typography
      align={textAlign}
      variant={type}
      style={{
        ...style,
      }}
      sx={sx}
      color={
        secondary ? theme.palette.text.secondary : undefined
      }
    >
      {children}
    </Typography>
  );
};
