import React, { useState, useEffect } from "react";
import Spinner from 'react-bootstrap/Spinner';
import { useSelector, useDispatch } from 'react-redux';
import {fetchIssues} from '../../store/issueSlice'
import IssueItem from './IssueItem'
const IssueCardBody = () => {
  const {issues, loading} = useSelector(state => state.issue);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchIssues(page))
  }, [page]);

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [] )

  const scrollHandler = () => {
    if (document.documentElement.scrollTop + window.innerHeight + 50 >= document.documentElement.scrollHeight) {
        setPage(prev => prev + 1);
    }
  }

  return (
    <div className="issue-card-body">
      {issues &&
        issues.map((item, index) => (
          <IssueItem
            key={index}
            title={item.title}
            url={item.html_url}
            number={item.number}
            createdAt={item.created_at}
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

