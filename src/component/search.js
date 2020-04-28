import React, { Component } from "react";
import Option from "./option";
import Button from "./button";
import Input from "./input";
class Filter extends Component {
  render() {
    return (
      <div className="Container-2 ">
        <div className="row">
          <div className="col-3">
            <Input label="Nomor Pemesanan" />
            <div className="row">
              <div className="col-5">
                <Option label="Status">
                  <option value="status1">Status1</option>
                  <option value="status2">Status2</option>
                  <option value="status3">Status3</option>
                </Option>
              </div>
              <div className="col-5">
                <Option label="type" value="">
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </Option>
              </div>
            </div>
          </div>
          <div className="col-3">
            <Input label="Asal" />
            <div className="row">
              <div className="col-5">
                <Option label="Status">
                  <option value=""></option>
                </Option>
              </div>
              <div className="col-5">
                <Option label="Item">
                  <option value=""></option>
                </Option>
              </div>
            </div>
          </div>
          <div className="col-3">
            <Input label="Tujuan" />
            <div className="row">
              <div className="col-10">
                <Option label="Status">
                  <option value=""></option>
                </Option>
              </div>
            </div>
          </div>
          <div className="col-3">
            <Option label="Status">
              <option value=""></option>
            </Option>
            <div className="row">
              <div className="col-5">
                <Button variant="process" label="Filter" />
              </div>
              <div className="col-5">
                <Button variant="cancel" label="Cancel" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Filter;
