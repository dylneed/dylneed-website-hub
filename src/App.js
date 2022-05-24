import React, {useState} from 'react';
import {Box, Container, Divider, Grid, Link, Tab, Tabs, Typography} from '@mui/material';

const webPages = [
  {
    name: "Shopify Technical Challenge 2022",
    url: "https://dylneed.github.io/ShopifyTechnicalChallenge2022/"
  },
  {
    name: "Shopify Technical Challenge 2021",
    url: "https://dylneed.github.io/ShopifyTechnicalChallenge2021/"
  },
  {
    name: "Rhythmic Memory Game",
    url: "https://dylneed.github.io/RhythmicMemory/"
  },
  {
    name: "Github Pages Main Site",
    url: "https://dylneed.github.io"
  }
]

const repos = [
  {
    name: "Can you predict if a post will go viral on Tumblr?",
    url: "https://github.com/dylneed/ViralTumblrNLP",
  },
  {
    name: "Shopify Technical Challenge 2022",
    url: "https://github.com/dylneed/ShopifyTechnicalChallenge2022",
  },
  {
    name: "Shopify Technical Challenge 2021",
    url: "https://github.com/dylneed/ShopifyTechnicalChallenge2021",
  },
  {
    name: "Rhythmic Memory Game",
    url: "https://github.com/dylneed/RhythmicMemory",
  },
  {
    name: "Github Pages Main Site",
    url: "https://github.com/dylneed/dylneed.github.io",
  },
]

const links = (list) => {
  return (
    <Grid container xs={12} spacing={2}>
      {list.map((link) => (
        <Grid item xs={12}>
          <Typography variant="p">
            <Link href={link.url}>
              {link.name}
            </Link>
          </Typography>
        </Grid>
      ))}
    </Grid>
  )
}

const tabNames = ["Web Pages", "Repos"]
const tabs = [links(webPages), links(repos)]

function App() {
  const [currentTab, setCurrentTab] = useState(0)

  return (
    <Container maxWidth="xl">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Dylneed GitHub Home Page
        </Typography>
        <Tabs value={currentTab} onChange={(event, newTab) => setCurrentTab(newTab)} textColor="secondary" indicatorColor="secondary">
          {tabNames.map((tab) => <Tab label={tab}/>)}
        </Tabs>
        <Divider />
        <Box sx={{ my: 3 }}>
          {tabs.map((tab, index) => currentTab == index && tab)}
        </Box>
      </Box>
    </Container>
  );
}

export default App;
