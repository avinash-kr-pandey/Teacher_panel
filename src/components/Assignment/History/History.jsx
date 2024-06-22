import React, { useState } from 'react'
import DeclareResultCard from './DeclareResultCard'
import ViewResultsCard from './ViewResultsCard'
import DeclareResult from '../DeclareResult/DeclareResult';
import DeclareResultDetails from '../DeclareResult/DeclareResultDetails';
import FinalSubmit from '../DeclareResult/FinalSubmit';

const History = () => {
	const [declareResult,setDeclareResult] = useState(false);
	const [declareResultDetails,setDeclareResultDetails] = useState(false);
	const [resultSubmit, setResultSubmit] = useState(false);
	const [activeSection, setAciveSection] = useState('Details');
	return (
		<div>
			<div className='grid grid-cols-3 gap-6 gap-y-8'>
				<DeclareResultCard setDeclareResult={setDeclareResult}/>
				<ViewResultsCard/>
				<DeclareResultCard setDeclareResult={setDeclareResult}/>
				<ViewResultsCard/>
			</div>
			{declareResult && 
				<div className='w-[63%] flex right-0 top-0 h-full overflow-y-auto absolute fadeInLeft border-l-[1.5px] border-[#E4E4E4] customScrollfortp'>
					<DeclareResult setDeclareResult={setDeclareResult} setDeclareResultDetails={setDeclareResultDetails}/>
				</div>
			}
			{declareResultDetails && 
				<div className='w-[80%] flex right-0 top-0 h-full overflow-y-auto absolute fadeInLeft border-l-[1.5px] border-[#E4E4E4] customScrollfortp'>
					<DeclareResultDetails setDeclareResultDetails={setDeclareResultDetails} setResultSubmit={setResultSubmit} activeSection={activeSection} setAciveSection={setAciveSection}/>
				</div>
			}
			{resultSubmit &&
				<div className='w-[80%] flex right-0 top-0 h-full overflow-y-auto absolute fadeInLeft border-l-[1.5px] border-[#E4E4E4] customScrollfortp'>
					<FinalSubmit setResultSubmit={setResultSubmit} activeSection={activeSection} setAciveSection={setAciveSection}/>
				</div>
			}
		</div>
	)
}

export default History