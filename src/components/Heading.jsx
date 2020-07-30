import React from "react";

function Heading() {
  const date = new Date();
  const currenttime = date.getHours();
  let greeting;

  const custom = {
    color: ""
  };
  if (currenttime < 12) {
    greeting = "Good Morning";
    custom.color = "red";
  } else if (currenttime < 18) {
    greeting = "GoodAfternoon";
    custom.color = "green";
  } else {
    greeting = "Good Night";
    custom.color = "blue";
  }

  return (
    <h1 className="heading" style={custom}>
      {greeting}
    </h1>
  );
}
export default Heading;
