import './stylesCommon/_common.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import All from './components/All/All';
import FiltredTable from './components/FiltredTable/FiltredTable';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<All />} />
          <Route path="/searchResult" element={<FiltredTable />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
