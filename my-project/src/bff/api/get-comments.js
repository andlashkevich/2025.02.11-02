import { transformComment } from "../transformers";

const ALL_COMMENTS_URL = "http://localhost:3003/comments";
const POST_COMMENTS_URL = "http://localhost:3003/comments?post_id=";

export const getComments = (postId) => {
  const url =
    postId === undefined ? ALL_COMMENTS_URL : POST_COMMENTS_URL + postId;
    
  return fetch(`http://localhost:3003/comments?post_id=${postId}`)
    .then((loadedComments) => loadedComments.json())
    .then((loadedComments) => loadedComments.map(transformComment));
};
