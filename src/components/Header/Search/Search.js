import React, { Component } from "react";

import "./Search.css";

import SearchIcon from "react-icons/lib/md/search";

//////////////////////////////////////////////////////// THIS COMPONENT IS BEING RENDERED IN THE *HEADER* COMPONENT

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      fText: ""
    };
  }
  render() {
    return (
      <section className="Search__parent">
        <div className="Search__content">
          <input
            placeholder="Search Your Feed"
            text={this.state.fText}
            onChange={e => {
              this.setState({ fText: e.target.value });
            }}
          />

          <SearchIcon
            id="Search__icon"
            onClick={() => {
              this.props.searchPostFn(this.state.fText);
              this.setState({ fText: "" });
            }}
          />
        </div>
      </section>
    );
  }
}
