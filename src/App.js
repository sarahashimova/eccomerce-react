import { Routes, Route} from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/Login/Login';
import Products from './pages/Products/Products';


function App() {
  return (
    <Layout>
      <Routes>
      <Route path='/' element={<Products/>}></Route>
      <Route path='/login' element={<Login/>}/>
     </Routes>
    </Layout>
     
  );
}

export default App;
