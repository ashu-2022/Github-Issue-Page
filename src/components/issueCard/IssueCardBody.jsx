import React, { useState, useEffect } from "react";
import axios from "axios";
import { issues, comment, pullRequests } from "../../assets";
import Spinner from 'react-bootstrap/Spinner';
const URL = "https://api.github.com/repos/facebook/react/issues";


const IssueCardBody = () => {
  const [issues, setIssues] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getIsuues();
  }, [page]);

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [] )

  const scrollHandler = () => {
    // console.log("scrollHeight", document.documentElement.scrollHeight);
    // console.log("scrollTop", document.documentElement.scrollTop);
    // console.log("window.innerHeight", window.innerHeight);
    if (document.documentElement.scrollTop + window.innerHeight + 50 >= document.documentElement.scrollHeight) {
      setPage(prev => prev + 1);
    }
  }

  const getIsuues = async () => {
    let API_URL = `${URL}?page=${page}`;
    console.log("API_URL", API_URL);
    axios
      .get(API_URL)
      .then((result) => {
        console.log("Github Issues Data", result.data);
        setIssues((prev) => [...prev, ...result.data]);
      })
      .catch((error) => {
        console.log("Error occur during fetching Github Issues", error);
      })
      .finally(() => setLoading(false));
  };


  return (
    <div className="issue-card-body">
      {issues &&
        issues.map((item, index) => (
          <IssueItem
            key={index}
            title={item.title}
            url={item.html_url}
            number={item.number}
            updatedAt={item.created_at}
            user={item.user.login}
            comments={item.comments}
            commentsURL={item.comments_url}
            labels={item.labels}
            pullRequest={item.pull_request}
          />
        ))}
      
      {loading &&
        <div className="text-center my-2">
          <Spinner animation="border"  />
        </div>
      }
    </div>
  );
};

export default IssueCardBody;

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
