import DataList from './components/DataList';
import Preloader from './components/Preloader';
import './App.css';


function App() {
  return (
    <div style={{display:'flex', maxWidth:'1170px', minWidth:'950px', margin:'0 auto', border:'1px solid black'}}>
      <Preloader />
      <DataList />
    </div>
  );
}

export default App;
