import { QueryClient, useMutation, useQuery } from '@tanstack/react-query';
import {
  deleteComment,
  deleteReply,
  getCommentList,
  getReplyList,
  NewCommentType,
  NewReplyType,
  postNewComment,
  postNewReply
} from 'apis/comment';
import { AxiosError, AxiosResponse } from 'axios';
import { AxiosResponseType } from 'constants/Api';

//댓글 작성 mutation
export const usePostNewCommentMutation = (scrapId: number) => {
  const queryClient = new QueryClient();
  const { mutate: postCommentAction } = useMutation<
    AxiosResponseType,
    AxiosError,
    NewCommentType
  >({
    mutationFn: (commentInfo: NewCommentType) => postNewComment(commentInfo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['commentList', scrapId] });
    }
  });
  return { postCommentAction };
};

//댓글 삭제
export const useDeleteCommentMutation = (scrapId: number) => {
  const queryClient = new QueryClient();
  const { mutate: deleteCommentAction } = useMutation<
    AxiosResponseType,
    AxiosError,
    number
  >({
    mutationFn: (commentId: number) => deleteComment(commentId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['commentList', scrapId] });
    }
  });
  return { deleteCommentAction };
};

//스크랩의 댓글 목록 조회 query
export const useGetCommentListQuery = (scrapId: number) => {
  const { data } = useQuery({
    queryKey: ['commentList', scrapId],
    queryFn: () => getCommentList(scrapId)
  });
  return data;
};

//대댓글 작성 mutation
export const usePostNewReplyMutation = (commentId: number) => {
  const queryClient = new QueryClient();
  const { mutate: postNewReplyAction } = useMutation({
    mutationFn: (replyInfo: NewReplyType) => postNewReply(replyInfo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['replyList', commentId] });
    }
  });
  return { postNewReplyAction };
};

//대댓글 삭제 mutation
export const useDeleteReplyMutation = (commentId: number) => {
  const queryClient = new QueryClient();
  const { mutate: deleteReplyAction } = useMutation({
    mutationFn: (replyId: number) => deleteReply(replyId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['replyList', commentId] });
    }
  });
  return { deleteReplyAction };
};

//댓글의 대댓글 목록 조회 query
export const useGetReplyListQuery = (commentId: number) => {
  const { data } = useQuery({
    queryKey: ['replyList', commentId],
    queryFn: () => getReplyList(commentId)
  });
  return data;
};
