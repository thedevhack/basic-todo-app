import Home from './components/Home'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import {RecoilRoot} from 'recoil'


const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
  palette: {
    background: {
      default: '#f7f8fa', // This sets the global background color
    },
  },
});

function App() {
  

  return (
    <RecoilRoot>
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <>
      <Home/>
    </>
    </ThemeProvider>
    </RecoilRoot>
  )
}

export default App
