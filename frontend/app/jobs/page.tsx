import { Metadata } from "next";
import { FaMapMarkerAlt, FaBriefcase, FaClock, FaArrowRight } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Careers | Virinchie Hygen Engineering Consultants Pvt. Ltd.",
  description:
    "Join Virinchie Hygen Engineering Consultants Pvt. Ltd. Explore engineering, hydrology, GIS and infrastructure consultancy career opportunities.",
};

const jobs = [
  {
    id: 1,
    title: "Hydrology Engineer",
    location: "Delhi, India",
    type: "Full Time",
    experience: "2-5 Years",
  },
  {
    id: 2,
    title: "GIS Analyst",
    location: "Remote / Hybrid",
    type: "Full Time",
    experience: "1-3 Years",
  },
  {
    id: 3,
    title: "Structural Design Engineer",
    location: "Chandigarh, India",
    type: "Full Time",
    experience: "3-6 Years",
  },
];

export default function JobsPage() {
  return (
    <section className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-primary-600 mb-4">
            Join Our Team
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Be a part of Virinchie Hygen Engineering Consultants Pvt. Ltd.
            and work on impactful infrastructure, hydrology, and environmental projects.
          </p>
        </div>

        {/* Job Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition duration-300"
            >
              <h2 className="text-xl font-semibold mb-4 text-gray-800">
                {job.title}
              </h2>

              <div className="space-y-2 text-gray-600 text-sm mb-6">
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-primary-600" />
                  {job.location}
                </div>

                <div className="flex items-center gap-2">
                  <FaBriefcase className="text-primary-600" />
                  {job.type}
                </div>

                <div className="flex items-center gap-2">
                  <FaClock className="text-primary-600" />
                  {job.experience}
                </div>
              </div>

              <button className="flex items-center gap-2 text-white bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-lg transition">
                Apply Now
                <FaArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-primary-600 text-white py-12 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">
            Don’t See a Suitable Role?
          </h3>
          <p className="mb-6">
            Send your resume to careers@virinchiehygen.com and we’ll reach out when an opportunity matches your profile.
          </p>
          <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
            Send Resume
          </button>
        </div>
      </div>
    </section>
  );
}
