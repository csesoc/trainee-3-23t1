import { CourseData } from "~/data/dummy";
import { useState } from "react";
import Course from "./Course";

const AllCourses = () => {
    // CourseData
    const [loading, setLoading] = useState(true)
      setTimeout(() => {
        setLoading(false);
      }, 5000);
    return (
      <>
      {loading ?
        (<></>)
        :
        (<div className="h-full">
          {CourseData.map((course, index) => {
            return <Course course={course} key={index} />
          })}
        </div>)}
    </>
    )
  }

  export default AllCourses;