import { code, issues, pullRequests, actions, projects, wiki, security, insights } from "../assets";

export const menuItems = [
    {
      id: 1,
      img:code,
      text: "Code",
      href: "https://github.com/facebook/react"
    },
    {
      id: 2,
      img:issues,
      text: "Issues",
        no: 625,
      numFlag: true,
      href: ""
    },
    {
      id: 3,
      img:pullRequests,
      text: "Pull Requests",
        no: 208,
        numFlag: true,
      href: "https://github.com/facebook/react/pulls"
    },
    {
      id: 4,
      img:actions,
      text: "Actions",
      href: "https://github.com/facebook/react/actions"
    },
    {
      id: 5,
      img:projects,
      text: "Projects",
      href: "https://github.com/facebook/react/projects"
    },
    {
      id: 6,
      img:wiki,
      text: "Wiki",
      href: "https://github.com/facebook/react/wiki"
    },
    {
      id: 7,
      img:security,
      text: "Security",
      href: "https://github.com/facebook/react/security"
    },
    {
      id: 8,
      img:insights,
      text: "Insights",
      href: "https://github.com/facebook/react/pulse"
    }
  ]