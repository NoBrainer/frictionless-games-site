import { Grid, List, ListItem, Typography } from '@mui/material';
import React from 'react';
import PagePadder from 'components/scaffold/PagePadder';

function AppFooter() {
  return (
    <footer id='app-footer'>
      <PagePadder sx={{ mt: 3 }}>
        <ExampleFooter />
      </PagePadder>
    </footer>
  );
}

function ExampleFooter() {
  return (
    <Grid container sx={{ m: 3 }}>
      <Grid item xs={12} sm={6} md={4} sx={{ m: 0, p: 0, pb: 3 }}>
        <Typography>Column 1</Typography>
        <List>
          <ListItem>
            <Typography>Item 1</Typography>
          </ListItem>
          <ListItem>
            <Typography>Item 2</Typography>
          </ListItem>
          <ListItem>
            <Typography>Item 3</Typography>
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={12} sm={6} md={4} sx={{ m: 0, p: 0 }}>
        <Typography>Column 2</Typography>
        <List>
          <ListItem>
            <Typography>Item 1</Typography>
          </ListItem>
          <ListItem>
            <Typography>Item 2</Typography>
          </ListItem>
          <ListItem>
            <Typography>Item 3</Typography>
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={12} sm={6} md={4} sx={{ m: 0, p: 0 }}>
        <Typography>Column 3</Typography>
        <List>
          <ListItem>
            <Typography>Item 1</Typography>
          </ListItem>
          <ListItem>
            <Typography>Item 2</Typography>
          </ListItem>
          <ListItem>
            <Typography>Item 3</Typography>
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
}

export default AppFooter;
