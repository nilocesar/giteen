import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

function Video({ title, src }) {
  return (
    <S.Wrapper>
      <S.Video
        src={src}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </S.Wrapper>
  );
}

Video.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default Video;
