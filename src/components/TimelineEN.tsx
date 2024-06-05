import ref_geii from "@assets/ref_geii.pdf";

const TimelineEN = () => {
  return (
    <div className="">

      <div className="mt-2 w-full text-center justify-center">
        <div>
          <h2 className="pt-4 font-bold text-3xl mb-4 justify-center">About Me</h2>
          <p>
            My name is Axel Calendreau and this is my portfolio.
          </p>
          <p>
            A portfolio is a way to showcase one's journey and knowledge through the presentation of various completed projects.
          </p>
          <p>
            Enjoy discovering what I have been able to explore in electronics and computer science.
          </p>
          <p>
            Thank you for reading, if you have any questions, my contact details are displayed all around.
          </p>

          <p className="pt-4 font-bold text-3xl">
            My Journey:
          </p>
        </div>
      </div>
      
      <div className="mt-20 w-full flex justify-center">
        <div className="max-w-screen-lg w-full flex">
          <div className="flex-1 pr-8">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Starting Point</h2>
              <p>
                For as long as I can remember, I have always been curious and eager to push my limits to discover and learn as much as possible.
              </p>
              <p>
                This is why I quickly turned to technical fields such as electronics and science, as the amount of knowledge to acquire is nearly infinite.
              </p>
              <p>
                Recently, I have also been trying to acquire artistic skills because I realize that it can be useful, especially for creating websites like this portfolio.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">University</h2>
              <p>
                I am currently pursuing a Bachelor of University and Technology in Electrical Engineering and Industrial Computing at the IUT of Angouleme. Over three years, I have learned many things related to electronics, embedded computing, and automation.
                              I do not think I will work in a job strictly related to what I have learned, but I know that I have gained a lot of useful knowledge for the future.
                              <a className="text-blue-600 font-semibold text-2xl" href={ref_geii}> Link to the competence reference </a>
              </p>
            </div>
          </div>
          <div className="w-20 flex justify-center items-center">
            <div className="h-[35rem] w-6 bg-gradient-to-b animate-text from-teal-500 via-emerald-500 to-purple-500
            text-5xl font-black text-transparent hover:from-purple-500 hover:via-emerald-500 hover:to-teal-500"></div>
          </div>
          <div className="flex-1 pl-8">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Professional</h2>
              <p>
                During my early years in the professional world, I worked numerous summer jobs and in physical labor, which makes me appreciate even more the opportunity to apply my knowledge and skills now.
              </p>
              <p>
                Thanks to the GEII program, I found an apprenticeship at Héli Union Training Center, a helicopter pilot school. It is the best job I have ever had; I am a helicopter simulator technician and network administrator there.
                I can learn and apply knowledge in IT, maintenance, and aeronautics, which are fascinating fields.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Future</h2>
              <p>
                Recently, I enrolled in an engineering school in a computer science program with the same company in an apprenticeship, allowing me to continue working at the same company while obtaining a higher degree.
                I also hope that this course will help me find my path and choose which field of computer science I want to work in.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 w-full text-center justify-center">
        <div>
          <h2 className="pt-4 font-bold text-3xl mb-4 justify-center">Hobbies</h2>
          <p>
            Outside of my academic and professional activities, I enjoy life, doing sports to clear my mind, and being curious about everything through DIY, discussions, and exploration.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TimelineEN;
