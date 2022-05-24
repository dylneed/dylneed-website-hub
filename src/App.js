import React, {useState} from 'react';
import {Box, Container, Divider, Tab, Tabs, Typography} from '@mui/material';
import Links from './Links.jsx'

const tabs = [
  {
    name: "Web Pages",
    body: <Links isWebsite={true}/>
  },
  {
    name: "Repos",
    body: <Links isWebsite={false} />
  }
]

function App() {
  const [currentTab, setCurrentTab] = useState(0)

  return (
    <Container maxWidth="xl">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Dylneed GitHub Home Page
        </Typography>
        <Tabs value={currentTab} onChange={(event, newTab) => setCurrentTab(newTab)} textColor="secondary" indicatorColor="secondary">
          {tabs.map((tab) => <Tab label={tab.name}/>)}
        </Tabs>
        <Divider />
        <Box sx={{ my: 3 }}>
          {tabs.map((tab, index) => currentTab === index && tab.body)}
        </Box>
      </Box>
    </Container>
  );
}

export default App;
