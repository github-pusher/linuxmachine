import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import Wrapper from './Wrapper';
import Heading from './Heading';
import Content from './Content';
import Card from './Card';
import Video from './Video';
import CardDescription from './CardDescription';
import CardText from './CardText';
import CardButtons from './CardButtons';
import A from './A';

import useTranslations from '../../services/i18n/useTranslations';

export default function WorkPage() {
  const { t } = useTranslations();
  const [timeOutId, setTimeOutId] = useState('');
  
  const handleMouseOver = (event) => {
    const timeout = setTimeout(() => {
      event.target.play();
    }, 600);
    setTimeOutId(timeout);
  }
  
  const handleMouseOut = (event) => {
    event.target.pause();
    clearTimeout(timeOutId);
  }
  
  return (
    <Wrapper>
      <Helmet>
        <title>{t.workTitle}</title>
        <meta
          name="description"
          content="Work page"
        />
      </Helmet>
      <Heading>
        {t.workHeader}
      </Heading>
      <Content>
        <Card>
          <Video
            src="https://res.cloudinary.com/linuxmachinecloud/video/upload/v1670583552/linuxmachine/video/ybclnsglotqsjjxrchow.mp4"
            preload="none"
            controls={true}
            loop={true}
            onMouseOver={(e) => {handleMouseOver(e)}}
            onMouseOut={(e) => {handleMouseOut(e)}}
          />
          <CardDescription>
            <span>{t.work2Title}</span>
            <CardText>
              {t.work2Description}
            </CardText>
          </CardDescription>
          <CardButtons>
            <A target="_blank" href="https://tetris-linuxmachine.vercel.app">{t.workButton}</A>
          </CardButtons>
        </Card>
        
        <Card>
          <Video
            src="https://res.cloudinary.com/linuxmachinecloud/video/upload/v1670583557/linuxmachine/video/argaxfakdqedca2xxhdr.mp4"
            preload="none"
            controls={true}
            loop={true}
            onMouseOver={(e) => {handleMouseOver(e)}}
            onMouseOut={(e) => {handleMouseOut(e)}}
          />
          <CardDescription>
            <span>{t.work1Title}</span>
            <CardText>
              {t.work1Description}
            </CardText>
          </CardDescription>
          <CardButtons>
            <A target="_blank" href="https://codepen.io/linuxmachine/full/QWrLgaR">{t.workButton}</A>
          </CardButtons>
        </Card>
      </Content>
    </Wrapper>
  );
}
