import React, { Component } from "react";

class Filter extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-0">
          <div className="">Filter (9)</div>
        </div>
        <div className="col-2">
          <div className="filter">No: Pemesanan : 1110000</div>
        </div>

        <div className="col-2">
          <div className="filter">Asal: Singapure</div>
        </div>
        <div className="col-2">
          <div className="filter">Tujuan: Indonesia</div>
        </div>
        <div className="col-2">
          <div className="filter">ETA: 28 November 2010</div>
        </div>
        <div className="col-2">
          <div className="filter">Status: provider</div>
        </div>
      </div>
    );
  }
}
export default Filter;
