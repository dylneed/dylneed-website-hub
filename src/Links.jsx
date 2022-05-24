import React from 'react';
import {Grid, Link, Typography} from '@mui/material';

const projects = require('./projects.json')

const Links = (props) => {
  return (
    <Grid container xs={12} spacing={2}>
      {projects.map((project) => {
        const url = props.isWebsite ? project.website : project.repo;
        return url && (
          <Grid item xs={12}>
            <Typography variant="p">
              <Link href={url}>
                {project.name}
              </Link>
            </Typography>
          </Grid>
        )})}
    </Grid>
  )
}

export default Links
