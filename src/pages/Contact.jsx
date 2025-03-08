import React from "react";

const Contact = () => {
  const contactDetails = [
    {
      icon: (
        <svg
          className="w-12 h-12 text-yellow-500 transform transition-transform group-hover:scale-110 duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      title: "Call Us",
      details: [
        { text: "Main Office: +91 822-500-0491", link: "tel:+918225000491" },
        {
          text: "Customer Support: +91 822-500-0491",
          link: "tel:+918225000491",
        },
        { text: "Emergency: +91 822-500-0491", link: "tel:+918225000491" },
      ],
    },
    {
      icon: (
        <svg
          className="w-12 h-12 text-yellow-500 transform transition-transform group-hover:scale-110 duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Email Us",
      details: [
        {
          text: "General Inquiries: info@rdbuilders.com",
          link: "mailto:info@rdbuilders.com",
        },
        {
          text: "Support: support@rdbuilders.com",
          link: "mailto:support@rdbuilders.com",
        },
        {
          text: "Careers: careers@rdbuilders.com",
          link: "mailto:careers@rdbuilders.com",
        },
      ],
    },
    {
      icon: (
        <svg
          className="w-12 h-12 text-yellow-500 transform transition-transform group-hover:scale-110 duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      title: "Visit Us",
      details: [
        { text: "123 Builder Street", link: null },
        { text: "Construction City, CC 12345", link: null },
        { text: "United States", link: null },
      ],
    },
    {
      icon: (
        <svg
          className="w-12 h-12 text-yellow-500 transform transition-transform group-hover:scale-110 duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Business Hours",
      details: [
        { text: "Monday - Friday: 8:00 AM - 6:00 PM", link: null },
        { text: "Saturday: 9:00 AM - 4:00 PM", link: null },
        { text: "Sunday: Closed", link: null },
      ],
    },
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            With over 20 years of experience in construction excellence, RD
            Builders is your trusted partner for all construction needs. Reach
            out to us through any of the channels below.
          </p>
        </div>

        {/* Contact Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactDetails.map((item, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-100"
            >
              <div className="flex flex-col items-center justify-center">
                <div className="mb-6 bg-yellow-50 p-4 rounded-full">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors">
                  {item.title}
                </h3>
                <div className="space-y-3 text-center">
                  {item.details.map((detail, idx) =>
                    detail.link ? (
                      <a
                        key={idx}
                        href={detail.link}
                        className="block text-gray-600 hover:text-yellow-600 transition-colors"
                      >
                        {detail.text}
                      </a>
                    ) : (
                      <p key={idx} className="text-gray-600">
                        {detail.text}
                      </p>
                    )
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-yellow-100 p-2 rounded-lg mr-3">
                <svg
                  className="w-6 h-6 text-yellow-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              Our Commitment
            </h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              At RD Builders, we're committed to providing exceptional service
              and quality craftsmanship. Our team of experienced professionals
              is ready to assist you with:
            </p>
            <ul className="space-y-4 text-gray-600">
              {[
                "Free project consultations",
                "Detailed project estimates",
                "Expert construction advice",
                "Emergency construction services",
                "Renovation planning assistance",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center hover:text-yellow-600 transition-colors"
                >
                  <svg
                    className="w-5 h-5 mr-3 text-yellow-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-yellow-100 p-2 rounded-lg mr-3">
                <svg
                  className="w-6 h-6 text-yellow-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                </svg>
              </span>
              Service Areas
            </h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              We provide our construction services throughout the following
              areas:
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-gray-900 mb-4 text-lg">
                  Primary Regions
                </h3>
                <ul className="space-y-3">
                  {[
                    "Construction City",
                    "Builder's Valley",
                    "Architect Town",
                    "Developer's District",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center text-gray-600 hover:text-yellow-600 transition-colors"
                    >
                      <svg
                        className="w-4 h-4 mr-2 text-yellow-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-4 text-lg">
                  Extended Areas
                </h3>
                <ul className="space-y-3">
                  {[
                    "Metro Region",
                    "Suburban District",
                    "Coastal Area",
                    "Highland Zone",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center text-gray-600 hover:text-yellow-600 transition-colors"
                    >
                      <svg
                        className="w-4 h-4 mr-2 text-yellow-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
