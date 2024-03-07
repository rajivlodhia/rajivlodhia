import type { NextComponentType, NextPageContext } from 'next'
import Heading2 from './ui/heading-2'
import ExperienceLogo from './ui/experience-logo'

type Props = {}

const Experience: NextComponentType<NextPageContext, object, Props> = (props: Props) => {
    return (
        <div className="flex flex-col md:flex-row my-auto items-center gap-4">
            <span className="space-y-3 md:max-w-lg">
                <Heading2>Experience</Heading2>
                <p>A diverse set of technical experience in both frontend and backend.</p>
                <p>
                    My goal is to keep expanding my knowledge as technology changes, and grow with the industry. With
                    years of experience writing in PHP for WordPress and Drupal projects, I decided to expand my
                    skillset and learn fullstack development with React and NextJS.
                </p>
            </span>
            <div className="flex gap-6 sm:gap-10 justify-center flex-wrap max-w-3xl ml-auto">
                <ExperienceLogo src="/experience/nextjs-logo.png" alt="NextJS Logo" title="NextJS" />
                <ExperienceLogo src="/experience/react-logo.webp" alt="React Logo" title="React" />
                <ExperienceLogo src="/experience/typescript-logo.png" alt="Typescript Logo" title="TypeScript" />
                <ExperienceLogo src="/experience/php-logo.png" alt="PHP Logo" title="PHP" />
                <ExperienceLogo src="/experience/css-logo.png" alt="CSS Logo" title="CSS" />
                <ExperienceLogo src="/experience/tailwind-logo.png" alt="Tailwind Logo" title="Tailwind CSS" />
                <ExperienceLogo src="/experience/wordpress-logo.webp" alt="WordPress Logo" title="WordPress" />
                <ExperienceLogo src="/experience/drupal-logo.webp" alt="Drupal Logo" title="Drupal" />
                <ExperienceLogo src="/experience/git-logo.png" alt="GIT Logo" title="GIT" />
                <ExperienceLogo src="/experience/vscode-logo.png" alt="VS Code Logo" title="VS Code" />
            </div>
        </div>
    )
}

export default Experience
