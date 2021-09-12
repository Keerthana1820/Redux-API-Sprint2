import * as React from "react";
import { ReduxFetch } from "react-redux-fetch";

const config = [
  {
    request: {
      headers: {},
      url: "https://api.thecatapi.com/v1/images/search"
    },
    resource: "cat"
  }
];

class Cat extends React.Component {
  handleFulfil(resource, data, dispatchFn) {
    console.log("fulfilled!", resource, data, dispatchFn);
  }

  render() {
    return (
      <ReduxFetch config={config} onFulfil={this.handleFulfil}>
        {({ catFetch, dispatchCatGet }) => {
          console.log("RENDER CAT");
          if (catFetch.pending) {
            return <div>Loading...</div>;
          }

          if (catFetch.fulfilled) {
            return (
              <div>
                <img src={catFetch.value.image} alt="error cat" />{" "}
              </div>
            );
          }

          if (catFetch.rejected) {
            return <div>Could not load cat</div>;
          }

          return <button onClick={dispatchCatGet}>Fetch Cat</button>;
        }}
      </ReduxFetch>
    );
  }
}

export default Cat;
