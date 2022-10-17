import React from "react";
type PersonListProps = {
  names: {
    first: string;
    last: string;
  }[];
};
const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map((item) => {
        return (
          <div style={{ border: "1px solid black" }}>
            <p>{item.first}</p>
            <p>{item.last}</p>
          </div>
        );
      })}
    </div>
  );
};

export default PersonList;
