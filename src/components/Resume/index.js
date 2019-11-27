import React from 'react';
import PropTypes from 'prop-types';

import { Telegram as Icon } from '../../styles/icons';

import * as S from './styled';

function Resume({ className, entries }) {
  return (
    <S.ResumeWrapper className={`resume ${className}`} title="">
      <S.ResumeContent>
        {entries}
      </S.ResumeContent>

      <S.ButtonHelp>
        <span className="strong" />
        {/* Acesse nosso GRUPO do WHATSAPP. Ele estará aberto das 18h às 21h para
        perguntas. */}
      </S.ButtonHelp>
      <S.ButtonWrapper href="https://web.telegram.org/#/im?p=@giteenbot" target="blank" rel="noreferrer noopener">
        <S.ButtonIcon>
          <Icon />
        </S.ButtonIcon>
        <S.ButtonLabel>Fale com o Yoda...</S.ButtonLabel>
      </S.ButtonWrapper>

    </S.ResumeWrapper>
  );
}

Resume.defaultProps = { className: '', entries: [] };

Resume.propTypes = {
  className: PropTypes.string,
  entries: PropTypes.arrayOf(PropTypes.string),
};

export default Resume;
