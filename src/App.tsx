import { Routes, Route } from 'react-router-dom';
import Memotest from './Memotest';
import Pokemon from './Pokemon';
import WordsPerMinute from './WordsPerMinute';
const App = () => {
  return (
    <Routes>
      <Route path="/memotest" element={<Memotest />}></Route>
      <Route path="/wpm" element={<WordsPerMinute />}></Route>
      <Route path="/pokemon" element={<Pokemon />}></Route>
    </Routes>
  );
};

export default App;
