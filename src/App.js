import {HashRouter, Route, Routes } from 'react-router-dom';
import { Menu } from './Menu';
import { HomePage } from './HomePage';
import { BlogPage } from './BlogPage';
import { ProfilePage } from './ProfilePage';
import { BlogPost } from './BlogPost';


// /#/ -> Home
// /#/blog 
// /#/profile 
// /#/lalalala -> Not Found
// /blog, /lalalala -> Home (sin el #, interpreta que es el Home)

function App() {
  return (
    <>
    <HashRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/blog/:slug' element={<BlogPost />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='*' element={<p>Not found</p>} />
      </Routes>
    </HashRouter>
    </>
  );
}

export default App;
