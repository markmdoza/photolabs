import TopicListItem from "./TopicListItem";
import React from "react";

import "../styles/TopicList.scss";

const TopicList = (props) => {
  return (
    <div className="top-nav-bar__topic-list">
      {props.topics.map((topic) => (
        <TopicListItem
          className="top-nav-bar__topic-list"
          key={topic.id}
          id={topic.id}
          label={topic.title}
          handleClick={props.handleClick}
        />
      ))}
    </div>
  );
};

export default TopicList;
