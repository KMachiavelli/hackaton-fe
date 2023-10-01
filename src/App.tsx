import { BrowserRouter as Router } from 'react-router-dom';
import { Routing } from './routing/Routing';
import { Layout } from './components/shared/Layout/Layout';
import { AppContextProvider } from './contexts/AppContext/AppContext';
import { AppThemeProvider } from './theme/AppThemeProvider';
import { AnimalServiceProvider } from './services/AnimalService/AnimalServiceContext';
import { UserServiceProvider } from './services/UserService/UserService';
import { UserContextProvider } from './contexts/UserContext/UserContext';

function App() {
  return (
    <AppContextProvider>
      <AppThemeProvider>
        <UserContextProvider>
          <UserServiceProvider>
            <AnimalServiceProvider>
              <Router>
                <Layout>
                  <Routing />
                </Layout>
              </Router>
              {/* DODAC LINK DO GOOGLE MAPS DO NAWIGACJI DO PUNKTU DOCELOWEGO */}
            </AnimalServiceProvider>
          </UserServiceProvider>
        </UserContextProvider>
      </AppThemeProvider>
    </AppContextProvider>
  );
}

export default App;
