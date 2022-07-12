import React, { Component } from "react";
import Banner from "../Common/Banner";
import Item from "../Common/Item";
import Pagination from "../Common/Pagination";
import { items } from "../../data";

export class Home extends Component {
  render() {
    return (
      <div className="p-24">
        <Banner />
        <div className="mt-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap=x-8">
          {items.map((item: any) => (
            <Item item={item} key={item.id} />
          ))}
        </div>
        <div className="mt-4">
          <Pagination />
        </div>
      </div>
    );
  }
}

export default Home;
