import { NavLink, Outlet } from 'react-router-dom';

const activestyle = ({ isActive }) => {
  return {
    color: isActive ? 'green' : '',
    fontSize: isActive ? '20px' : '',
  };
};

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to='/' style={activestyle}>
              Home
            </NavLink>
          </li>
          {/* a 요소는 전체를 랜더링하므로 link 혹은 NavLink를 사용한다. */}
          {/* style은 NavLink만 먹는다. */}
          <li>
            {/* <a href='/about'>About</a> */}
            <NavLink to='/about?name=홍길동&loc=서울' style={activestyle}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to='/dashboard' style={activestyle}>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to='/product' style={activestyle}>
              Product
            </NavLink>
          </li>
          <li>
            <NavLink to='/nothing-here' style={activestyle}>
              Nothing here
            </NavLink>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

export default Layout;
