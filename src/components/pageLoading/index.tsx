import { Backdrop, CircularProgress } from '@mui/material';

type PageLoadingProps = {
  pageLoading: boolean;
};

export const PageLoading = ({
  pageLoading = false,
}: PageLoadingProps) => {
  return (
    <Backdrop
      sx={{
        color: (theme) => theme.palette.common.white,
        zIndex: (theme) => theme.zIndex.speedDial + 5,
      }}
      open={pageLoading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};
