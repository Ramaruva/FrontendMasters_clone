import React, { useEffect, useState } from "react";
import { learn, learnCourse } from "../../LocalData/Localdata";
import "./LearnPath.css";
import Section from "./Section";
import Footer from "../Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../Useraxios/UserOperations";
import { userData } from "../../redux/user/userAction";

function LearnPath() {
	const [learnData, setLearnData] = useState(learn);
	const [plusLearn,setPlusLearn]=useState(learnCourse);
    const logId=useSelector((state) => state.author.logId);
	const data=useSelector((state) => state.user.data);
   const dispatch =useDispatch();
	//const data=;
	console.log(data);
	const comp="Computer Science"
	const design="Design to Code"
	const node="Node Js"
	const react="React Js"
	const vue="Vue.js"
	const angular="Angular.js"
	const Visualization="Data Visualization with D3.js"
	const synced="Async JS & Rx.js"
	console.log(data.comp);
	const handleProgress = () => {
		const newdata = learnData.map((item) => {
			  switch (item.title) {
				  case "Beginner":
					   return{
						   ...item,
						   pro:Number(data.Beginner)
					   }
			      case "Expert": 
				    return {
						...item,
						pro:Number(data.Expert)
					}	
				  case "Professional": 
				    return{
						...item,
						pro:Number(data.Professional)
					}
			    
				case "Computer Science": 
				  return{
					  ...item,
					  pro:Number(data[comp])
				  }	 
				case "Fullstack": 
				  return{
					  ...item,
					  pro:Number(data.Fullstack)
				  }  	
               case "Design to Code": 
			       return{
					   ...item,
					   pro:Number(data[design])
				   }
				  default:
					  return {
						  ...item,
					  }
			  }
		});
       
		setLearnData(newdata);
		const newCourse=plusLearn.map((item) => {
			switch (item.title)
			{
                case "CSS": 
				return {
					...item,
					pro:Number(data.CSS)
				}
				case "Node Js" : 
				return {
					...item,
					pro:Number(data[node])
				}
		      case "React Js": 
			  return {
				  ...item,
				  pro:Number(data[react])
			   }
			  case "Vue.js" :
				  return {
					  ...item,
					  pro:Number(data[vue])
				  }	
			 case "Angular.js":  
			   return {
				   ...item,
				   pro:Number(data[angular])
			   }
			   case "JavaScript":
		        return{
			       ...item,
			      pro:Number(data.JavaScript)
		       }
			  case  "Webpack": 
			    return {
					...item,
					pro:Number(data.Webpack)
				}	
			  case "Data Visualization with D3.js": 
			    return {
					...item,
					pro:Number(data[Visualization])
				}	
				case "Async JS & Rx.js": 
				return {
					...item,
					pro:Number(data[synced])
				} 
			   default :return {...item}	 	
			}
		})
		setPlusLearn(newCourse);
	};
	
	
	// if (item.title === "Beginner") {
	// 	return { ...item, pro: 1 };
	// } else {
	// 	return { ...item };
	// }

	useEffect(async() => {
			 
			 handleProgress();
		    dispatch(userData(logId))
	}, []);
	return (
		<div style={{ marginTop: "60px" }}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				x="0px"
				y="0px"
				viewBox="0 0 54 54"
				style={{ enableBackground: "new 0 0 54 54", height: "130px" }}
			>
				<defs>
					<linearGradient id="paths-linear" x1="0%" y1="0%" x2="100%" y2="100%">
						<stop offset="0%" stop-color="#c23028"></stop>
						<stop offset="100%" stop-color="#e25d25"></stop>
					</linearGradient>
				</defs>
				<g fill="url(#paths-linear)">
					<path
						d="M0,8.466v43c0,0.321,0.154,0.623,0.416,0.812C0.588,52.402,0.793,52.466,1,52.466c0.106,0,0.213-0.017,0.316-0.052
    L18,46.853V32.905c-0.249,0.052-0.511,0.084-0.751,0.148c-0.086,0.022-0.172,0.033-0.257,0.033c-0.443,0-0.847-0.296-0.966-0.744
    c-0.141-0.533,0.177-1.081,0.71-1.223c0.41-0.108,0.834-0.196,1.264-0.274v-29.1L0.684,7.518C0.275,7.654,0,8.035,0,8.466z
    M9.116,40.07c-0.894,1.938-1.124,3.519-1.125,3.534c-0.07,0.499-0.499,0.861-0.99,0.861c-0.045,0-0.092-0.003-0.138-0.01
    c-0.546-0.075-0.928-0.578-0.854-1.125c0.01-0.075,0.264-1.873,1.291-4.099c0.231-0.502,0.825-0.72,1.327-0.489
    C9.128,38.974,9.347,39.568,9.116,40.07z M8.293,25.173c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0L11,25.052
    l1.293-1.293c0.391-0.391,1.023-0.391,1.414,0s0.391,1.023,0,1.414l-1.293,1.293l1.293,1.293c0.391,0.391,0.391,1.023,0,1.414
    c-0.195,0.195-0.451,0.293-0.707,0.293s-0.512-0.098-0.707-0.293L11,27.88l-1.293,1.293C9.512,29.368,9.256,29.466,9,29.466
    s-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414l1.293-1.293L8.293,25.173z M13.868,34.503
    c-1.031,0.646-1.962,1.458-2.768,2.414c-0.198,0.234-0.48,0.355-0.765,0.355c-0.228,0-0.457-0.077-0.644-0.235
    c-0.422-0.356-0.476-0.987-0.12-1.409c0.94-1.115,2.028-2.063,3.235-2.82c0.467-0.294,1.084-0.151,1.378,0.316
    C14.477,33.592,14.335,34.209,13.868,34.503z M11,9.466c2.757,0,5,2.243,5,5c0,2.415-1.721,4.434-4,4.899v2.101
    c0,0.553-0.448,1-1,1s-1-0.447-1-1v-2.101c-2.279-0.465-4-2.484-4-4.899C6,11.709,8.243,9.466,11,9.466z"
					></path>
					<circle cx="11" cy="14.466" r="3"></circle>
					<path
						d="M29.17,31.898c-0.441-0.185-0.699-0.313-0.716-0.322c-0.065-0.033-0.134-0.06-0.205-0.078
    c-1.083-0.278-2.15-0.498-3.173-0.654c-0.545-0.086-1.056,0.291-1.14,0.837c-0.083,0.546,0.292,1.057,0.838,1.14
    c0.926,0.142,1.893,0.34,2.877,0.59c0.134,0.064,0.39,0.185,0.748,0.334c0.126,0.053,0.257,0.077,0.385,0.077
    c0.391,0,0.763-0.23,0.923-0.614C29.92,32.697,29.68,32.111,29.17,31.898z"
					></path>
					<path
						d="M45.07,28.139c0.12,0.047,0.243,0.068,0.364,0.068c0.4,0,0.777-0.241,0.932-0.636c0.47-1.199,0.847-2.553,1.123-4.024
    c0.102-0.542-0.256-1.064-0.799-1.167c-0.546-0.09-1.065,0.257-1.167,0.8c-0.252,1.348-0.595,2.58-1.019,3.663
    C44.303,27.357,44.556,27.937,45.07,28.139z"
					></path>
					<path
						d="M40.423,34.196c0.153,0,0.309-0.035,0.454-0.109c1.292-0.661,2.431-1.599,3.384-2.786c0.346-0.431,0.277-1.061-0.154-1.406
    c-0.43-0.343-1.06-0.276-1.406,0.154c-0.776,0.967-1.696,1.726-2.735,2.257c-0.492,0.252-0.687,0.854-0.435,1.346
    C39.709,33.996,40.06,34.196,40.423,34.196z"
					></path>
					<path
						d="M46.923,20.397c0.022,0.001,0.043,0.002,0.065,0.002c0.523,0,0.963-0.406,0.997-0.937c0.062-0.961,0.093-1.978,0.093-3.02
    c0-0.347-0.003-0.699-0.01-1.058c-0.01-0.553-0.49-0.973-1.018-0.982c-0.552,0.01-0.992,0.466-0.982,1.018
    c0.006,0.347,0.01,0.688,0.01,1.022c0,1-0.03,1.973-0.089,2.893C45.954,19.886,46.372,20.362,46.923,20.397z"
					></path>
					<path d="M20,46.959l15,6.177V9.805L20,1.864V46.959z M22,5.186l11,5.824v39.14l-11-4.53V5.186z"></path>
					<path d="M37,9.805v43.331l17-7.177V0.864L37,9.805z M52,44.633l-13,5.488V11.013l13-6.837V44.633z"></path>
				</g>
			</svg>
			<h1>Learning Paths</h1>
			<p>Guided paths to expand your abilities as a well-rounded engineer!</p>
			<hr style={{ width: "68%", margin: "auto" }} />
			<br />
			<div className="MainContainer">
				{learnData.map((el) => {
					return (
						<div key={el.id}>
							<Section
								pro={el.pro}
								url={el.url}
								des={el.des}
								title={el.title}
								color={el.color}
							/>
						</div>
					);
				})}
			</div>
			<div></div>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				x="0px"
				y="0px"
				viewBox="0 0 512 512"
				style={{
					marginTop: "100px",
					enableBackground: "new 0 0 512 512",
					height: "130px",
					width: "130px",
				}}
			>
				{" "}
				<defs>
					<linearGradient
						id="electives-linear"
						x1="0%"
						y1="0%"
						x2="100%"
						y2="100%"
					>
						<stop offset="0%" stop-color="#00505f"></stop>
						<stop offset="100%" stop-color="#01d9ff"></stop>
					</linearGradient>
				</defs>
				<g fill="url(#electives-linear)">
					<path
						d="M256,0C148.477,0,61,87.477,61,195c0,68.893,35.912,129.557,90,164.254V497c0,5.532,3.045,10.615,7.922,13.225
			c4.878,2.611,10.796,2.324,15.398-0.744L256,455.028l81.68,54.453c4.6,3.067,10.518,3.356,15.398,0.744
			c4.877-2.61,7.922-7.693,7.922-13.225V359.254c54.088-34.697,90-95.361,90-164.254C451,87.477,363.523,0,256,0z M331,468.972
			l-66.68-44.453c-5.038-3.359-11.603-3.359-16.641,0L181,468.972v-93.981C204.1,384.653,229.436,390,256,390
			c26.564,0,51.9-5.347,75-15.009V468.972z M256,360c-90.981,0-165-74.019-165-165S165.019,30,256,30s165,74.019,165,165
			S346.982,360,256,360z"
					></path>
					<path
						d="M375.286,159.909c-1.754-5.477-6.484-9.469-12.179-10.277l-64.804-9.194l-28.916-57.205C266.835,78.184,261.658,75,256,75
			c-5.658,0-10.834,3.184-13.387,8.233l-28.916,57.205l-64.804,9.194c-5.694,0.808-10.425,4.8-12.179,10.277
			c-1.754,5.477-0.221,11.475,3.945,15.44l46.676,44.422l-11.002,62.633c-0.985,5.608,1.29,11.291,5.874,14.669
			c4.583,3.379,10.684,3.871,15.75,1.271L256,268.551l58.043,29.794c5.076,2.605,11.176,2.102,15.75-1.271
			c4.583-3.378,6.858-9.061,5.874-14.669l-11.002-62.633l46.676-44.422C375.507,171.384,377.04,165.387,375.286,159.909z
			M298.159,203.583c-3.638,3.462-5.302,8.515-4.433,13.461l7.173,40.833l-38.049-19.531c-4.301-2.207-9.4-2.207-13.7,0
			l-38.049,19.531l7.173-40.833c0.869-4.946-0.795-9.999-4.433-13.461l-30.052-28.601l41.871-5.94
			c4.855-0.689,9.068-3.708,11.28-8.084L256,123.25l19.06,37.707c2.212,4.377,6.424,7.396,11.28,8.084l41.871,5.94L298.159,203.583z
			"
					></path>
				</g>
			</svg>

			<br />
			<h1>Topic Paths:</h1>
			<p>Focus on a specific area in web development.</p>
			<hr style={{ width: "68%", margin: "auto" }} />
			<br />
			<div className="MainContainer">
				{plusLearn.map((el) => (
					<div key={el.id}>
						<Section
							pro={el.pro}
							url={el.url}
							des={el.des}
							title={el.title}
							color={el.color}
						/>
					</div>
				))}
			</div>
			<Footer />
		</div>
	);
}

export default LearnPath;
