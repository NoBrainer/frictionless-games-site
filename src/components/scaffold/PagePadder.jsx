import { Grid } from '@mui/material';
import { arrayOf, node, object, oneOfType } from 'prop-types';
import React, { useEffect, useMemo } from 'react';
import { APP_NAV_WIDTH, APP_NAV_WIDTH_COLLAPSED, COOKIE_NAV_STATE } from 'common/constants';
import { useCookie } from 'common/cookies';

function PagePadder({ children, sx } = {}) {
  const [navCookie, , pollForCookieChanges] = useCookie(COOKIE_NAV_STATE);
  const isNavExpanded = useMemo(() => navCookie === 'o', [navCookie]);
  const navWidth = useMemo(() => (isNavExpanded ? APP_NAV_WIDTH : APP_NAV_WIDTH_COLLAPSED), [isNavExpanded]);
  const makeSpaceForNav = useMemo(() => ({ ml: `${navWidth}px`, width: `calc(100% - ${navWidth}px)` }), [navWidth]);
  useEffect(pollForCookieChanges, [navCookie]);
  return (
    <Grid container direction='row' sx={{ ...sx, ...makeSpaceForNav }}>
      <Grid item xs={0} sm={0} md={0} lg={1} xl={2} />
      <Grid container item xs={12} sm={12} md={12} lg={10} xl={8}>
        {children}
      </Grid>
      <Grid item xs={0} sm={0} md={0} lg={1} xl={2} />
    </Grid>
  );
}

PagePadder.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
  sx: object,
};

export default PagePadder;
