import React, { useState, useEffect } from "react";
import axios from "axios";
import { issues, comment, pullRequests } from "../../assets";
const URL = "https://api.github.com/repos/facebook/react/issues";

const IssueCardBody = () => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    getIsuues();
  }, []);

  const getIsuues = async () => {
    axios
      .get(URL)
      .then((result) => {
        console.log("Github Issues Data", result.data);
        setIssues((prev) => [...prev, ...result.data]);
      })
      .catch((error) => {
        console.log("Error occur during fetching Github Issues", error);
      });
  };

  return (
    <div className="issue-card-body">
      {issues &&
        issues.map((item) => (
          <IssueItem
            key={item.id}
            title={item.title}
            url={item.url}
            number={item.number}
            state={item.state}
            updatedAt={item.created_at}
            user={item.user.login}
            comments={item.comments}
            commentsURL={item.comments_url}
            labels={item.labels}
            pullRequest={item.pull_request}
          />
        ))}
    </div>
  );
};

export default IssueCardBody;

const IssueItem = ({
  title,
  url,
  number,
  state,
  updatedAt,
  user,
  comments,
  commentsURL,
  labels,
  pullRequest
}) => {
  return (
    <div className="issueItem">
      <div className="me-2">
        <img src={issues} alt="issues" />
      </div>
      <div>
        <div>
          <a href={url} className="issueTitle">
            {title}
          </a>
          {labels &&
            labels.map((item) => (
              <a href={item.url} key={item.id}>
                <p
                  className="issue-labels"
                  style={{
                    backgroundColor: `#${item.color}`,
                    color: item.color === "b60205" ? "#fff" : "",
                  }}
                >
                  {item.name}{" "}
                </p>
              </a>
            ))}
        </div>
        <div className="issue-opened">
          #{number} opened {updatedAt} by{" "}
          <span>
            <a
              href={`https://github.com/facebook/react/issues/created_by/${user}`}
            >
              {user}
            </a>
          </span>{" "}
        </div>
      </div>
      <div className="issue-comment-group">
        <div></div>
        <div className="issue-pullRequest" style={{ visibility: !pullRequest ? 'hidden' : '' }}>
          {
            pullRequest && 
            <a href={pullRequest.url}>
            <img src={pullRequests} alt="pull request" /> 1
          </a>
          }


        </div>
        <div className="issue-comment" style={{ visibility: !comments ? 'hidden' : ''}}>
          <a href={commentsURL}>
            <img src={comment} alt="comment" /> {comments}
          </a>
        </div>
      </div>
    </div>
  );
};
