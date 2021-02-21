import React from "react";
import RandomCat from "./RandomCat";

class CatList extends React.Component {
  render() {
    return (
      <section className="section-cats">
        <h1>All Cats Are Beautiful</h1>
        <ul className="section-cats_list">
            <RandomCat width='200' height='200' />
            <RandomCat width='200' height='400' />
            <RandomCat />
        </ul>
      </section>
    );
  }
}

export default CatList;