import {
  Balance as BalanceIcon,
  CarCrash as CarCrashIcon,
  CloseFullscreen as CollapseIcon,
  OpenInFull as ExpandIcon,
  Radar as RadarIcon,
} from '@mui/icons-material';
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material';
import PropTypes from 'prop-types';
import React, { useCallback, useMemo } from 'react';
import { APP_BAR_HEIGHT, APP_NAV_WIDTH, APP_NAV_WIDTH_COLLAPSED, COOKIE_NAV_STATE } from 'common/constants';
import { useCookie } from 'common/cookies';
import SkipLinks from 'components/SkipLinks';

function AppNav() {
  const [navCookie, setNavCookie] = useCookie(COOKIE_NAV_STATE);
  const isExpanded = useMemo(() => navCookie === 'o', [navCookie]);
  const width = useMemo(() => `${isExpanded ? APP_NAV_WIDTH : APP_NAV_WIDTH_COLLAPSED}px`, [isExpanded]);
  const actionName = useMemo(() => `${isExpanded ? 'collapse' : 'expand'}`, [isExpanded]);
  const handleToggle = useCallback(() => {
    setNavCookie(isExpanded ? '' : 'o');
  }, [isExpanded]);
  return (
    <nav id='app-nav'>
      <SkipLinks />
      <Drawer
        variant='permanent'
        anchor='left'
        sx={{
          width,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width,
            boxSizing: 'border-box',
          },
        }}
      >
        <Toolbar sx={{ height: APP_BAR_HEIGHT }}>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label={`Button to toggle left panel. Press spacebar to ${actionName}.`}
            onClick={handleToggle}
          >
            {isExpanded ? <CollapseIcon /> : <ExpandIcon />}
          </IconButton>
        </Toolbar>
        <Divider />
        <List sx={{ '.MuiListItemButton-root > *': { m: 0 } }}>
          <ListItem disablePadding>
            <ListItemButton aria-label='Button to select first navigation option. Press spacebar to select.'>
              <ListItemIcon>
                <CarCrashIcon />
              </ListItemIcon>
              <ListItemText primary={isExpanded ? 'First Option' : null} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton aria-label='Button to select second navigation option. Press spacebar to select.'>
              <ListItemIcon>
                <RadarIcon />
              </ListItemIcon>
              <ListItemText primary={isExpanded ? 'Second Option' : null} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton aria-label='Button to select third navigation option. Press spacebar to select.'>
              <ListItemIcon>
                <BalanceIcon />
              </ListItemIcon>
              <ListItemText primary={isExpanded ? 'Third Option' : null} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </nav>
  );
}

AppNav.propTypes = {
  isExpanded: PropTypes.bool,
  onToggle: PropTypes.func,
};

export default AppNav;
