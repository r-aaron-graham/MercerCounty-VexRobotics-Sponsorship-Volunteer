<!-- read.md -->

# Mercer County VEX Robotics – Interactive Journey Page

This repository contains a simple, static website designed for GitHub Pages that
brings the Mercer County, West Virginia VEX Robotics journey to life. It is
intended to help families, volunteers, and local companies understand:

- What VEX Robotics is
- How the Mercer County robotics journey works (from discovery to world events)
- Where volunteers and sponsors fit into the flow

> **Note:** This is a community-built informational page inspired by Mercer
> County Schools robotics programs. It is not an official district website.

---

## Files

- `index.html` – Main webpage (structure and content)
- `style.css` – Visual styles that make it look clean and school-appropriate
- `script.js` – Interactive logic for the flow diagram, pop-ups, arrows, and glossary
- `read.md` – This documentation file

---

## Features

1. **Interactive Flow Diagram**
   - Each box in the flow represents a step in the Mercer County VEX Robotics journey.
   - Hovering over a step:
     - Highlights the box
     - Activates moving arrows from that step to the next ones
     - Updates a detail panel with:
       - What happens at that step
       - Who is involved (audience)
       - A **focused glossary** with key terms for that step only
       - A list of **next steps** showing where the flow can go next

2. **Glossary by Step**
   - The glossary updates automatically so users only see terms relevant to the
     step they are exploring.
   - Terms are written in clear language so families, students, and sponsors can
     follow along without prior robotics experience.

3. **Persuasive Content**
   - Sections explain why VEX Robotics matters for students, families, and local companies.
   - The “Get Involved” section outlines specific ways to volunteer, mentor, or sponsor.
   - The wording emphasizes real outcomes: skills, confidence, state/world competition,
     and long-term college and career readiness.

4. **Clean, School-Style Design**
   - Header with Mercer-style title and navigation.
   - Soft blue and gold color palette, subtle shadows, and rounded corners.
   - Responsive layout that works on desktop and mobile.

---

## How to Run Locally

1. Clone or download the repository.
2. Make sure all four files (`index.html`, `style.css`, `script.js`, `read.md`) are in the same folder.
3. Open `index.html` in a web browser (you can double-click it or drag it into a browser window).

You should see the full page, with hover behavior, moving arrows, and the glossary panel working.

---

## How to Publish on GitHub Pages

1. Create a new repository in your GitHub account.
   - Example name: `mercer-vex-robotics`
2. Upload the four files:
   - `index.html`
   - `style.css`
   - `script.js`
   - `read.md`
3. Commit the changes.
4. In your repository, go to **Settings → Pages**.
5. Under **Build and deployment**, choose:
   - Source: `Deploy from a branch`
   - Branch: `main` (or `master`) and folder: `/ (root)`
6. Click **Save**.
7. GitHub will build the site and give you a URL such as:
   - `https://your-username.github.io/mercer-vex-robotics/`

Share that link with families, volunteers, and local companies.

---

## Customizing for Mercer County

You can customize the page further to match live details:

- Update text in `index.html` to include:
  - Specific schools and teams (e.g., school names, team numbers)
  - Current season dates for league nights, county championships, or state qualifiers
  - Links to official Mercer County Schools pages or robotics information
- Extend the `stepData` object in `script.js`:
  - Add more glossary terms
  - Add additional steps (for example: “Notebook & Documentation” or “Community Outreach”)
  - Adjust the `next` arrays to reflect new flows

Keep any factual statements accurate to the current season and official
communications from Mercer County Schools and event organizers.

---

## Credits

- Inspired by VEX Robotics programs and competitions in Mercer County, West Virginia.
- Designed to support students, families, mentors, and local businesses
  who want to grow robotics opportunities in the region.
