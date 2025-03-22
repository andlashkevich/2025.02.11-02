# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Области хранения данных:

1. База данных на json-server,
2. BFF(Backend for Frontend),
3. Редакс стор

Сущности приложения:

1. Пользователь: БД (список пользователей), BFF (сессия текущего), стор(отображение в браузере),
2. Роль пользователя: БД(список ролей), BFF(сессия пользователя с ролью), стор(использование на клиенте),
3. Стать : БД(список статей), стор(отображение в браузере),
4. Комментарий: БД (список комментариев), стор(отображение в браузере)

Таблицы БД:

1. Пользователи - users: id / login / password / registed_at /role_id,
2. Роли - roles: id / name,
3. Статьи - posts: id / title / image_url / content / published_at,
4. Комментарии - id / author_id / post_id / content / published-at

Схема состояния на BFF:

1. Сессия текущего пользователя: login / password / roles

Схема для редакс стор (на клиенте):

1. user: id / login / roleId,
2. posts: массив post: id / title / imageUrl / publishedAt / commentsCount,
3. post: id / title / imageUrl / content / publishedAt / comments: массив comments: id / author / content / publishedAt,
4. users: массив user: id / login / registredAt / role
