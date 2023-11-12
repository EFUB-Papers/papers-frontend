//스크랩 삭제하는 mutation
import { useMutation } from '@tanstack/react-query';
import { deleteScrap, DeleteScrapType } from '../../apis/scraps';
import { AxiosResponseType } from '../../constants/Api';
import { AxiosError } from 'axios';

//스크랩 삭제하는 mutation
export const deleteScrapMutation = () => {
  const { mutate: deleteScrapAction } = useMutation<
    AxiosResponseType,
    AxiosError,
    DeleteScrapType
  >({
    mutationFn: (scrapInfo) => deleteScrap(scrapInfo)
  });
  return { deleteScrapAction };
};
//스크랩 타입 나오면
//스크랩 조회 api
