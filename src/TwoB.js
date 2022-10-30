import _, { isEqual } from "lodash";
import React, { Component } from "react";

class TwoB extends React.Component {
  render() {
    const str = ["u", "ec"];

    const arr = [
      { storageVal: "u", table: ["E", "F"] },
      { storageVal: "data", id: 3 },
      { storageVal: "ec", table: ["E"] },
    ];

    const result = _.filter(arr, ({ storageVal }) =>
      _.includes(str, storageVal)
    );

    console.log(result);

    return <></>;
  }
}
export default TwoB;
