import React from 'react'
import { issues, comment, pullRequests } from "../../assets";

const IssueItem = ({
    title,
    url,
    number,
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
                labels.map((item, index) => (
                  <a href={item.url} key={index}>
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
          <div className="issue-comment-group d-none d-sm-flex">
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
}

export default IssueItem