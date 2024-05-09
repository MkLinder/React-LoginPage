import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Account from './pages/Account';
import { ChakraProvider } from '@chakra-ui/react';
import { Layout } from './components/layout';


function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Layout>
          <Routes>
            <Route path='/' element={
              <Home />
            } />

            <Route path='/conta' element={
              <Account />
            }
            />
          </Routes>
        </Layout>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
