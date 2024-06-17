import { Outlet } from 'react-router';

import Header from './Header/Header.tsx';
import Main from './Main/Main.tsx';

const Layout = () => {
  return (
    <div className="container-primary">
      <Header />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
};

export default Layout;
