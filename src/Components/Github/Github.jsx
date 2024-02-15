import React, { useEffect, useState } from "react";

function Github() {
  const [followers, setFollowers] = useState("");

  useEffect(() => {
    fetch("https://api.github.com/users/Devmax-0")
      .then((response) => response.json())
      .then((data) => {
        setFollowers(data);
      });
  }, []);

  return (
    <div className="bg-slate-500 text-center p-5 text-[2vw]">
      <h2>Github Followers: {followers.followers}</h2>
      <img src={followers.avatar_url} alt="github profile img" width={300} />
    </div>
  );
}

export default Github;
