import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Main />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;