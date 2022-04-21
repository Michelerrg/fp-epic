import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Post from './components/post/Post';
import { Route, Routes } from 'react-router-dom';
import NotFound from './components/not-found/NotFound';
import Page from './components/page/Page';

function App() {
  return (
    <div className="App">
    <Header/>
      <Routes>
        <Route path='/' element={<Post />}/>
        <Route path=':pageSlug' element={<Page />}/>
        <Route path='/categories/:categoryId/posts' element={<Post />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    <Footer/>
    </div>
  );
}

export default App;
