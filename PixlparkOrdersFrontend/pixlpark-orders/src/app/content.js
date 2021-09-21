import './content.css';
import Sidebar from './content/sidebar'
import Results from './content/results'
import React from 'react';

export const QueryFilterContext = React.createContext({
  changeQuery: () => {},
});

class Content extends React.Component {
  constructor(props) {
    super(props);

    this.changeQuery = (queryParams) => {
      this.setState({query: queryParams, isQueryChanged: !this.state.isQueryChanged})
    }
    
    this.state = {query: "", changeQuery: this.changeQuery, isQueryChanged: false};
  }

  render() {
    return (
      <div className="content">
        <QueryFilterContext.Provider value={this.state}>
          <Sidebar></Sidebar>
          <Results queryParams={this.state.query} isQueryChanged={this.state.isQueryChanged}></Results>
        </QueryFilterContext.Provider>
      </div>
  );
  }
}

export default Content;