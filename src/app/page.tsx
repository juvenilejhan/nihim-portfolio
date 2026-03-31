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
  reflection?: string;
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

type IconProps = {
  className?: string;
};

function MailIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={["h-4 w-4", className].filter(Boolean).join(" ")}
    >
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        ry="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <polyline
        points="4 7 12 12 20 7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FacebookIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={["h-4 w-4", className].filter(Boolean).join(" ")}
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="4"
        ry="4"
        fill="currentColor"
        opacity="0.12"
      />
      <path
        d="M14.5 7H13a3 3 0 0 0-3 3v2H8.5v3H10v5h3v-5h2.1l.9-3H13v-2a1 1 0 0 1 1-1h1.5V7Z"
        fill="currentColor"
      />
    </svg>
  );
}

const profileImage = "/nihim-profile.jpg";

const student = {
  name: "Md. Tasnim Hossain Nihim",
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
    period: "2026 " + "–" + " Present",
    location: "Dhaka, Bangladesh",
    details: [
      "Pre-clinical foundation in anatomy, physiology, and biochemistry.",
      "Early exposure to professionalism, ethics, and communication skills.",
    ],
  },
  {
    institution: "Notre Dame College",
    program: "Pre-medical / Higher secondary education",
    period: "2023 " + "–" + " 2024",
    location: "Dhaka, Bangladesh",
    details: [
      "Achieved GPA 5.00 in HSC (Science) with strong performance in Biology, Chemistry, and Physics.",
      "Completed Higher Secondary Certificate (Science) at a leading college in Dhaka.",
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
    skills: ["Bangla " + "–" + " native", "English " + "–" + " fluent"],
  },
];

const clinicalVolunteer: ExperienceItem[] = [];

const researchContributions: ExperienceItem[] = [];

const leadershipActivities: ExperienceItem[] = [
  {
    organisation: "Medical Student Cultural Club (Demo)",
    role: "First-year representative (Demo)",
    period: "2026 " + "–" + " Present",
    location: "Sir Salimullah Medical College",
    description:
      "Helps coordinate communication between first-year students and club leaders, sharing information about events and encouraging participation.",
    highlights: [
      "Supported the organisation of welcome activities for new students.",
      "Practised teamwork, public speaking, and basic event coordination skills.",
    ],
  },
  {
    organisation: "College Health Awareness Campaign (Demo)",
    role: "Volunteer organiser (Demo)",
    period: "Planned for a future semester",
    location: "Dhaka, Bangladesh",
    description:
      "Demo entry describing involvement in planning a small health awareness activity with classmates, focusing on preventive health messages.",
    highlights: [
      "Developed confidence in taking initiative within a student group.",
      "Learned how to break down health topics into clear, understandable messages.",
    ],
  },
];

const publications: string[] = [];

const blogPosts: BlogPost[] = [
  {
    title: "Starting Medical School: Building Strong Foundations",
    date: "2026-01-15",
    summary:
      "Reflections on the transition into medical school, early impressions of pre-clinical subjects, and setting realistic goals for growth.",
  },
  {
    title: "Learning to Learn in Medicine",
    date: "2026-03-10",
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
        className="scroll-mt-28 grid gap-10 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-sky-500/10 backdrop-blur md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]"
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
          <div className="relative h-40 w-40 rounded-full bg-linear-to-br from-sky-400 via-sky-300 to-emerald-300 p-0.5 shadow-lg shadow-sky-500/40">
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
      <section
        id="education"
        className="scroll-mt-28 space-y-6 rounded-3xl border border-white/10 p-6 section-surface-1"
      >
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

      {/* Skills & Certifications */}
      <section
        id="skills"
        className="scroll-mt-28 space-y-6 rounded-3xl border border-white/10 p-6 section-surface-2"
      >
        <SectionTitle eyebrow="Strengths" label="Skills & certifications" />
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

      {/* Clinical & Volunteer Experience */}
      <section
        id="clinical-volunteer"
        className="scroll-mt-28 space-y-6 rounded-3xl border border-white/10 p-6 section-surface-3"
      >
        <SectionTitle
          eyebrow="Real-world exposure"
          label="Clinical & volunteer experience"
        />
        {clinicalVolunteer.length === 0 ? (
          <p className="text-sm text-slate-300">
            Early experiences such as hospital volunteering, community health
            camps, blood donation drives, or health awareness events can be
            showcased here. Even short-term roles demonstrate commitment to
            patient care and community service.
          </p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {clinicalVolunteer.map((item) => (
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

      {/* Research Contributions */}
      <section
        id="research"
        className="scroll-mt-28 space-y-6 rounded-3xl border border-white/10 p-6 section-surface-4"
      >
        <SectionTitle
          eyebrow="Academic development"
          label="Research contributions"
        />
        {researchContributions.length === 0 ? (
          <p className="text-sm text-slate-300">
            Research projects, audits, and scholarly activities will be added
            here as they develop. This space can highlight conference posters,
            student journals, and future research collaborations.
          </p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {researchContributions.map((item) => (
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

      {/* Leadership & Activities */}
      <section
        id="leadership"
        className="scroll-mt-28 space-y-6 rounded-3xl border border-white/10 p-6 section-surface-5"
      >
        <SectionTitle
          eyebrow="Roles & impact"
          label="Leadership & activities"
        />
        {leadershipActivities.length === 0 ? (
          <p className="text-sm text-slate-300">
            Leadership roles, student organizations, committee work, and other
            co-curricular activities can be highlighted here, with a focus on
            responsibilities, impact, and skills developed.
          </p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {leadershipActivities.map((item) => (
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

      {/* Personal Interests */}
      <section
        id="personal-interests"
        className="scroll-mt-28 space-y-6 rounded-3xl border border-white/10 p-6 section-surface-6"
      >
        <SectionTitle eyebrow="Beyond academics" label="Personal interests" />
        <p className="text-sm text-slate-300">
          Outside of medicine, I enjoy football, photography, music, and
          reading. These interests help me stay balanced, creative, and
          connected with people beyond the classroom.
        </p>
      </section>

      {/* Publications */}
      <section
        id="publications"
        className="scroll-mt-28 space-y-6 rounded-3xl border border-white/10 p-6 section-surface-7"
      >
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

      {/* Reflections */}
      <section
        id="reflections"
        className="scroll-mt-28 space-y-6 rounded-3xl border border-white/10 p-6 section-surface-8"
      >
        <SectionTitle
          eyebrow="Reflections"
          label="Reflections & learning notes"
        />
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
      <section
        id="contact"
        className="scroll-mt-28 space-y-6 rounded-3xl border border-white/10 p-6 section-surface-1"
      >
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
                className="inline-flex items-center gap-2 text-sm text-sky-300 underline underline-offset-4 hover:text-sky-200"
              >
                <MailIcon />
                <span>nihim1123@gmail.com</span>
              </a>
            </div>
          </div>
          <div className="space-y-3 text-sm text-slate-200">
            <p className="font-medium text-sky-200">Profiles & social</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.facebook.com/hossain.nihim"
                  className="inline-flex items-center gap-2 text-sky-300 underline underline-offset-4 hover:text-sky-200"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FacebookIcon />
                  <span>Facebook (MD. Tasnim Hossain Nihim)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
