const Course = ({ course }: { course: { name: string; image: string } }) => {
  return (
    <div className="mt-4 flex w-full flex-wrap gap-4 rounded-lg border border-background bg-secondary p-4 shadow-default">
      {/* image lel */}
      <div className="h-8 w-8 rounded-full bg-accent-1"></div>
      <h5 className="m-1">{course.name}</h5>
    </div>
  );
};

export default Course;
