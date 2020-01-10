import React from "react";
import { connect } from "react-redux";
import { Todo, fetchTodos } from "./actions";
import { StoreState } from "./reducers";

import Header from "../src/components/Header/Header.component";
import Map from "../src/components/Map/Map.component";

interface Props {
  todos: Todo[];
  fetchTodos(): any;
}

const _App: React.FC<Props> = props => {
  const onButtonClick = () => {
    props.fetchTodos();
  };

  const renderList = (): JSX.Element[] => {
    return props.todos.map(todo => {
      return <div key={todo.id}>{todo.title}</div>;
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

export default connect(mapStateToProps, { fetchTodos })(_App);
