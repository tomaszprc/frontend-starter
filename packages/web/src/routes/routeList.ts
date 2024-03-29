import React, { ComponentType } from "react";

export interface RouteItem {
  path: string;
  Component: ComponentType<unknown>;
}

const MainPage = React.lazy(() => import("../components/MainPage"));
const Tasks = React.lazy(() => import("../components/Tasks/Tasks"));
const PostsPage = React.lazy(() => import("../components/Posts/Posts"));
const SingleTask = React.lazy(() => import("../components/Tasks/SingleTask"));
const SinglePost = React.lazy(() => import("../components/Posts/SinglePost"));

const Routes: RouteItem[] = [
  {
    path: "/",
    Component: MainPage,
  },
  {
    path: "/tasks",
    Component: Tasks,
  },
  {
    path: "/posts",
    Component: PostsPage,
  },
  {
    path: "/tasks/:id",
    Component: SingleTask,
  },
  {
    path: "/post/:id",
    Component: SinglePost,
  },
];

export default Routes;
