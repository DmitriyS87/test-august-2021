import React from 'react';
import { Button } from './button';
import Typography from '@material-ui/core/Typography';

export const App = () => (
  <div>
    <Typography variant="h1" gutterBottom>
      App started!
    </Typography>
    <Button>start</Button>
  </div>
);
