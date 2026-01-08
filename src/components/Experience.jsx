const experience = [
  {
    company: "CI&T",
    title: "Frontend Enginner",
    date: "Feb 2025 - Present",
    description: "Developed responsive web applications using React and Vanilla JS",
  },
  {
    company: "OneOfOne Posters",
    title: "Frontend Engineer",
    date: "Aug 2025 - Present",
    description: "Developed responsive web applications using React and Next.js.",
  },
  {
    company: "Sports Funded",
    title: "Frontend Developer",
    date: "Jun 2024 - Jun 2025",
    description: "Developed responsive web applications using React and Next.js.",
  },
  {
    company: "TopTier Trader",
    title: "Junior Frontend Developer",
    date: "Jun 2024 - Nov 2024",
    description: "Developed responsive web pages using React and Next.js. Implemented state management solutions and optimized performance. Implemented new pages, sections and blogs.",
  }
]

function ExperienceItem({ item }) {
  return (
    <li class="mb-16 flex flex-col gap-3 last:mb-0 ms-4">
      <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border bg-orange border-light"></div>
      <time class="text-sm">{item.date}</time>
      <h3 class="text-3xl font-semibold">{item.company} <span className="text-base font-normal block md:inline"><span className="hidden md:inline">/ </span>{item.title}</span></h3>
      <p class="text-light/70">{item.description}</p>
    </li>
  )
}

export function Experience() {
  return (
    <ol class="relative border-s border-gray-200 dark:border-gray-700">
      {experience.map((item, index) => (
        <ExperienceItem key={index} item={item} />
      ))}
    </ol>
  )
}