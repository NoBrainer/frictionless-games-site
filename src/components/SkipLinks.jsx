import { Link, List, ListItem } from '@mui/material';
import React from 'react';
import { Z_INDEX } from 'common/constants';

const skipLinks = [
  { href: '#app-main', title: 'Content' },
  { href: '#app-footer', title: 'Footer' },
];

function SkipLinks() {
  const sx = {
    color: 'primary',
    position: 'fixed',
    left: '-10000px',
    width: '1px',
    height: '1px',
    overflow: 'hidden',
    '&:focus, &:active': {
      left: 1,
      top: 1,
      width: 'auto',
      height: 'auto',
      overflow: 'visible',
    },
  };
  return (
    <List sx={{ position: 'fixed', zIndex: Z_INDEX.SKIP_LINKS, left: 0, top: 0 }}>
      {skipLinks.map((link, i) => (
        <ListItem key={i}>
          <Link href={link.href} sx={sx}>
            Go to {link.title}
          </Link>
        </ListItem>
      ))}
    </List>
  );
}

export default SkipLinks;
