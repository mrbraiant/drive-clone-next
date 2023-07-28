import { Paper } from '@mui/material';
import { styled } from '@mui/system';

export const MainContent = styled('div')({
  backgroundImage:
    'url(https://images.alphacoders.com/129/1290805.jpg)',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const MainPaper = styled(Paper)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '400px',
  height: '400px',
  borderRadius: '15px',
  opacity: '0.8',
  padding: '1rem',
});

export const RowBox = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
});
