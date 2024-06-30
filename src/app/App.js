/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import VideoBackground from '../containers/VideoBackground';
import ThemeToggle from '../containers/ThemeToggle';
import AboutPage from '../containers/AboutPage/Loadable';
import WorkPage from '../containers/WorkPage/Loadable';
import DiaryPage from '../containers/DiaryPage/Loadable';
import NotFoundPage from '../containers/NotFoundPage/Loadable';
import LangToggle from '../containers/LangToggle';
import Loft from '../components/Loft';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Overlay from '../components/Overlay';

import useTranslations from '../services/i18n/useTranslations';
import GlobalStyle from '../global-styles';

const AppWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 90vh;
  background-color: ${({ theme }) => theme.colors.bgColor};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 14px;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  font-size: 15px;
  font-weight: 500;
`;

const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  overflow: hidden;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.bgColor};
  color: ${({ theme }) => theme.colors.primary};
  padding: 20px 40px;
  overflow: auto;
  
  @media screen and (max-width: 510px) {
    padding: 20px;
  }
`;

function App(props) {
  const { init, status: i18nStatus } = useTranslations();
  
  useEffect(() => {init();}, []);
  
  return (
    <Fragment>
      <Helmet titleTemplate="%s — LINUXMACHINE" defaultTitle="LINUXMACHINE">
        <meta
          name="description"
          content="Diaries of a self-taught designer and developer."
        />
      </Helmet>
      <VideoBackground loopBg={props.loopBg} />
      <ThemeToggle />
      <AppWrapper>
        <Loft />
        <Wrapper>
          <Sidebar />
          <Container>
            <Header />
            <ContentWrapper>
              <Routes>
                <Route path="/" element={<DiaryPage />} />
                <Route exact path="/about" element={<AboutPage />} />
                <Route path="/work" element={<WorkPage />} />
                <Route path="/diary" element={<DiaryPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </ContentWrapper>
            <LangToggle />
          </Container>
        </Wrapper>
        <Overlay active={props.overlay} />
        <GlobalStyle />
      </AppWrapper>
    </Fragment>
  );
}

App.propTypes = {
  overlay: PropTypes.bool,
  loopBg: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  overlay: state.postListItem.overlay,
  loopBg: state.videoBackground.loopBg,
});

export default connect(mapStateToProps)(App);
