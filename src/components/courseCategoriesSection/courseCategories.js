
import React from 'react';
import './courseCategories-style.css';

//NEW CODE
const course = [
    {
        "id": 1,
        "name": "Data Science",
    },
    {
        "id": 2,
        "name": "Design",
    },
    {
        "id": 3,
        "name": "Operation",
    },
    {
        "id": 4,
        "name": "Finance",
    },
    {
        "id": 5,
        "name": "Software Development",
    }
]

const CourseCategories= ()=>{
    return (
        <div>
            {/* <Collapse defaultActiveKey={['0']}> */}
                {/* <Panel header key="1"> */}
                    {course.map((value,index)=>(
                        <React.Fragment key={index}>
                        <input
                        onChange
                        type="checkbox"
                        checked
                        />
                        <span>{value.name}</span>
                        </React.Fragment>
                    ))}

                {/* </Panel> */}
            {/* </Collapse> */}
        </div>
    )
        
    
}
//OLD CODE
// const CourseCategories = (props) => {

//     // const [checked, setChecked] = useState(false);

//     return (
//         <div className="course-body overflow">
//             <div className="course-cat">
//                 Course Categories
//                 </div>
//             <div className="datascience">
//                 <input type="checkbox" defaultChecked={false}
//                     onChange={() => { props.setFilteredCards("Data Science") }}
//                 />Data Science

//                 </div>

//             <div className="design">
//                 <input type="checkbox" onChange={(event) => {
//                     props.setFilteredCards("Design")
//                 }} /> Design
//                 </div>
//             <div className="operation">
//                 <input type="checkbox" onChange={(event) => {
//                     props.setFilteredCards("Operation")
//                 }} /> Operation
//                 </div>
//             <div className="finance">
//                 <input type="checkbox" onChange={(event) => {
//                     props.setFilteredCards("Finance")
//                 }} /> Finance
//                 </div>
//             <div className="software-dev">
//                 <input type="checkbox" onChange={(event) => {
//                     props.setFilteredCards("Software Development")
//                 }} /> Software Development
//                 </div>
//         </div>



//     )

// }



export default CourseCategories;
