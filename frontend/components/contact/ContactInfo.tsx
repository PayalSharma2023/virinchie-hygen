import { COMPANY_INFO } from "@/lib/constants"
import {
  HiLocationMarker,
  HiPhone,
  HiMail,
  HiClock,
} from "react-icons/hi"

export default function ContactInfo() {
  return (
    <section className="max-w-4xl mx-auto p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-xl">
      {/* <h2 className="text-3xl font-extrabold text-center text-gradient bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent mb-6">
        Get in Touch
      </h2> */}

      <p className="text-center text-lg text-gray-700 dark:text-gray-300 mb-8">
        We&apos;d love to hear from you — whether it&apos;s a question, quote
        request, or general inquiry.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
        {/* Address */}
        <div className="flex items-start space-x-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg transition-shadow">
          <HiLocationMarker className="text-blue-500 text-3xl" />
          <div>
            <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-100">
              Address
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {COMPANY_INFO.address.street}, {COMPANY_INFO.address.city},{" "}
              {COMPANY_INFO.address.state} <br />
              {COMPANY_INFO.address.pincode}, {COMPANY_INFO.address.country}
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start space-x-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg transition-shadow">
          <HiPhone className="text-green-500 text-3xl" />
          <div>
            <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-100">
              Phone
            </h3>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="text-gray-600 dark:text-gray-300 hover:text-green-600 transition"
            >
              {COMPANY_INFO.phone}
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start space-x-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg transition-shadow">
          <HiMail className="text-red-500 text-3xl" />
          <div>
            <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-100">
              Email
            </h3>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="text-gray-600 dark:text-gray-300 hover:text-red-600 transition"
            >
              {COMPANY_INFO.email}
            </a>
          </div>
        </div>

        {/* Business Hours */}
        <div className="flex items-start space-x-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg transition-shadow">
          <HiClock className="text-yellow-500 text-3xl" />
          <div>
            <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-100">
              Business Hours
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              <span className="font-medium">Weekdays:</span>{" "}
              {COMPANY_INFO.businessHours.weekdays} <br />
              <span className="font-medium">Saturday:</span>{" "}
              {COMPANY_INFO.businessHours.saturday} <br />
              <span className="font-medium">Sunday:</span>{" "}
              {COMPANY_INFO.businessHours.sunday}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
