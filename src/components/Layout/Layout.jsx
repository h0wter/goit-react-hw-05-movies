import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Header, NavList, NavItem } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header>
        <nav>
          <NavList>
            <NavItem>
              <NavLink to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/movies">Movies</NavLink>
            </NavItem>
          </NavList>
        </nav>
      </Header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
