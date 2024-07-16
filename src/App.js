import { Routes, Route, Outlet } from 'react-router-dom';

import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Authentication from './routes/authentication//authentication.component';



const Shop = () => {
  return (
    <h1>Shop here</h1>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home />}/>
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        {/* <Route path='contact' element={<Shop />} /> */}
      </Route>
    </Routes>
  )
}

export default App;
