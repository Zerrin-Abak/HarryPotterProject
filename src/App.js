import MainPage from './components/MainPage';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import WrongPage from './components/WrongPage';
import Characters from './components/Characters';
import Books from './components/Books';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/characters' element={<Characters/>}/>
        <Route path='/books' element={<Books/>}/>
        <Route path='*' element={<WrongPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
