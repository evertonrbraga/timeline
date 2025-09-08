import React from "react";
import * as S from "./styles";

export const TimeBlock = ({ name = "default" }) => {
  return (
    <S.Wrapper>
      <S.Title>{name}</S.Title>
    </S.Wrapper>
  );
};
