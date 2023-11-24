import { useRecoilState, useRecoilValue } from 'recoil';
import { Outlet, useParams } from 'react-router-dom';
import { useBodyScrollLock } from '../../hooks/useScrollLock';
import { useEffect } from 'react';
import { S } from './style';
import { folderModalAtom, userModalAtom } from '../../atom/modal';
import FolderModal from '../../components/Modal/FolderModal/FolderModal';
import { LocalStorage } from 'utils/localStorage';
import { useUserInfoQuery } from 'hooks/apis/member';
import UserModal from 'components/Modal/UserModal/UserModal';
import { useGetFolderListQuery } from '../../hooks/apis/folder';

const ModalLayout = () => {
  const folderModal = useRecoilValue(folderModalAtom);
  const userModal = useRecoilState(userModalAtom);

  const { lockScroll, openScroll } = useBodyScrollLock();
  const params = useParams();
  const urlNickname = params.nickname;
  const folderList = useGetFolderListQuery(urlNickname!)!;
  //모달이 꺼지고 켜질 때 뒤 배경 스크롤 중지
  useEffect(() => {
    if (folderModal.open) {
      lockScroll();
    } else {
      openScroll();
    }
  }, [folderModal.open]);

  const [userModalState, setUserModalState] = useRecoilState(userModalAtom);

  const nickname = LocalStorage.getNickname()!;
  const userInfo = useUserInfoQuery(nickname);

  return (
    <S.Wrapper isScrollAble={!folderModal.open}>
      <S.ModalWrapper>
        {userModalState && (
          <UserModal
            userName={userInfo?.nickname || ''}
            userDetail={userInfo?.introduce || ''}
            imgUrl={userInfo?.profileImgUrl || ''}
          />
        )}
        {folderModal.open && <FolderModal folderList={folderList} />}
      </S.ModalWrapper>
      <Outlet />
    </S.Wrapper>
  );
};

export default ModalLayout;
