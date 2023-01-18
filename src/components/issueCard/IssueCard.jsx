import React from 'react'
import IssueCardHeader from './IssueCardHeader'
import IssueCardBody from './IssueCardBody'
import { IssuesStatus } from '../../constants'

const IssueCard = () => {
  return (
    <>
      <div className='ms-4  my-3 ps-4 issues-live d-flex d-lg-none' >
        {IssuesStatus.map((item) => (
          <div className='issue-live-item' key={item.id}>
            <img src={item.img} alt={item.text} />
            <span>{item.numStr}</span>
            {" "} {item.text}
          </div>
        ))}
      </div>

      <div className='issue-card my-4'>
      <IssueCardHeader />
      <IssueCardBody />
    </div>
    </>

  )
}

export default IssueCard