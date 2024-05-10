import { AppBar, Toolbar, Typography } from '@mui/material';
import { object } from 'prop-types';
import React from 'react';
import { APP_BAR_HEIGHT } from 'common/constants';
import PagePadder from 'components/scaffold/PagePadder';

function AppHeader({ sx } = {}) {
  return (
    <AppBar position='fixed' sx={{ height: `${APP_BAR_HEIGHT}px`, ...sx }}>
      <PagePadder>
        <Toolbar>
          <Typography component='h1'>Frictionless Games</Typography>
        </Toolbar>
      </PagePadder>
    </AppBar>
  );
}

AppHeader.propTypes = {
  sx: object,
};

export default AppHeader;
