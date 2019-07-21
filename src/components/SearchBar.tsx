import * as React from "react";

import { useState } from "react";

interface Props {}

interface State {
  term: string;
}

interface Values {
  [key: string]: any;
}

class SearchBar extends React.Component<Props, State> {
  state: State = { term: "" };

  private onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    this.setState({ term: value });
  };

  private onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // TODO: Make sure we call
    // callback from the parent component
  };

  public render() {
    return (
      <div className="ui segment">
        <div className="search-bar ui loading search">
          <form onSubmit={this.onFormSubmit} className="ui form">
            <div className="field">
              <label>Airport Search</label>
              <input
                type="text"
                value={this.state.term}
                onChange={this.onInputChange}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
