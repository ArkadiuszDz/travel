import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import * as Styled from './styles';
import CookieBanner from '../CookieBanner';

interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => (
  <Styled.Container>
    <Header/>
    {children}
    <Footer />
    <CookieBanner />
  </Styled.Container>
);

export default Layout;