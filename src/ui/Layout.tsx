import { Outlet } from 'react-router';

import Header from './Header.tsx';
import Main from './Main.tsx';

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
