import Image from "next/image";

type EducationItem = {
  institution: string;
  program: string;
  period: string;
  location?: string;
  details?: string[];
};

type ExperienceItem = {
  organisation: string;
  role: string;
  period: string;
  location?: string;
  description: string;
  highlights?: string[];
};

type SkillCategory = {
  name: string;
  skills: string[];
};

type BlogPost = {
  title: string;
  date: string;
  summary: string;
};

const profileImage = "/nihim-profile.jpg";

const student = {
  name: "MD. Tasnim Hossain Nihim",
  title: "1st-year MBBS Student",
  institution: "Sir Salimullah Medical College",
  year: "1st Year MBBS",
  location: "Dhaka, Bangladesh",
  summary:
    "First-year MBBS student at Sir Salimullah Medical College in Dhaka, Bangladesh, building a strong foundation in the basic sciences while staying closely connected to community health.",
  interests: [
    "Community health and public health in Bangladesh",
    "Developing strong clinical reasoning and communication",
    "Medical education and lifelong learning",
  ],
};

const education: EducationItem[] = [
  {
    institution: "Sir Salimullah Medical College",
    program: "MBBS, Bachelor of Medicine and Bachelor of Surgery",
    period: "20XX " + "–" + " Present",
    location: "Dhaka, Bangladesh",
    details: [
      "Pre-clinical foundation in anatomy, physiology, and biochemistry.",
      "Early exposure to professionalism, ethics, and communication skills.",
    ],
  },
  {
    institution: "Previous Institution (Science Stream / Pre-med)",
    program: "Pre-medical / Higher secondary education",
    period: "20XX " + "–" + " 20XX",
    location: "City, Country",
    details: [
      "Strong grounding in biology, chemistry, and physics.",
      "Participation in academic or community activities related to health.",
    ],
  },
];

const skills: SkillCategory[] = [
  {
    name: "Clinical & Pre-clinical Interests",
    skills: [
      "Understanding of core anatomy, physiology, and biochemistry concepts",
      "Developing clinical reasoning through case-based discussions",
      "Interest in bedside examination and patient communication",
    ],
  },
  {
    name: "Research & Academic Skills",
    skills: [
      "Basic literature search and critical reading of articles",
      "Familiarity with evidence-based medicine principles",
      "Interest in future participation in student research projects",
    ],
  },
  {
    name: "Soft Skills",
    skills: [
      "Empathetic communication and active listening",
      "Teamwork and collaboration in small-group learning",
      "Time management and self-directed learning",
    ],
  },
  {
    name: "Languages & Other Interests",
    skills: [
      "Spoken and written proficiency in English (and your local language)",
      "Interest in community outreach, public speaking, or teaching",
      "Hobbies that support balance and well-being (e.g., sports, music)",
    ],
  },
];

const projects: ExperienceItem[] = [];

const volunteerExperience: ExperienceItem[] = [];

const publications: string[] = [];

const blogPosts: BlogPost[] = [
  {
    title: "Starting Medical School: Building Strong Foundations",
    date: "20XX-09-01",
    summary:
      "Reflections on the transition into medical school, early impressions of pre-clinical subjects, and setting realistic goals for growth.",
  },
  {
    title: "Learning to Learn in Medicine",
    date: "20XX-11-15",
    summary:
      "Thoughts on note-taking, active learning strategies, and balancing depth of understanding with exam preparation.",
  },
];

function SectionTitle({ label, eyebrow }: { label: string; eyebrow: string }) {
  return (
    <header className="mb-6 flex flex-col gap-1">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300/90">
        {eyebrow}
      </span>
      <h2 className="text-2xl font-semibold tracking-tight text-slate-50">
        {label}
      </h2>
    </header>
  );
}

export default function Home() {
  return (
    <div className="space-y-16">
      {/* About / Hero */}
      <section
        id="about"
        className="grid gap-10 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-sky-500/10 backdrop-blur md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]"
      >
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300/90">
            About
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            {student.name || "Medical student"}
          </h1>
          <p className="text-sm font-medium text-sky-200">
            {student.title}
            {student.institution
              ? ` 
            · ${student.institution}`
              : null}
            {student.year
              ? ` 
            · ${student.year}`
              : null}
          </p>
          {student.location && (
            <p className="text-sm text-slate-300">{student.location}</p>
          )}
          <p className="mt-4 text-sm leading-relaxed text-slate-200">
            {student.summary}
          </p>
          {student.interests?.length ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {student.interests.map((interest) => (
                <span
                  key={interest}
                  className="rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium text-sky-200 ring-1 ring-sky-400/30"
                >
                  {interest}
                </span>
              ))}
            </div>
          ) : null}
        </div>

        <div className="flex items-center justify-center">
          <div className="relative h-40 w-40 rounded-full bg-gradient-to-br from-sky-400 via-sky-300 to-emerald-300 p-[2px] shadow-lg shadow-sky-500/40">
            <Image
              src={profileImage}
              alt={student.name ? `Portrait of ${student.name}` : "Profile"}
              fill
              sizes="160px"
              priority
              className="rounded-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="space-y-6">
        <SectionTitle eyebrow="Academic path" label="Education & training" />
        <div className="grid gap-4 md:grid-cols-2">
          {education.map((item) => (
            <article
              key={`${item.institution}-${item.period}`}
              className="flex flex-col justify-between rounded-2xl border border-white/10 bg-slate-900/60 p-5 shadow-sm shadow-sky-500/10"
            >
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-slate-50">
                  {item.program}
                </h3>
                <p className="text-xs font-medium text-sky-200">
                  {item.institution}
                </p>
                <p className="text-xs text-slate-400">
                  {item.period}
                  {item.location
                    ? ` 
                  · ${item.location}`
                    : null}
                </p>
              </div>
              {item.details?.length ? (
                <ul className="mt-3 space-y-1 text-xs text-slate-300">
                  {item.details.map((detail) => (
                    <li key={detail} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      {/* Skills & Interests */}
      <section id="skills" className="space-y-6">
        <SectionTitle eyebrow="Strengths" label="Skills & interests" />
        <div className="grid gap-4 md:grid-cols-2">
          {skills.map((category) => (
            <article
              key={category.name}
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 shadow-sm shadow-sky-500/10"
            >
              <h3 className="text-sm font-semibold text-slate-50">
                {category.name}
              </h3>
              <ul className="mt-3 space-y-1.5 text-xs text-slate-300">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Projects / Research */}
      <section id="projects" className="space-y-6">
        <SectionTitle
          eyebrow="Academic development"
          label="Projects & research"
        />
        {projects.length === 0 ? (
          <p className="text-sm text-slate-300">
            Project work and research experiences will be added here as they
            develop. This space can highlight student conferences, audits,
            quality-improvement projects, and future research.
          </p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((item) => (
              <article
                key={`${item.organisation}-${item.role}-${item.period}`}
                className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 shadow-sm shadow-sky-500/10"
              >
                <h3 className="text-sm font-semibold text-slate-50">
                  {item.role}
                </h3>
                <p className="text-xs font-medium text-sky-200">
                  {item.organisation}
                </p>
                <p className="mt-1 text-xs text-slate-400">{item.period}</p>
                <p className="mt-2 text-xs text-slate-300">
                  {item.description}
                </p>
                {item.highlights?.length ? (
                  <ul className="mt-2 space-y-1 text-xs text-slate-300">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Volunteer / Clinical Experience */}
      <section id="experience" className="space-y-6">
        <SectionTitle
          eyebrow="Real-world exposure"
          label="Volunteer & clinical experience"
        />
        {volunteerExperience.length === 0 ? (
          <p className="text-sm text-slate-300">
            Early experiences such as hospital volunteering, community health
            camps, blood donation drives, or health awareness events can be
            showcased here. Even short-term roles demonstrate commitment to
            patient care and community service.
          </p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {volunteerExperience.map((item) => (
              <article
                key={`${item.organisation}-${item.role}-${item.period}`}
                className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 shadow-sm shadow-sky-500/10"
              >
                <h3 className="text-sm font-semibold text-slate-50">
                  {item.role}
                </h3>
                <p className="text-xs font-medium text-sky-200">
                  {item.organisation}
                </p>
                <p className="mt-1 text-xs text-slate-400">{item.period}</p>
                <p className="mt-2 text-xs text-slate-300">
                  {item.description}
                </p>
                {item.highlights?.length ? (
                  <ul className="mt-2 space-y-1 text-xs text-slate-300">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Publications */}
      <section id="publications" className="space-y-6">
        <SectionTitle
          eyebrow="Academic output"
          label="Publications & presentations"
        />
        {publications.length === 0 ? (
          <p className="text-sm text-slate-300">
            As an early medical student, it is normal not to have publications
            yet. This section can later highlight conference posters, student
            journals, and research collaborations as they develop.
          </p>
        ) : (
          <ul className="space-y-2 text-sm text-slate-200">
            {publications.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </section>

      {/* Blog / Reflections */}
      <section id="blog" className="space-y-6">
        <SectionTitle eyebrow="Reflections" label="Blog & learning notes" />
        <div className="grid gap-4 md:grid-cols-2">
          {blogPosts.map((post) => (
            <article
              key={post.title}
              className="flex flex-col justify-between rounded-2xl border border-white/10 bg-slate-900/60 p-5 shadow-sm shadow-sky-500/10"
            >
              <div className="space-y-2">
                <p className="text-xs text-slate-400">
                  {new Date(post.date).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
                <h3 className="text-sm font-semibold text-slate-50">
                  {post.title}
                </h3>
                <p className="text-xs text-slate-300">{post.summary}</p>
              </div>
              <p className="mt-3 text-xs text-sky-200/80">
                Full posts can be added later as separate pages or markdown
                files.
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="space-y-6">
        <SectionTitle eyebrow="Get in touch" label="Contact & links" />
        <div className="grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
          <div className="space-y-3 text-sm text-slate-200">
            <p>
              For academic opportunities, research collaborations, or general
              questions about medical school, feel free to reach out via email
              or connect on professional networks.
            </p>
            <div className="space-y-1 text-sm">
              <p className="font-medium text-sky-200">Email</p>
              <a
                href="mailto:nihim1123@gmail.com"
                className="text-sm text-sky-300 underline underline-offset-4 hover:text-sky-200"
              >
                nihim1123@gmail.com
              </a>
            </div>
          </div>
          <div className="space-y-3 text-sm text-slate-200">
            <p className="font-medium text-sky-200">Profiles & social</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.facebook.com/hossain.nihim"
                  className="text-sky-300 underline underline-offset-4 hover:text-sky-200"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook (MD. Tasnim Hossain Nihim)
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sky-300 underline underline-offset-4 hover:text-sky-200"
                >
                  Optional: Add LinkedIn or research profiles in the future
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
