import { useMemo, useEffect, useState } from "react";
import { useServerRequest } from "../../hooks";
import { PostCard, Pagination, Search } from "./components";
import { debounce, getLastPageFromLinks } from "./utils";
import { PAGINATION_LIMIT } from "../../constants";
import styled from "styled-components";

const MainContainer = ({ className }) => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [searchPhrase, setSearchPhrase] = useState("");
  const [shouldSearch, setShouldSearch] = useState(false);
  const requestServer = useServerRequest();

  useEffect(() => {
    requestServer("fetchPosts", searchPhrase, page, PAGINATION_LIMIT).then(
      ({ res: { posts, links } }) => {
        setPosts(posts);
        setLastPage(getLastPageFromLinks(links));
      }
    );
  }, [requestServer, page, shouldSearch]);

  const startDelayedSearch = useMemo(() => debounce(setShouldSearch, 2000), []);

  const onSearch = ({ target }) => {
    setSearchPhrase(target.value);
    startDelayedSearch(!shouldSearch);
  };

  return (
    <div className={className}>
      <div className="posts-and-search">
        <Search searchPhrase={searchPhrase} onChange={onSearch} />
        {posts.length > 0 ? (
          <div className="post-list">
            {posts.map(
              ({ id, title, imageUrl, publishedAt, commentsCount }) => (
                <PostCard
                  key={id}
                  id={id}
                  title={title}
                  imageUrl={imageUrl}
                  publishedAt={publishedAt}
                  commentsCount={commentsCount}
                />
              )
            )}
          </div>
        ) : (
          <div className="no-posts-found">Статьи не найдены</div>
        )}
      </div>
      {lastPage > 1 && posts.length > 0 && (
        <Pagination page={page} lastPage={lastPage} setPage={setPage} />
      )}
    </div>
  );
};

export const Main = styled(MainContainer)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  & .post-list {
    display: flex;
    flex-wrap: wrap;
    padding: 20px 20px 80px;
  }

  ? .no-post-found {
    margin-top: 20px;
    font-size: 18px;
  }
`;
