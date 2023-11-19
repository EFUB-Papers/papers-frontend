import React from 'react';
import { S } from './style';
import { ReactComponent as LightHeartIcon } from 'asset/scrapCard/lightHeart.svg';
import { ReactComponent as DarkHeartIcon } from 'asset/scrapCard/darkHeart.svg';
import { useRecoilValue } from 'recoil';
import { modeState } from 'atom/mode';
import { useNavigate } from 'react-router-dom';

export type ScrapCardProps = {
  width: number;
  scrapId: number;
  link: string;
  linkTitle: string;
  imgUrl: string;
  title: string;
  content: string;
  heartCnt: number;
  author: string;
};

const ScrapCard = (props: ScrapCardProps) => {
  const mode = useRecoilValue(modeState);
  const navigate = useNavigate();

  return (
    <S.Wrapper
      onClick={() => navigate(`/detail/${props.scrapId}`)}
      $width={props.width}
    >
      <S.LinkBox to={props.link} target="_blank">
        <S.LinkTitle>{props.linkTitle}</S.LinkTitle>
      </S.LinkBox>
      <S.ScrapBox>
        <S.ImageBox>
          <S.Img src={props.imgUrl} />
        </S.ImageBox>
        <S.Title>{props.title}</S.Title>
        <S.Content>{props.content}</S.Content>
        <S.Footer>
          {mode === 'light' ? <LightHeartIcon /> : <DarkHeartIcon />}
          <S.HeartCnt>{props.heartCnt}</S.HeartCnt>
          <S.Author>{`by ${props.author}`}</S.Author>
        </S.Footer>
      </S.ScrapBox>
    </S.Wrapper>
  );
};

export default ScrapCard;
