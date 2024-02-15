import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userId } = useParams();

  return (
    <div className="bg-slate-500 text-center p-5 text-[2vw]">
      <h2>User: {userId}</h2>
    </div>
  );
}

export default User;
