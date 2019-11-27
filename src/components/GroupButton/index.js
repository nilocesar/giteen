import React from 'react';
import PropTypes from 'prop-types';

import { Telegram as Icon } from '../../styles/icons';

import * as S from './styled';

function GroupButton({ url }) {
  return (
    <S.ButtonContainer>
      <S.ButtonHelp>
        <span className="strong">Fale com o Yoda...</span>
        {/* Acesse nosso GRUPO do WHATSAPP. Ele estará aberto das 18h às 21h para
        perguntas. */}
      </S.ButtonHelp>
      <S.ButtonWrapper href={url} target="blank" rel="noreferrer noopener">
        <S.ButtonIcon>
          <Icon />
        </S.ButtonIcon>
        <S.ButtonLabel>Telegram</S.ButtonLabel>
      </S.ButtonWrapper>
    </S.ButtonContainer>
  );
}

GroupButton.propTypes = {
  url: PropTypes.string.isRequired,
};

export default GroupButton;
