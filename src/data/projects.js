import petitionImg from "../images/petition.jpg";
import chatbotImg from "../images/chatbot.webp";
import communityImg from "../images/community.png";

export const projects = [
  {
    id: "ai-petition-system",
    title: "AI Based Petition Management System",
    tagline: "Automating public grievance routing and classification with BERT-based NLP",
    description: "An AI-powered web application for automated petition and grievance management, enabling citizens to submit, track, and monitor complaints through a centralized platform.",
    overview: "Developed to replace slow manual processes, this application uses a BERT-based Natural Language Processing framework to automatically analyze and categorize incoming petitions. Once classified, the grievance is immediately routed to the relevant government or organizational departments. Role-based dashboards provide clean tracking interfaces for citizens and administrators alike.",
    features: [
      "Automated petition and grievance submission pipeline",
      "BERT-based NLP model for high-accuracy text classification",
      "Dynamic route assignment based on identified categories",
      "Role-based administrative and citizen dashboards",
      "Real-time status tracking and automated priority flags"
    ],
    tech: ["Python", "BERT", "NLP", "React.js", "Node.js", "MySQL", "REST APIs"],
    workingConcept: "When a citizen files a petition, the system feeds the text through an integrated BERT model running in a Python backend. The model classifies the grievance and maps it to a department code in MySQL, which then triggers real-time updates on React dashboards via Node.js APIs.",
    role: [
      "Developed the AI-powered web application using React.js, Node.js, and Python",
      "Implemented BERT-based NLP model to automatically classify petitions and route them",
      "Designed clean, role-based dashboards and status tracking modules for users and administrators"
    ],
    impact: [
      "Streamlined grievance management under a unified centralized platform",
      "Eliminated manual routing bottlenecks and improved accuracy through automated categorization",
      "Enhanced transparency and communication between authorities and citizens"
    ],
    futureEnhancements: [
      "Multi-language support for diverse citizen populations",
      "Automatic summarization of long petitions",
      "Voice petition submission"
    ],
    image: petitionImg,
    github: "https://github.com/venith-31",
  },
  {
    id: "rent-it-ai",
    title: "Rent It AI Assistant",
    tagline: "Conversational tenant inquiry assistant powered by LLMs and Nest JS",
    description: "An Al-powered conversational chatbot module and robust backend integration for the Rent It property management platform.",
    overview: "This project introduces smart chatbot functionalities into the Rent It ecosystem, facilitating seamless, 24/7 client service for real-estate postings. By combining custom LLM integrations and conversational AI, users receive natural-sounding responses to rental queries. Built upon a powerful, type-safe Nest JS backend interacting with a reliable PostgreSQL database via Prisma ORM.",
    features: [
      "Al-powered chatbot module with a conversational interface",
      "Automated prompt replies to common tenant FAQs",
      "Seamless backend integration using Nest JS and Python modules",
      "PostgreSQL database query optimization using Prisma ORM",
      "Session-based chat tracking and message retention"
    ],
    tech: ["React.js", "Nest JS", "PostgreSQL", "Prisma", "Python", "Conversational AI"],
    workingConcept: "User queries sent from the React UI are analyzed by our Conversational AI backend. Large language prompts are processed using Nest JS modules and Python, reading static listing data stored in PostgreSQL with Prisma ORM to generate immediate, automated replies.",
    role: [
      "Contributed to the development of the AI-powered chatbot module for the Rent It platform",
      "Enabled users to receive instant responses and assistance through a conversational interface",
      "Developed and integrated backend services with Nest JS, PostgreSQL, Prisma ORM, and Python"
    ],
    impact: [
      "Optimized data handoffs and communication efficiency between distinct API microservices",
      "Reduced front-line administrative load by automatically answers properties' questions",
      "Offered 24/7 instant support channels for potential tenants"
    ],
    futureEnhancements: [
      "Interactive 3D tour prompts inside the chatbot",
      "Automated lease scheduling assistant",
      "Multi-agent system with different tenant negotiator identities"
    ],
    image: chatbotImg,
    github: "https://github.com/venith-31",
  },
  {
    id: "community-management-system",
    title: "Community Management System",
    tagline: "Unifying residential operations, registration, and billing pipelines",
    description: "A web-based community management system built with React and Express to streamline residential operations.",
    overview: "A streamlined full-stack application built to simplify the running of residential enclaves. Featuring resident registration, automated billing structures, booking systems for neighborhood amenities, and unified local announcements. Administrators gain fine-grained dashboard controls, and residents gain direct, transparent access to their neighborhood invoices.",
    features: [
      "Centralized community registration for residents and leaseholders",
      "Fully simulated billing management and transaction logs",
      "Amenity booking systems and scheduling calendar modules",
      "Role-based access control (RBAC) ensuring data protection",
      "Real-time announcements and notification boards for residents"
    ],
    tech: ["React.js", "Express.js", "MongoDB", "REST APIs", "Dashboard UI"],
    workingConcept: "Administrators log into a dashboard to register residents, launch utility bills, and approve amenity requests. Updates are recorded to a MongoDB schema, and users view customized billing cards inside their resident portal on React.",
    role: [
      "Developed a web-based community management system to streamline residential operations",
      "Implemented resident registration, billing, amenity booking, and announcements",
      "Programmed robust role-based access control and admin dashboard panels"
    ],
    impact: [
      "Consolidated fragmented communication and logbooks into a single database",
      "Simplified resident data tracking with quick access control for administrators",
      "Provided transparent self-service options for rent/utilities billing"
    ],
    futureEnhancements: [
      "Stripe payment gateway sandbox mockup",
      "Real-time push notifications of water/power downtime alerts",
      "Local community marketplace for residents to list furniture/items"
    ],
    image: communityImg,
    github: "https://github.com/venith-31",
  },
];