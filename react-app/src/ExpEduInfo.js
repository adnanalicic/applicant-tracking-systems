import React from 'react';
import './ExpEduInfo.css';

class ExpEduInfo extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			exp: [
			{
				position: "Junior Software Developer",
				name: "DCCS d.o.o",
				photo: "https://www.dccs.at/o/dccs-startpage-theme-1.0.0/images/logo_start.svg",
				timeOfEmployment: "Feb 2017 - Feb 2018",
				placeOfEmployment: "Tuzla" 
			},
			{
				position: "Software Developer",
				name: "Virgin Pulse",
				photo: "data:image/jpeg;base64,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",
				timeOfEmployment: "Feb 2018 - Present",
				placeOfEmployment: "Tuzla" 
			},
		    ],
		    edu: [
		    	{
		    		name: "University of Tuzla",
		    		diploma: "Bachelor",
		    		attendanceTime: "2006-2010",
		    		module: "Computer Science",
		    		photo: "https://lh3.googleusercontent.com/proxy/GQiyuETXmDJ_0QC1io4X3CGkF-ZPTc6A9D09s-TN43vzyebB4Rvga0uAairPMm3Mznz1PU0U2AfrwcFa5XPg7t1iw5sOmzrnkdBlzQg-RnyC-tzexkJPE7oZ8xbc8hSYy71LEpXT7g",
		    	},
		    ]
		};
	}
	render(){
		return(			
				<div className="moreInfoDiv">
				   <p>Experience</p>
				   {this.state.exp.map(e => 
				    	 <section className="sectionCss">
				    	 <div className="imgDiv">
				    	 	<img  className="compImg" src={e.photo}/>
				    	 </div>
				    	 <div className="eduInfoDiv">
				    	 	<p className="textCss2">{e.position}</p>
				    	 	<p className="textCss3">{e.name}</p>
				    	 	<p className="textCss1">{e.timeOfEmployment}</p>
				    	 	<p className="textCss1">{e.placeOfEmployment}</p>
				    	 </div>
				    	 </section>
				    )}
				    <div className="eduDivEl">
				    	<p>Education</p>
				    	{this.state.edu.map(e =>   
				    	 	<section className="sectionCss">
				    	 	<div className="imgDiv">
				    	 		<img  className="compImg" src={e.photo}/>
				    	 	</div>
				    	 	<div className="eduInfoDiv">
					    	 	<p className="textCss2">{e.name}</p>
					    	 	<p className="textCss3">{e.diploma}</p>
					    	 	<p className="textCss1">{e.attendanceTime}</p>
					    	 	<p className="textCss3">{e.module}</p>
					    	 </div>
				    	 	</section>
				    	)}
				    </div>
				</div>
				);
	}
	
}

export default ExpEduInfo;