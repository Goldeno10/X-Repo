import { FaUserGraduate, FaUserAstronaut, FaUserNinja } from 'react-icons/fa';  // Import student-oriented icons

const TestimonialsSection = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-16 text-center">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">
        What Our Students Say
      </h2>
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-md w-full md:w-[30%]">
          <FaUserGraduate className="text-gray-400 mb-4" size={48} />  {/* Icon for general student */}
          <p className="italic text-gray-600 mb-4">
            &quot;This platform has revolutionized how I access study materials. Everything is in one place, making learning so much simpler.&quot;
          </p>
          <h3 className="text-lg font-semibold text-gray-700">
            - Fatima Ali, Undergraduate Student
          </h3>
        </div>

        <div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-md w-full md:w-[30%]">
          <FaUserAstronaut className="text-gray-400 mb-4" size={48} />  {/* Icon for science student */}
          <p className="italic text-gray-600 mb-4">
            &quot;I can upload my lab reports and easily share them with my study group. It’s incredibly user-friendly and intuitive.&quot;
          </p>
          <h3 className="text-lg font-semibold text-gray-700">
            - Yusuf Mohammed, Science Major
          </h3>
        </div>

        <div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-md w-full md:w-[30%]">
          <FaUserNinja className="text-gray-400 mb-4" size={48} />  {/* Icon for arts student */}
          <p className="italic text-gray-600 mb-4">
            &quot;I love the collaborative features! Sharing notes and critiques on our projects has never been easier.&quot;
          </p>
          <h3 className="text-lg font-semibold text-gray-700">
            - Amaka Chukwu, Arts Student
          </h3>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
