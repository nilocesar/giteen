import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

import GroupButton from '../GroupButton';
import Layout from '../Layout';
import LessonsBar from '../LessonsBar';
import Links from '../Links';
import Resume from '../Resume';
import TitleBar from '../TitleBar';
import Video from '../Video';

function Lesson({
  active,
  groupButton,
  lessons,
  loginButton,
  onlyActiveLessons,
  onSelectLesson,
}) {
  return (
    <Layout title="Aula 1">
      <TitleBar lesson={active.title} login={loginButton} />
      <LessonsBar
        lessons={lessons}
        onClick={onSelectLesson}
        onlyActive={onlyActiveLessons}
      />
      {active.step !== null ? (
        <>
          <S.VideoContainer>
            <Video
              src={active.video}
              title={`Aula 1 - ${active.title}`}
            />
            <Resume entries="Como você está se preparando para o futuro ? No mundo atual tudo evolui muito rápido. Esse vídeo tem como objetivo de te mostrar quais as forças que impulsionam essas mudanças, e como vocẽ terá que se adaptar." />
          </S.VideoContainer>
          <S.BottomResume entries="Como você está se preparando para o futuro ? No mundo atual tudo evolui muito rápido. Esse vídeo tem como objetivo de te mostrar quais as forças que impulsionam essas mudanças, e como vocẽ terá que se adaptar." />

        <S.VideoContainer>
          <Video
            src={active.video}
            title={`Aula 1 - ${active.title}`}
          />
          <Resume entries="Nesse momento, iremos apresentar as principais habilidades que vocẽ precisa desenvolver ou aprimorar para entrar e se manter no mercado de trabalho." />
        </S.VideoContainer>
        <S.BottomResume entries="Nesse momento, iremos apresentar as principais habilidades que vocẽ precisa desenvolver ou aprimorar para entrar e se manter no mercado de trabalho." />

        <S.VideoContainer>
        <Video
          src={active.video}
          title={`Aula 1 - ${active.title}`}
        />
        <Resume entries="Agora que você conheceu as habilidades , vamos lhe apresentar a principal carreira que está no epicentro desta mudança, a de programador. Em esse video vamos conhecer um pouco mais de duas opções para embarcar nesse mercado, o programador frontend e o programador backend." />
        </S.VideoContainer>
        <S.BottomResume entries="Agora que você conheceu as habilidades , vamos lhe apresentar a principal carreira que está no epicentro desta mudança, a de programador. Em esse video vamos conhecer um pouco mais de duas opções para embarcar nesse mercado, o programador frontend e o programador backend." />

        <S.VideoContainer>
        <Video
          src={active.video}
          title={`Aula 1 - ${active.title}`}
        />
        <Resume entries="Continuando com a apresentação de carreiras na área de desenvolvimento, temos as carreiras de designer, cientista de dados e de inteligência artificial" />
        </S.VideoContainer>
        <S.BottomResume ries="Continuando com a apresentação de carreiras na área de desenvolvimento, temos as carreiras de designer, cientista de dados e de inteligência artificial" />

        <S.VideoContainer>
        <Video
          src={active.video}
          title={`Aula 1 - ${active.title}`}
        />
        <Resume entries="Gostou do que viu até agora, quer conhecer um pouco mais ? Nesse vídeo apresentamos a nossa ferramenta  um bot que irá de guiar em processo para descobrir em qual dessas carreiras você possui perfil. Uma vez que você tenha seu perfil, lhe indicaremos conteúdos para você conhecer um pouco mais essa carreira, e se se aprofundar mais." />
        </S.VideoContainer>
        <S.BottomResume entries="Gostou do que viu até agora, quer conhecer um pouco mais ? Nesse vídeo apresentamos a nossa ferramenta  um bot que irá de guiar em processo para descobrir em qual dessas carreiras você possui perfil. Uma vez que você tenha seu perfil, lhe indicaremos conteúdos para você conhecer um pouco mais essa carreira, e se se aprofundar mais." />

        </>

      ) : null}
    </Layout>
  );
}

const lessonType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  availableAt: PropTypes.string.isRequired,
});

Lesson.defaultProps = {
  groupButton: true,
  loginButton: true,
  onlyActiveLessons: false,
};
Lesson.propTypes = {
  active: lessonType.isRequired,
  groupButton: PropTypes.bool,
  lessons: PropTypes.arrayOf(lessonType).isRequired,
  loginButton: PropTypes.bool,
  onlyActiveLessons: PropTypes.bool,
  onSelectLesson: PropTypes.func.isRequired,
};

export default Lesson;
