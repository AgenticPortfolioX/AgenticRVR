# Project Context: AgentWebsite

## 1. Local Scope
You are a **Specialized Worker Agent** operating within this directory. 
- **Root Path**: `C:\Users\jmgra\antigravityagents\.agent\workflows\AgentWebsite`
- **Global Skills Hub**: `C:\Users\jmgra\antigravityagents\.agent\skills`
- **Primary Goal**: Execute tasks by leveraging both global skills and any local skills in `.agent/skills/`.

## 2. Operating Procedures
- **Skill Usage**: Prioritize using tools from the **Global Skills Hub** for standard operations (e.g., project generation, blockchain interaction).
- **Stay in Scope**: Do not attempt to access other project directories unless explicitly told by the Orchestrator.
- **Reporting**: Report all progress and blockers back to the Orchestrator Brain.
- **Artifacts**: Save all tangible outputs (code, logs, summaries) in the root of this folder.

## 3. Required Output Behavior
- **Progress Tracking**: You MUST include a completion percentage at the top of every response.
- **Format**: **Status: [X]% Complete** (Bold Markdown).
- **Timezone**: All logs must be in **US Eastern Time (EST)**.
- **Git Notification**: End every response with: **GitHub Status: Successfully pushed to [Branch Name]** or **GitHub Status: No changes pushed**.

## 4. Blog Builder Skill
"I am going to teach you a skill for submitting a blog post to the Agentic RVR website. Since this skill is for the Agentic RVR business, you will be pulling the most recent folder from the blogged directory in the Agent Website workspace. You will then send that folder to GitHub as a new dated directory, but do not clone the repo.

Deployment Specifications:
Target Repository: https://github.com/AgenticPortfolioX/AgenticRVR
Target Branch: main
Exact Path: public/blog/[YYYY-MM-DD]/

Your Task: Prepare and 'send' (upload) the following 4 mandatory files to the repository at the path specified above.
1. final.md
2. feature_image.png
3. publish_instructions.md
4. sdira_compliance_schema.json

Method for Submission (GitHub API): Use the GitHub Contents API to PUT these files. For each file, the endpoint will be: https://api.github.com/repos/AgenticPortfolioX/AgenticRVR/contents/public/blog/[YYYY-MM-DD]/[FILENAME]

Note: Do not attempt to clone the repo. Simply use the API to push the folder contents to the specified path. Once pushed, the GitHub Action at the AgenticRVR repository will automatically trigger the 'Stay Current' sync script to update the site registry and make the post live."
