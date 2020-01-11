import React from "react";
import { connect } from "react-redux";
import { Todo, fetchTodos, deleteTodo, DeleteTodoAction } from "./actions";
import { StoreState } from "./reducers";

import Header from "../src/components/Header/Header.component";
import Map from "../src/components/Map/Map.component";

interface Props {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo(id: number): DeleteTodoAction;
}

const _App: React.FC<Props> = props => {
  const onButtonClick = () => {
    props.fetchTodos();
  };

  const onTodoClick = (id: number): void => {
    props.deleteTodo(id);
  };

  const renderList = (): JSX.Element[] => {
    return props.todos.map(todo => {
      return (
        <div onClick={() => onTodoClick(todo.id)} key={todo.id}>
          {todo.title}
        </div>
      );
    });
  };

  return (
    <div className="App">
      <Header />
      <Map />
      <div>
        <button onClick={onButtonClick}>Fetch</button>
        {renderList()}
      </div>
    </div>
  );
};

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

export default connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);
