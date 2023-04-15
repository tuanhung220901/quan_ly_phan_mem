import logo from './logo.svg';
import { Routes, Route, Switch, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import ListProduct from './pages/ListProduct';
import DetailProduct from './pages/DetailProduct';
import CreatPhieu from './pages/CreatPhieu';
import Admin from './pages/Admin';
import Statistical from './pages/Statistical';
import './App.css';

function App() {
  return (
    <div >
      {/* <ul>
      <li>
        <Link to="/">Trang chủ</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/register">Đăng ký</Link>
      </li>
      <li>
        <Link to="/product">Danh sách sản phẩm</Link>
      </li>
      <li>
        <Link to="/detail-product">Chi tiết sản phẩm</Link>
      </li>
      <li>
        <Link to="/creat-phieu">Tạo Phiếu</Link>
      </li>
    </ul> */}
      <Routes>
          <Route path='/' element = {<Login />}></Route>
          <Route path='/login' element = {<Login />}></Route>
          <Route path='/about' element = {<About />}></Route>
          <Route path='/register' element = {<Register />}></Route>
          <Route path='/product' element = {<ListProduct />}></Route>
          <Route path='/detail-product' element = {<DetailProduct />}></Route>
          <Route path='/creat-phieu' element = {<CreatPhieu />}></Route>
          <Route path='/admin' element = {<Admin />}></Route>
          <Route path='/admin/statistical' element = {<Statistical />}></Route>
      </Routes>
    </div>
  );
}

export default App;
