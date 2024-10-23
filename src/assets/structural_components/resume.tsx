
// React

const Resume = () => {
  const resumeUrl = 'resume.pdf';

  return (
    <div className="relative flex flex-col w-full h-full p-4 justify-around items-center">
      <h2>My Resume</h2>
      <div className="relative block w-full h-full">
        <embed
          src={`${resumeUrl}`}
          type="application/pdf"
          className="block w-full h-full overflow-hidden"
          width="100%"
          height="100%"
        />
      </div>
      <p className="mt-4 p-4 rounded-lg bg-slate-800 bg-opacity-55 text-center">
        Is the PDF not displaying? <br/>
        <a href={resumeUrl} download className="cursor-pointer underline">
        You can download it here instead.
        </a>
    </p>
    </div>
  );
};

export default Resume;
