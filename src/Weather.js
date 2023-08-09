import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <input type="search" placeholder="Enter a city.." />
        <input type="submit" value="search" />
      </form>
      <div className="row">
        <div className="col-sm-6">
          <h1>Prague</h1>
        </div>
        <div className="col-sm-6"></div>
      </div>
    </div>
  );
}
