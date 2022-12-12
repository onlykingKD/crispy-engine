import NavBar from "../../components/navbar";

const mySkills = [
  {
    name: "Frontend",
    skills: [
      {
        name: "HTML/CSS/JS",
        level: 90,
      },
      {
        name: "TailwindCSS",
        level: 80,
      },
      {
        name: "ReactJS",
        level: 60,
      },
      {
        name: "NextJS",
        level: 50,
      },
      {
        name: "Bootstrap",
        level: 50,
      },
    ],
  },
  {
    name: "Backend",
    skills: [
      {
        name: "NodeJS",
        level: 70,
      },
      {
        name: "ExpressJS",
        level: 60,
      },
      {
        name: "MySQL",
        level: 60,
      },
      {
        name: "Firebase",
        level: 50,
      },
      {
        name: "MongoDB",
        level: 40,
      },
    ],
  },
  {
    name: "Languages",
    skills: [
      {
        name: "C++",
        level: 90,
      },
      {
        name: "Python",
        level: 80,
      },
      {
        name: "Java",
        level: 70,
      },
      {
        name: "JavaScript",
        level: 70,
      },
      {
        name: "C",
        level: 60,
      },
    ],
  },
  {
    name: "Tools",
    skills: [
      {
        name: "Git",
        level: 90,
      },
      {
        name: "VSCode",
        level: 80,
      },
      {
        name: "Tableau",
        level: 70,
      },
      {
        name: "Confluence",
        level: 60,
      },
    ],
  },
  {
    name: "Miscellaneous",
    skills: [
      {
        name: "Data Analysis",
        level: 80,
      },
      {
        name: "Data Science",
        level: 70,
      },
      {
        name: "Competitive Coding",
        level: 60,
      },
      {
        name: "Linux",
        level: 50,
      },
      {
        name: "AWS",
        level: 40,
      },
    ],
  },
];

export default function Skills() {
  return (
    <div>
      <NavBar activeSection="About" />
      <div className="px-40">
        <div className="text-white pt-20 font-semibold">
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </div>

        <div className="flex flex-col gap-20 justify-between">
          <h1 className="text-white pt-10 text-4xl font-semibold">My Skills</h1>

          <ol className="grid grid-cols-3 gap-20">
            {mySkills.map((skill) => (
              <div key={skill.name} className="flex flex-col gap-5">
                <li type="A" className="text-white text-2xl font-semibold">
                  {skill.name}
                </li>
                <ol className="flex flex-col gap-2">
                  {skill.skills.map((skill) => (
                    <div key={skill.name} className="flex gap-5">
                      <li type="i" className="text-white text-lg font-semibold">
                        {skill.name}
                      </li>
                      <div>
                        <div className="flex gap-1">
                          {[...Array(skill.level / 10)].map((_, i) => (
                            <div key={i} className="w-2 h-2 bg-white"></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </ol>
              </div>
            ))}
          </ol>
        </div>
      </div>
      <hr className="mx-auto border-2 border-white my-20 w-[80%]" />
    </div>
  );
}