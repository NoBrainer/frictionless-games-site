import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ConstructionIcon from '@mui/icons-material/Construction';
import { Card, CardContent, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { arrayOf, node, oneOfType } from 'prop-types';
import React from 'react';
import { APP_BAR_HEIGHT } from 'common/constants';
import PagePadder from 'components/scaffold/PagePadder';

function AppContent() {
  return (
    <main id='app-main'>
      <PagePadder sx={{ mt: `${APP_BAR_HEIGHT}px`, pt: 3 }}>
        <IntroContent />
      </PagePadder>
    </main>
  );
}

function IntroContent() {
  return (
    <Grid container>
      <IntroSection>
        <ConstructionIcon />
        <ConstructionIcon />
        <ConstructionIcon />
        <Typography component='span' sx={{ mx: 1 }}>
          Note: This project is UNDER CONSTRUCTION.
        </Typography>
        <ConstructionIcon />
        <ConstructionIcon />
        <ConstructionIcon />
      </IntroSection>
      <IntroSection>
        <Typography paragraph={true}>
          Friction is a dark pattern in game design that prevents players from doing what they want to do.
        </Typography>
        <Typography paragraph={true}>
          To counter this, Frictionless Games designs games with a user-first experience. Here are some examples of our
          goals:
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <ArrowRightIcon />
            </ListItemIcon>
            <ListItemText>All features are available without paying.</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowRightIcon />
            </ListItemIcon>
            <ListItemText>
              Ads do not interfere with game play. (Instead of ads, we provide the option to donate.)
            </ListItemText>
          </ListItem>
        </List>
      </IntroSection>
    </Grid>
  );
}

function IntroSection({ children } = {}) {
  return (
    <Grid item sx={{ mb: 3 }} flexGrow={1}>
      <Card>
        <CardContent>{children}</CardContent>
      </Card>
    </Grid>
  );
}

IntroSection.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
};

export default AppContent;
