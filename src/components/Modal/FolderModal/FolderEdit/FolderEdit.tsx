import { MyFolderMock } from 'mock/userMock';
import EditOneFolder from './OneFolder';
import { S } from '../style';

const FolderEdit = () => {
  return (
    <S.ContentWrapper>
      <S.FlexBox>
        {MyFolderMock.map((folder) => {
          return (
            <EditOneFolder id={folder.folderId} title={folder.folderName} />
          );
        })}
      </S.FlexBox>
    </S.ContentWrapper>
  );
};
export default FolderEdit;
