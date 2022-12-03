import React, { useState, useEffect } from "react";

const UseEffect02 = () => {
  const [resourseType, setResourseType] = useState("posts");

  useEffect(() => {
    console.log("resource changed.");

    return () => {
      console.log("returned from resourse changed.");
    };
  }, [resourseType]);

  return (
    <>
      <div>
        <button onClick={() => setResourseType("posts")}>Posts</button>
        <button onClick={() => setResourseType("users")}>Users</button>
        <button onClick={() => setResourseType("comments")}>Comments</button>
      </div>
      <h1>{resourseType}</h1>
    </>
  );
};

export default UseEffect02;
