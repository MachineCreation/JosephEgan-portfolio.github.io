
// React

const Resume = () => {
  const resumeUrl = 'resume.pdf';

  return (
    <div className="flex flex-col w-full h-full p-4 justify-around items-center">
      <h2>My Resume</h2>
      <div className="flex w-full h-full">
        <embed
          src={`${resumeUrl}`}
          type="application/pdf"
          className="w-full h-full object-contain"
          width="100%"
        />
      </div>
    </div>
  );
};

export default Resume;
