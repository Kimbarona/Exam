import './App.css';
import Layout from './Layout';
import { DataProvider } from './context/DataContext';

function App() {
  return (
    <div className="container">
      <DataProvider>
        <Layout/>
      </DataProvider>
    </div>
  );
}

export default App;
