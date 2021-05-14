import React from 'react';
import './courseCategories-style.css';

const CourseCategories = (props) => {

    return (
        <div className="course-body px-3">
            <p className="course-cat">
                Course Categories
            </p>

            <div className="align-items-center bg-white d-flex mb-2 py-1 rounded">
                <input type="checkbox" defaultChecked={false} className="mx-2" onChange={() => {
                    props.setFilteredCards("Data Science", "select")
                }} /> <span className="course-font">Data Science</span>
            </div>

            <div className="align-items-center bg-white d-flex mb-2 py-1 rounded">
                <input type="checkbox" className="mx-2" onChange={(event) => {
                    props.setFilteredCards("Design", "select")
                }} /> <span className="course-font">Design</span> 
            </div>

            <div className="align-items-center bg-white d-flex mb-2 py-1 rounded">
                <input type="checkbox" className="mx-2" onChange={(event) => {
                    props.setFilteredCards("Operation", "select")
                }} /> <span className="course-font">Operation</span>
            </div>

            <div className="align-items-center bg-white d-flex mb-2 py-1 rounded">
                <input type="checkbox" className="mx-2" onChange={(event) => {
                    props.setFilteredCards("Finance", "select")
                }} /> <span className="course-font">Finance</span>
            </div>

            <div className="align-items-center bg-white d-flex mb-2 py-1 rounded">
                <input type="checkbox" className="mx-2" onChange={(event) => {
                    props.setFilteredCards("Software Development", "select")
                }} /> <span className="course-font">Software Development</span>
            </div>
        </div>
    )
}

export default CourseCategories;

