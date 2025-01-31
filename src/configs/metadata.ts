const AUTHOR_NAME = "Heorhii Valuiskyi";

const AUTHOR_LINKEDIN = "https://www.linkedin.com/in/valuiskyi/";

const AUTHOR_GITHUB = "https://github.com/George-Al3xander";

const PAGES_METADATA = {
    layout: {
        title: {
            default: `${AUTHOR_NAME} Portfolio`,
            template: `%s | ${AUTHOR_NAME}`,
        },
        description:
            "Showcasing modern front-end development projects and skills. Explore creative UI/UX solutions and responsive web applications.",
        openGraph: {
            title: `${AUTHOR_NAME} Portfolio`,
            description:
                "Explore my front-end development projects, skills, and experience in web technologies.",
            type: "website",
            url: AUTHOR_GITHUB,
        },
    },
    home: {
        title: "Home",
        description:
            "Explore my front-end development projects, skills, and experience in web technologies.",
    },
    projects: {
        title: "Projects",
        description:
            "Discover front-end development projects built with Next.js, React, and modern web technologies.",
    },
    about: {
        title: "About",
        description:
            "Learn about my background, experience, and journey as a front-end developer.",
    },
    contact: {
        title: "Contact",
        description:
            "Get in touch to discuss potential collaborations, freelance opportunities, or any questions you may have about my work.",
    },
} as const;

export const metadataConfig = {
    author: {
        name: AUTHOR_NAME,
        linkedin: AUTHOR_LINKEDIN,
        github: AUTHOR_GITHUB,
    },
    pages: PAGES_METADATA,
};
