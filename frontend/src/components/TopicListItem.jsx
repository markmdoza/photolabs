import React from "react";
import "../styles/TopicListItem.scss";
import axios from "axios";

const TopicListItem = ({ label, handleClick, id }) => {
  return (
    <div className="topic-list__item">
      <span className="topic-list__item" onClick={() => handleClick(id)}>
        {label}
      </span>
    </div>
  );
};

export default TopicListItem;
