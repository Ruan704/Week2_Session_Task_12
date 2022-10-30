import React, { Component, useState } from "react";

const Hooks = () => {
  const [arr, setArr] = useState(['90 ', '100 ', '130 ']);

  const [languageData, setLanguageData] = useState([
    {
      language: "Java ",
      id: 1,
      person: "Name: James Gosling ",
    },
    {
      language: "Python",
      id: 1,
      person: "  Name: Guido van Rossum",
    },
  ]);

  const handleUpdate = () => {
    // particular array element
    const updateArray = [
      ...languageData,
      { language: "C", id: 3, person: " Dennis Ritchie" },
    ];
    updateArray[0].person = "Dennis Ritchie";
    setLanguageData(updateArray);
  };

  const languageList = languageData.map((info) => info.person);
  return (
    <>
      <p>{arr.map((e) => e)}</p>
      <p>{languageList}</p>
      <button onClick={() => setArr([...arr, 29])}>Update Array</button>
      <button onClick={handleUpdate}>Update</button>
    </>
  );
};
export default Hooks;
