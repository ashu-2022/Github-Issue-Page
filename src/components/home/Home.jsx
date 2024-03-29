import React from 'react'
import { IssueCard } from '../'
import { proTip } from '../../assets';

const Home = () => {
  return (
    <>
      <IssueCard />
      <div className='proTips my-2 my-sm-4 p-2'>
        <div className='X-flex'>
        <img src={proTip} alt="proTips" />
        <p><strong>ProTip!</strong> Updated in the last three days:</p>
        </div>
        <a href='https://github.com/facebook/react/issues?q=is%3Aissue+is%3Aopen+updated%3A%3E2023-01-14'  rel="noopener noreferrer">updated:>2023-01-14</a>.
      </div>
    </>
  )
}

export default Home