import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CreateTask = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addTask: Task;
  deleteTask: Array<Task>;
  updateTask: Task;
};


export type MutationAddTaskArgs = {
  task: CreateTask;
};


export type MutationDeleteTaskArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdateTaskArgs = {
  task: UpdateTask;
};

export type Query = {
  __typename?: 'Query';
  task: Task;
  tasks: Array<Task>;
};


export type QueryTaskArgs = {
  id: Scalars['Int']['input'];
};

export type Task = {
  __typename?: 'Task';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type UpdateTask = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Float']['input'];
  name: Scalars['String']['input'];
};

export type AddTaskMutationVariables = Exact<{
  task: CreateTask;
}>;


export type AddTaskMutation = { __typename?: 'Mutation', addTask: { __typename?: 'Task', id: number } };

export type DeleteTaskMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteTaskMutation = { __typename?: 'Mutation', deleteTask: Array<{ __typename?: 'Task', id: number }> };

export type UpdateTaskMutationVariables = Exact<{
  task: UpdateTask;
}>;


export type UpdateTaskMutation = { __typename?: 'Mutation', updateTask: { __typename?: 'Task', id: number } };

export type TasksQueryVariables = Exact<{ [key: string]: never; }>;


export type TasksQuery = { __typename?: 'Query', tasks: Array<{ __typename?: 'Task', id: number, name: string, description?: string | null }> };

export type TaskQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type TaskQuery = { __typename?: 'Query', task: { __typename?: 'Task', id: number, name: string, description?: string | null } };


export const AddTaskDocument = gql`
    mutation addTask($task: CreateTask!) {
  addTask(task: $task) {
    id
  }
}
    `;
export type AddTaskMutationFn = Apollo.MutationFunction<AddTaskMutation, AddTaskMutationVariables>;

/**
 * __useAddTaskMutation__
 *
 * To run a mutation, you first call `useAddTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addTaskMutation, { data, loading, error }] = useAddTaskMutation({
 *   variables: {
 *      task: // value for 'task'
 *   },
 * });
 */
export function useAddTaskMutation(baseOptions?: Apollo.MutationHookOptions<AddTaskMutation, AddTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddTaskMutation, AddTaskMutationVariables>(AddTaskDocument, options);
      }
export type AddTaskMutationHookResult = ReturnType<typeof useAddTaskMutation>;
export type AddTaskMutationResult = Apollo.MutationResult<AddTaskMutation>;
export type AddTaskMutationOptions = Apollo.BaseMutationOptions<AddTaskMutation, AddTaskMutationVariables>;
export const DeleteTaskDocument = gql`
    mutation deleteTask($id: Int!) {
  deleteTask(id: $id) {
    id
  }
}
    `;
export type DeleteTaskMutationFn = Apollo.MutationFunction<DeleteTaskMutation, DeleteTaskMutationVariables>;

/**
 * __useDeleteTaskMutation__
 *
 * To run a mutation, you first call `useDeleteTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTaskMutation, { data, loading, error }] = useDeleteTaskMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTaskMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTaskMutation, DeleteTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTaskMutation, DeleteTaskMutationVariables>(DeleteTaskDocument, options);
      }
export type DeleteTaskMutationHookResult = ReturnType<typeof useDeleteTaskMutation>;
export type DeleteTaskMutationResult = Apollo.MutationResult<DeleteTaskMutation>;
export type DeleteTaskMutationOptions = Apollo.BaseMutationOptions<DeleteTaskMutation, DeleteTaskMutationVariables>;
export const UpdateTaskDocument = gql`
    mutation updateTask($task: UpdateTask!) {
  updateTask(task: $task) {
    id
  }
}
    `;
export type UpdateTaskMutationFn = Apollo.MutationFunction<UpdateTaskMutation, UpdateTaskMutationVariables>;

/**
 * __useUpdateTaskMutation__
 *
 * To run a mutation, you first call `useUpdateTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTaskMutation, { data, loading, error }] = useUpdateTaskMutation({
 *   variables: {
 *      task: // value for 'task'
 *   },
 * });
 */
export function useUpdateTaskMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTaskMutation, UpdateTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTaskMutation, UpdateTaskMutationVariables>(UpdateTaskDocument, options);
      }
export type UpdateTaskMutationHookResult = ReturnType<typeof useUpdateTaskMutation>;
export type UpdateTaskMutationResult = Apollo.MutationResult<UpdateTaskMutation>;
export type UpdateTaskMutationOptions = Apollo.BaseMutationOptions<UpdateTaskMutation, UpdateTaskMutationVariables>;
export const TasksDocument = gql`
    query tasks {
  tasks {
    id
    name
    description
  }
}
    `;

/**
 * __useTasksQuery__
 *
 * To run a query within a React component, call `useTasksQuery` and pass it any options that fit your needs.
 * When your component renders, `useTasksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTasksQuery({
 *   variables: {
 *   },
 * });
 */
export function useTasksQuery(baseOptions?: Apollo.QueryHookOptions<TasksQuery, TasksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TasksQuery, TasksQueryVariables>(TasksDocument, options);
      }
export function useTasksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TasksQuery, TasksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TasksQuery, TasksQueryVariables>(TasksDocument, options);
        }
export function useTasksSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<TasksQuery, TasksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<TasksQuery, TasksQueryVariables>(TasksDocument, options);
        }
export type TasksQueryHookResult = ReturnType<typeof useTasksQuery>;
export type TasksLazyQueryHookResult = ReturnType<typeof useTasksLazyQuery>;
export type TasksSuspenseQueryHookResult = ReturnType<typeof useTasksSuspenseQuery>;
export type TasksQueryResult = Apollo.QueryResult<TasksQuery, TasksQueryVariables>;
export const TaskDocument = gql`
    query task($id: Int!) {
  task(id: $id) {
    id
    name
    description
  }
}
    `;

/**
 * __useTaskQuery__
 *
 * To run a query within a React component, call `useTaskQuery` and pass it any options that fit your needs.
 * When your component renders, `useTaskQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTaskQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useTaskQuery(baseOptions: Apollo.QueryHookOptions<TaskQuery, TaskQueryVariables> & ({ variables: TaskQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TaskQuery, TaskQueryVariables>(TaskDocument, options);
      }
export function useTaskLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TaskQuery, TaskQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TaskQuery, TaskQueryVariables>(TaskDocument, options);
        }
export function useTaskSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<TaskQuery, TaskQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<TaskQuery, TaskQueryVariables>(TaskDocument, options);
        }
export type TaskQueryHookResult = ReturnType<typeof useTaskQuery>;
export type TaskLazyQueryHookResult = ReturnType<typeof useTaskLazyQuery>;
export type TaskSuspenseQueryHookResult = ReturnType<typeof useTaskSuspenseQuery>;
export type TaskQueryResult = Apollo.QueryResult<TaskQuery, TaskQueryVariables>;