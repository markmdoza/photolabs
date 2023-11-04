import React from "react";
import "../styles/TopicListItem.scss";

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
