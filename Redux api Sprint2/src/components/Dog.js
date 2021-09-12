import * as React from "react";
import ReduxFetch from "./ReduxFetch";

const config = [
  {
    request: {
      headers: {},
      url: "https://dog.ceo/api/breeds/image/random"
    },
    resource: "dog"
  }
];

const Cat = () => {
  return (
    <ReduxFetch config={config}>
      {({ dogFetch, dispatchDogGet }) => {
        if (dogFetch.pending) {
          return <div>Loading...</div>;
        }

        if (dogFetch.fulfilled) {
          return <img src={dogFetch.value.message} alt="error dog" />;
        }

        if (dogFetch.rejected) {
          return <div>Could not load dog</div>;
        }

        // Uncomment for fetch on initial render
        // dispatchDogGet();

        return <button onClick={dispatchDogGet}>Fetch Dog</button>;
      }}
    </ReduxFetch>
  );
};

export default Cat;
