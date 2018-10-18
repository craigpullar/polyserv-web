import React, { Component } from "react";
import DatabaseProvider from "./database-provider";

export default WrappedComponent => {
  class ComponentWithDatabase extends Component {
    static WrappedComponent = WrappedComponent;

    render() {
      return (
        <DatabaseProvider.Consumer>
          {database => <WrappedComponent {...this.props} database={database} />}
        </DatabaseProvider.Consumer>
      );
    }
  }

  return ComponentWithDatabase;
};
