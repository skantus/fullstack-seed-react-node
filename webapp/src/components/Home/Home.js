import React from 'react';
import { Grid } from 'react-flexbox-grid';
import Details from 'components/Details';
import { content } from './home.module.css';

const Home = () => (
  <Grid fluid className={content}>
    <Details />
  </Grid>
);

export default Home;
