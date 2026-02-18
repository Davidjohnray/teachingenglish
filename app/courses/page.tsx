export default function CoursesPage() {
  const courses = [
    {
      id: 1,
      title: "English Speaking Course",
      description:
        "Build confidence and fluency through real-life conversation and pronunciation practice.",
      levels: [
        "True Beginner",
        "Beginner",
        "Intermediate",
        "Upper Intermediate",
        "Advanced",
      ],
      topics: [
        "Conversation Practice",
        "Pronunciation",
        "Accent Reduction",
        "Vocabulary Building",
      ],
    },
    {
      id: 2,
      title: "Business English Course",
      description:
        "Improve your professional English for meetings, interviews, and workplace communication.",
      levels: ["Intermediate", "Upper Intermediate", "Advanced"],
      topics: [
        "English for Business",
        "English for Interviews",
        "Reading & Listening",
        "Vocabulary Building",
      ],
    },
    {
      id: 3,
      title: "IELTS Speaking Preparation",
      description:
        "Prepare confidently for the IELTS Speaking test with targeted practice and feedback.",
      levels: ["Intermediate", "Upper Intermediate", "Advanced"],
      topics: [
        "IELTS Speaking Test Preparation",
        "Pronunciation",
        "Accent Reduction",
        "Vocabulary Building",
      ],
    },
    {
      id: 4,
      title: "English for Travel",
      description:
        "Learn practical English for airports, hotels, restaurants, and travel situations.",
      levels: ["True Beginner", "Beginner", "Intermediate"],
      topics: [
        "English for Travel",
        "Conversation Practice",
        "Pronunciation",
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-5xl font-extrabold mb-10 text-center">
        English Courses
      </h1>

      <div className="grid gap-8 md:grid-cols-2">
        {courses.map((course) => (
          <div
            key={course.id}
            className="rounded-2xl border bg-white p-8 shadow-lg hover:shadow-xl transition"
          >
            <h2 className="text-3xl font-bold mb-3 text-indigo-600">
              {course.title}
            </h2>

            <p className="text-gray-600 mb-6">
              {course.description}
            </p>

            <div className="mb-6">
              <h3 className="font-semibold mb-3">Available Levels</h3>
              <div className="flex flex-wrap gap-2">
                {course.levels.map((level) => (
                  <span
                    key={level}
                    className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {level}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Topics Covered</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {course.topics.map((topic) => (
                  <li
                    key={topic}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <span className="text-indigo-500">✔</span>
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
