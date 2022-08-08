import React, { useEffect, useState } from 'react';
import getCookie from '../../utils/getCookie';
import setCookie from '../../utils/setCookie';
import * as Styled from './styles';

const CookieBanner: React.FC = () => {

  const [showCookieBanner, setShowCookieBanner] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const cookie = getCookie('cookie_agreement');
    if (!cookie) {
      setShowCookieBanner(true);
    }
  }, []);

  useEffect(() => {
    const cookie = getCookie('cookie_agreement');
    if (cookie) {
      setShowCookieBanner(false);
    } 
  }, [clicked]);

  const clickHandler = () => {
    setCookie('cookie_agreement', 'agree', 90);
    setClicked(true);
  }

  const Component = showCookieBanner ? (
    <Styled.CookieBanner data-cy="cookie-banner">
      <p>This page uses cookies</p>
      <button onClick={clickHandler} id="cookie-btn">OK</button>
    </Styled.CookieBanner>
  ) : null;

  return Component;
};

export default CookieBanner;