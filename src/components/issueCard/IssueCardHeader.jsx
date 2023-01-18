import React from 'react'
import { IssuesMenu, IssuesStatus } from '../../constants'
import {dropMenu} from '../../assets'
const IssueCardHeader = () => {
  return (
    <>

   
    <div className='issue-card-header'>
      <div className='issues-live d-none d-lg-flex' >
        {IssuesStatus.map((item) => (
          <div className='issue-live-item' key={item.id}>
            <img src={item.img} alt={item.text} />
            <span>{item.numStr}</span>
            {" "} {item.text}
          </div>
        ))}
      </div>
      <ul className='issues-menu'>
        {IssuesMenu.map((item) => (
          <div className='issues-menu-item' key={item.id}>
            <p key={item.id}>{item.text}</p>
            <img src={dropMenu} alt="dropMenu"/>
          </div>
          ))}
      </ul>
      </div>
      </>
  )
}

export default IssueCardHeader