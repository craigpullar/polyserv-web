import React, { Component } from "react";
import DatabaseProvider from "./database-provider";

export default WrappedComponent => {
  class ComponentWithDatabase extends Component {
    static WrappedComponent = WrappedComponent;

    passDatabaseToComponent = this.passDatabaseToComponent.bind(this);

    passDatabaseToComponent(database) {
      return <WrappedComponent {...this.props} database={database} />;
    }

    render() {
      return (
        <DatabaseProvider.Consumer>
          {this.passDatabaseToComponent}
        </DatabaseProvider.Consumer>
      );
    }
  }

  return ComponentWithDatabase;
};
