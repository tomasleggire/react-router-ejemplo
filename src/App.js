import {HashRouter, Route, Routes} from 'react-router-dom';
import { Menu } from './Menu';
import { AuthProvider ,AuthRoute, useAuth } from './auth';
import { HomePage } from './HomePage';
import { BlogPage } from './BlogPage';
import { ProfilePage } from './ProfilePage';
import { BlogPost } from './BlogPost';
import { LoginPage } from './LoginPage';
import { LogoutPage } from './LogoutPage';

// /#/ -> Home
// /#/blog 
// /#/profile 
// /#/lalalala -> Not Found
// /blog, /lalalala -> Home (sin el #, interpreta que es el Home)

function App() {
  return (
    <>
    <HashRouter>
      <AuthProvider>
        <Menu />
        <Routes>
          <Route path='/' element={<HomePage />} />

          <Route path='/blog' element={<BlogPage />}>
            <Route path=':slug' element={<BlogPost />} />
          </Route>

          <Route path='/login' element={<LoginPage />} />
          <Route 
            path='/logout'
            element={
              <AuthRoute>
                <LogoutPage />
              </AuthRoute>
            } 
          />
          <Route
            path='/profile'
            element={
              <AuthRoute>
                <ProfilePage />
              </AuthRoute>
            }
          />

          <Route path='*' element={<p>Not found</p>} />
        </Routes>
      </AuthProvider>
    </HashRouter>
    </>
  );
}

export default App;
