import React from 'react'
import CourseBatchesCard from './CourseBatchesCard'

const CourseBatches = ({setBatchDetails}) => {
  return (
    <div className='grid grid-cols-3 gap-4 gap-y-6'>
        <CourseBatchesCard setBatchDetails={setBatchDetails}/>
        <CourseBatchesCard setBatchDetails={setBatchDetails}/>
        <CourseBatchesCard setBatchDetails={setBatchDetails}/>
        <CourseBatchesCard setBatchDetails={setBatchDetails}/>
    </div>
  )
}

export default CourseBatches