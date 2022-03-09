import React from "react";

function Details(props) {
  const { result } = props;
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "flex-start",
        display: "flex",
        border: "4px solid gray",
        padding: "20px",
        minWidth: "300px",
        minHeight: "300px",
        margin: "20px",
      }}
    >
      <div
        style={{

          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          marginTop: "10px",
        }}
      >
        <img src={result.picture.thumbnail} alt="pic" style={{width: "100px",height: "100px",borderRadius:"50%"}}/>
        <div>{result.name.title + " " + result.name.first + " " + result.name.last}</div>
        <div>Phone No : {result.phone}</div>
        <div>Gender : {result.gender}</div>
        <div>Email : {result.email}</div>
      </div>
    </div>
  );
}

export default Details;
