
const Resume = ({
    setShowResume
}) => {
    return (
        <div className="fixed h-full w-full z-50 flex justify-center">
        <div className="h-full w-5/6">
            <div className="flex justify-end">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    className="cursor-pointer text-gray-100"
                    onClick={() => setShowResume(false)}
                    >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-11.414L9.172 7.757 7.757 9.172 10.586 12l-2.829 2.828 1.415 1.415L12 13.414l2.828 2.829 1.415-1.415L13.414 12l2.829-2.828-1.415-1.415L12 10.586z"></path>
                </svg>
            </div>
                <iframe src="/preveen-raj-resume.pdf" width="90%" height="90%"></iframe>
            </div>
        </div>
    );
}

export default Resume;