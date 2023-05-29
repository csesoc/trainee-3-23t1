const Course = ({course}: {course: {name: string, image: string}}) => {
    return (
      <div className="mt-4 h-16 w-full bg-secondary rounded-lg p-4 flex flex-row space-x-4 border border-background shadow-default">
        {/* image lel */}
        <div className="bg-accent-1 h-8 w-8 rounded-full"></div>
        <h5 className="m-1">{course.name}</h5>
      </div>
    )
  }

  export default Course