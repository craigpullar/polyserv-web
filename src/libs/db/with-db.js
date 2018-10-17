import React, { Component } from "react";
import { DatabaseProvider } from ".";

export default WrappedComponent => {
  class ComponentWithDB extends Component {
    static WrappedComponent = WrappedComponent;

    render() {
      return (
        <DatabaseProvider.Consumer>
          {database => {
            console.log("database", database);
            return <WrappedComponent {...this.props} database={database} />;
          }}
        </DatabaseProvider.Consumer>
      );
    }
  }

  return ComponentWithDB;
};
