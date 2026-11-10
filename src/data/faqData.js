export const faqs = [
    {
        id: "stack",
        question: "What technologies and stack do you specialize in?",
        answer:
            "My primary stack centers on modern React and JavaScript on the frontend, paired with Elixir / Phoenix or Node.js on the backend. I have experience building full-stack applications with token authentication, RESTful APIs, TailwindCSS for responsive interfaces, and containerizing services with Docker.",
    },
    {
        id: "availability",
        question: "Are you available for junior software developer roles?",
        answer:
            "Yes, I am actively seeking junior developer roles based in Cape Town, South Africa, as well as hybrid or remote opportunities. I bring hands-on project experience, strong problem-solving skills, and a proven track record of continuous learning.",
    },
    {
        id: "trello-architecture",
        question: "What was the technical focus of your Trello Clone flagship project?",
        answer:
            "The Trello Clone was built to solve state synchronization and real-time board interaction. The frontend leverages React and Redux for drag-and-drop state updates, while the backend uses Elixir and Phoenix for lightweight concurrency, token-based authentication, and efficient Postgres data modeling, containerized with Docker and deployed on Render.",
    },
    {
        id: "vinedoctor",
        question: "What is VineDoctor and what technical challenges did it involve?",
        answer:
            "VineDoctor is a crop diagnosis tool that interfaces with AI models via OpenRouter to analyze vineyard diseases. A major milestone in the project was architectural: decoupling API calls from client-side React into an Express/Node.js backend proxy to securely conceal credentials and prepare for AWS cloud deployment.",
    },
];
