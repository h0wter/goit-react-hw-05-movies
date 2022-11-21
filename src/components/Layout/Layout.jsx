import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, NavList, NavItem, Link } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header>
        <nav>
          <NavList>
            <NavItem>
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/movies">Movies</Link>
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
