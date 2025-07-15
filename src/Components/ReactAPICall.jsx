import React, { useState, useEffect } from "react";

function ReactAPICall() {
  const [data, setData] = useState([]);
  const [textinput, setTextinput] = useState("");
  const CallApi = () => {
    const API_Path = "https://dummyjson.com/quotes";

    fetch(API_Path)
      .then((jsoninfo) => {
        return jsoninfo.json();
      })
      .then((data) => setData(data.quotes))
      .catch((e) => {
        console.error("Error is", e);
      });
  };

  const uniqueName = data.map((info) => {
    return info.author;
  });

  const uniqSet = [...new Set(uniqueName)];

  const filterName = uniqSet.filter((name) => {
    return name.toLowerCase().includes(textinput.toLowerCase());
  });

  useEffect(() => {
    CallApi();
  }, []);

  return (
    <div>
      <h1>Api Call</h1>
      <input
        type="text"
        placeholder="Search Name"
        value={textinput}
        onChange={(e) => setTextinput(e.target.value)}
      />
      {filterName.map((info) => {
        return <li>{info}</li>;
      })}
    </div>
  );
}

export default ReactAPICall;
