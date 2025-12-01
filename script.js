// script.js

// Step data model: title, description, audience, glossary, next step IDs
const stepData = {
  discover: {
    title: "Discover VEX Robotics",
    description:
      "Students and families learn that Mercer County offers VEX Robotics through schools, county leagues, and community clubs. This is where curiosity turns into a first step.",
    audience: "Students, families, and community members",
    glossary: [
      {
        term: "VEX Robotics",
        def: "A hands-on robotics program where students build and program robots to play a yearly game."
      },
      {
        term: "STEM",
        def: "Science, Technology, Engineering, and Mathematics—core areas robotics helps develop."
      },
      {
        term: "Mercer County League",
        def: "Local robotics league events that bring together Mercer County teams to compete and practice."
      }
    ],
    next: ["join-team", "family-volunteer", "sponsor-company"]
  },
  "join-team": {
    title: "Join a Mercer County Team",
    description:
      "Students connect with a school or community team, meet their mentors, and see the current season’s game. They learn basic safety, expectations, and team roles.",
    audience: "Students and coaches",
    glossary: [
      {
        term: "Team",
        def: "A group of students and mentors who work together to design, build, and program a robot."
      },
      {
        term: "Coach / Mentor",
        def: "An adult who guides the team, helps with logistics, and supports learning."
      },
      {
        term: "Game Manual",
        def: "Official rules and scoring details for the current VEX Robotics game."
      }
    ],
    next: ["design-build", "program"]
  },
  "design-build": {
    title: "Design & Build the Robot",
    description:
      "Teams brainstorm strategies, sketch robot ideas, and build using VEX IQ or V5 parts. They test mechanisms that can score in the current game.",
    audience: "Team members and mentors",
    glossary: [
      {
        term: "VEX IQ / V5",
        def: "Two VEX platforms. VEX IQ is plastic snap-together; V5 uses metal structure and a more advanced control system."
      },
      {
        term: "Engineering Design Process",
        def: "Plan, build, test, and improve—repeating this cycle as the robot gets better."
      },
      {
        term: "Subsystem",
        def: "A part of the robot, such as the drive base, intake, or scoring arm."
      }
    ],
    next: ["program", "league-play"]
  },
  program: {
    title: "Program & Test",
    description:
      "Students write code for autonomous routines and tune driver control. They test how the robot responds on the field and adjust based on performance.",
    audience: "Programmers, drivers, and mentors",
    glossary: [
      {
        term: "Autonomous Period",
        def: "A time in the match when the robot moves only using pre-written code, with no driver control."
      },
      {
        term: "Driver Control",
        def: "Portion of the match where students directly control the robot using a handheld controller."
      },
      {
        term: "Skills Challenge",
        def: "Individual attempts to score as many points as possible in driving and programming runs."
      }
    ],
    next: ["league-play"]
  },
  "league-play": {
    title: "League Nights & Local Events",
    description:
      "Teams from across Mercer County meet for league nights and local tournaments. Students practice, run Skills Challenge matches, and refine strategies.",
    audience: "Teams, families, volunteers, and event staff",
    glossary: [
      {
        term: "League Night",
        def: "A scheduled event where teams play multiple matches over the season instead of one long tournament."
      },
      {
        term: "Match",
        def: "A short game where alliances of teams compete to score points under the game rules."
      },
      {
        term: "Judging",
        def: "Conversations and reviews where volunteers evaluate design notebooks, interviews, and overall team process."
      }
    ],
    next: ["county-champ", "sponsor-company"]
  },
  "county-champ": {
    title: "Mercer County Championship",
    description:
      "Top-performing teams from league events advance to a county championship or invitational, often held in a Mercer County school gym.",
    audience: "Teams that advanced from league play",
    glossary: [
      {
        term: "Championship",
        def: "End-of-season event where top teams compete for awards and higher-level qualification spots."
      },
      {
        term: "Award",
        def: "Recognition given for performance, design, teamwork, or other achievements."
      },
      {
        term: "Qualification",
        def: "Earning the right to attend a higher-level tournament, such as state or world championships."
      }
    ],
    next: ["state-champ"]
  },
  "state-champ": {
    title: "West Virginia State Championship",
    description:
      "Mercer County teams that qualify travel to the West Virginia state championship, competing against teams from across the state.",
    audience: "Qualified teams and their supporters",
    glossary: [
      {
        term: "State Championship",
        def: "A statewide event with the strongest teams from local and regional competitions."
      },
      {
        term: "Ranking",
        def: "How teams are ordered based on their performance during qualification matches."
      },
      {
        term: "Alliance Selection",
        def: "Process where top-ranked teams choose partners for elimination rounds."
      }
    ],
    next: ["worlds"]
  },
  worlds: {
    title: "VEX Robotics World Championship",
    description:
      "Exceptional teams may earn an invitation to the VEX Robotics World Championship, where students from around the globe compete and collaborate.",
    audience: "World-qualifying teams and their communities",
    glossary: [
      {
        term: "World Championship",
        def: "International event featuring the highest-performing teams from many regions and countries."
      },
      {
        term: "Division",
        def: "A group of teams at Worlds that compete on their own fields before top alliances advance."
      },
      {
        term: "Excellence in STEM",
        def: "Recognition that teams are demonstrating strong skills in all areas—coding, design, teamwork, and outreach."
      }
    ],
    next: ["beyond-robotics"]
  },
  "family-volunteer": {
    title: "Family Volunteers",
    description:
      "Parents and guardians help with transportation, snacks, team fundraising, event setup, and encouragement—making it possible for students to fully participate.",
    audience: "Parents, guardians, and family members",
    glossary: [
      {
        term: "Volunteer Role",
        def: "A specific job at an event, such as field reset, queuing, hospitality, or scorekeeping."
      },
      {
        term: "Support Crew",
        def: "Informal term for family members who help keep the team organized and ready to compete."
      },
      {
        term: "Service Hours",
        def: "Hours of community service that students may log by volunteering at events."
      }
    ],
    next: ["league-play", "county-champ"]
  },
  "sponsor-company": {
    title: "Local Sponsors & Partners",
    description:
      "Businesses provide financial support, donate materials, or share expertise. Sponsorships reduce barriers so every student who wants to participate has a chance.",
    audience: "Local companies, civic groups, and community partners",
    glossary: [
      {
        term: "Team Sponsorship",
        def: "Financial or in-kind support given to an individual team or group of teams."
      },
      {
        term: "In-Kind Donation",
        def: "Non-cash contributions such as tools, materials, shirts, or printing services."
      },
      {
        term: "Community Partnership",
        def: "An ongoing relationship where a company and school or club collaborate around STEM education."
      }
    ],
    next: ["league-play", "county-champ", "state-champ"]
  },
  "beyond-robotics": {
    title: "Beyond Robotics",
    description:
      "Students carry forward confidence, problem-solving skills, and collaboration experience into college, careers, and future leadership in Mercer County and beyond.",
    audience: "Current students, alumni, and long-term partners",
    glossary: [
      {
        term: "College & Career Readiness",
        def: "Preparation that helps students succeed after high school in higher education or the workforce."
      },
      {
        term: "Transferable Skills",
        def: "Skills such as communication, teamwork, and critical thinking that apply in many fields."
      },
      {
        term: "STEM Pipeline",
        def: "The path from early interest in STEM through advanced education and into technical careers."
      }
    ],
    next: []
  }
};

// Map IDs to friendly titles for "next steps" display
function getStepTitle(id) {
  return stepData[id]?.title || id;
}

function clearActiveStates() {
  document.querySelectorAll(".flow-step").forEach((el) => {
    el.classList.remove("active-step");
  });
  document.querySelectorAll(".arrow").forEach((arrow) => {
    arrow.classList.remove("arrow-active");
  });
}

function showStepDetails(stepId) {
  const step = stepData[stepId];
  if (!step) return;

  const titleEl = document.getElementById("detail-title");
  const descEl = document.getElementById("detail-description");
  const audienceEl = document.getElementById("detail-audience");
  const glossaryList = document.getElementById("glossary-list");
  const nextStepsList = document.getElementById("next-steps-list");

  titleEl.textContent = step.title;
  descEl.textContent = step.description;
  audienceEl.textContent = step.audience || "";

  // Glossary for this step only
  glossaryList.innerHTML = "";
  if (Array.isArray(step.glossary) && step.glossary.length > 0) {
    step.glossary.forEach((item) => {
      const li = document.createElement("li");
      const strong = document.createElement("strong");
      strong.textContent = item.term + ": ";
      const span = document.createElement("span");
      span.textContent = item.def;
      li.appendChild(strong);
      li.appendChild(span);
      glossaryList.appendChild(li);
    });
  } else {
    const li = document.createElement("li");
    li.textContent = "No glossary terms for this step yet.";
    glossaryList.appendChild(li);
  }

  // Next steps (flow directions)
  nextStepsList.innerHTML = "";
  if (Array.isArray(step.next) && step.next.length > 0) {
    step.next.forEach((nextId) => {
      const li = document.createElement("li");
      li.textContent = getStepTitle(nextId);
      nextStepsList.appendChild(li);
    });
  } else {
    const li = document.createElement("li");
    li.textContent = "This is a natural place to celebrate what students have accomplished and plan what comes next.";
    nextStepsList.appendChild(li);
  }

  // Visual states
  clearActiveStates();

  // Highlight the current step card
  const stepEl = document.querySelector(`.flow-step[data-step-id="${stepId}"]`);
  if (stepEl) {
    stepEl.classList.add("active-step");
  }

  // Highlight arrows leaving this step
  document.querySelectorAll(`.arrow[data-from="${stepId}"]`).forEach((arrow) => {
    arrow.classList.add("arrow-active");
  });
}

// Initialize listeners
document.addEventListener("DOMContentLoaded", () => {
  const stepElements = document.querySelectorAll(".flow-step");

  stepElements.forEach((el) => {
    const stepId = el.getAttribute("data-step-id");
    el.addEventListener("mouseenter", () => showStepDetails(stepId));
    el.addEventListener("focus", () => showStepDetails(stepId));
    el.addEventListener("click", () => showStepDetails(stepId));
  });

  // Start with the first step selected for clarity
  showStepDetails("discover");
});
