import { Box, Container, AppBar, Grid } from '@mui/material';
import RandomCatList from './RandomCatList';
import RandomCatForm from './RandomCatForm';
import CatImageService from './service/CatImageService';
import Basic from './RandomCatForm';
import CatImage from './CatImage';
function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"> 
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 64 }}>
            <h1>My App</h1>
          </Box>
        </Container>
      </AppBar>
      <Container maxWidth="lg">
                <Grid item xs={12}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 50 }}>
              <Basic></Basic>
              </Box>
        </Grid>
      </Container>
    </Box>
  
  );
}

export default App;