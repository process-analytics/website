/**
 * Copyright 2021 Bonitasoft S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import React, { PropsWithChildren } from 'react';

import { Theme } from '@rebass/preset';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import CookieConsent, { Cookies } from 'react-cookie-consent';
import {
  CssBaseline,
  THEME_ID,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material';

import { theme } from '../theme';
import { theme as muiTheme } from '../../assets/theme';
import { loadIcons } from '../utils/icons';

import { Footer, Header } from '.';

import { FooterRoutes } from '../../content/FooterRoutes';

import 'tippy.js/dist/tippy.css';

loadIcons();

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  html { 
    scroll-behavior: smooth;
  }

  html * {
    -moz-osx-font-smoothing: grayscale;
  }
  
  header {
    width: 100%;
    display: block;
    font-family: "Altone",Arial,Helvetica,sans-serif;
    margin: 0;
    padding: 0;
    border: 0;
    min-height: 0px;
    position: relative;
    background-color: #f8f8f8;
    border-radius: 4px;
    &::before,
    &::after {
      display: table;
      content: ' ';
    }
  }

  body {
    box-sizing: border-box; 
    margin: 0;
    width: 100vw;
    overflow-x: hidden;
    font-family: ${props => (props.theme as Theme).fonts.body};
    font-size: 14px;
    background: ${props => (props.theme as Theme).colors.background};
    color: ${props => (props.theme as Theme).colors.text};
    line-height: 1.5;
  }

  h1 {
    font-size: 3rem;
    font-weight: bold;
    font-family: inherit;
    margin: 24px 0 24px 0;
    line-height: 1.1;
    color: inherit;
  }

  h2 {
    font-family: inherit;
    font-size: 32px;
    margin: 24px 0 24px 0;
    font-weight: bold;
    line-height: 1.1;
  }
  p {
    margin: 0 0 10px;
  }
  img {
    max-width: 100%;
    vertical-align: middle;
    border: 0;
  }

  a[href]{
    cursor: pointer;
  }
  a {
    text-decoration: none;
    background-color: transparent;
  }
`;

type Props = {
  footerRoutes: FooterRoutes;
};

export const Layout = ({
  footerRoutes,
  children,
}: PropsWithChildren<Props>): JSX.Element => (
  <main>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MuiThemeProvider theme={{ [THEME_ID]: muiTheme }}>
        <CssBaseline>
          <Header />
          {children}
          <Footer content={footerRoutes} />
          {process.env.GATSBY_GA_MEASUREMENT_ID && (
            <CookieConsent
              location="bottom"
              cookieName={`ga-disable-${process.env.GATSBY_GA_MEASUREMENT_ID}`}
              enableDeclineButton={true}
              flipButtons={true}
              style={{
                background: '#000000',
              }}
              contentStyle={{
                color: '#FFFFFF',
              }}
              cookieValue={false}
              buttonStyle={{
                background: '#90EE90',
                color: '#000000',
              }}
              declineCookieValue={true}
              declineButtonStyle={{
                background: '#fe6262',
                color: '#000000',
              }}
              onDecline={() => {
                gaOptout();

                // Clean the unnecessary cookies
                Cookies.remove('_ga', { path: '/' });
                Cookies.remove(
                  `_ga_${process.env.GATSBY_GA_MEASUREMENT_ID?.substr(2)}`,
                  { path: '/' },
                );
              }}
              overlay={true}
            >
              This website uses cookies to monitor the audience.
            </CookieConsent>
          )}
        </CssBaseline>
      </MuiThemeProvider>
    </ThemeProvider>
  </main>
);
