import React, { useState } from 'react'
import ScheduledAssignmentsCard from './ScheduledAssignmentsCard'
import CreateAssignment from '../CreateAssignment/CreateAssignment'
import CreateAssignmentFinal from '../CreateAssignment/CreateAssignmentFinal';

const ScheduledAssignments = () => {
	const [createAssignment, setCreateAssignment] = useState(null);
	return (
		<div>
			<div className='grid grid-cols-3 gap-6 gap-y-8'>
				<ScheduledAssignmentsCard setCreateAssignment={setCreateAssignment}/>
				<ScheduledAssignmentsCard setCreateAssignment={setCreateAssignment}/>
				<ScheduledAssignmentsCard setCreateAssignment={setCreateAssignment}/>
				<ScheduledAssignmentsCard setCreateAssignment={setCreateAssignment}/>
			</div>
			{createAssignment === 'create' &&
				<div className='w-[63%] flex right-0 top-0 h-full overflow-y-auto absolute fadeInLeft border-l-[1.5px] border-[#E4E4E4] customScrollfortp'>
					<CreateAssignment setCreateAssignment={setCreateAssignment}/>
				</div>
			}
			{createAssignment === 'final' &&
				<div className='w-[63%] flex right-0 top-0 h-full overflow-y-auto absolute fadeInLeft border-l-[1.5px] border-[#E4E4E4] customScrollfortp'>
					<CreateAssignmentFinal setCreateAssignment={setCreateAssignment}/>
				</div>
			}
		</div>
	)
}

export default ScheduledAssignments