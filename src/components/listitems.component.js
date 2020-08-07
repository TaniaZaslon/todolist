import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../App.css";

const ListItems = function (props) {
  const items = props.items;
  const list = items.map((item) => {
    return (
      <div className="listItem mt-4" key={item.key}>
        <p>
          <input
            type="text"
            key={item.key}
            value={item.text}
            onChange={(e) => {
              props.setUpdate(e.target.value, item.key);
            }}
          />
          <span>
            <FontAwesomeIcon
              className="faicons"
              onClick={() => {
                props.deleteItem(item.key);
              }}
              icon="trash"
            />
          </span>
        </p>
      </div>
    );
  });
  return <div className="mx-auto">{list}</div>;
};

export default ListItems;
