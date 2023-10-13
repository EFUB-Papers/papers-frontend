import { boxShadow, omitText } from 'style/common';
import { styled } from 'styled-components';
import { flexCenter } from './../../../style/common';

const Wrapper = styled.div<{ $width: number }>`
  width: ${({ $width }) => $width + 'px'};
  aspect-ratio: 1 / 1.15;
  ${flexCenter}
  flex-direction: column;
  ${boxShadow}
  &:hover {
    cursor: pointer;
  }
  border-radius: 15px;
  padding: 15px;
  overflow: hidden;
`;

const Nickname = styled.div`
  width: 100%;
  font-size: 18px;
  margin: 12px 0px;
  text-align: center;
  ${omitText}
`;

const Introduction = styled.div`
  width: 100%;
  aspect-ratio: 8 / 2;
  font-size: 14px;
  text-align: center;
  margin-bottom: 14px;
  /* 3줄 말줄임표 */
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  color: ${({ theme }) => theme.COLOR.darkGrey};
`;

export const S = {
  Wrapper,
  Nickname,
  Introduction
};