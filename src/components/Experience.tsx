import type { NextComponentType, NextPageContext } from 'next'
import Heading2 from './ui/Heading2'
import ExperienceLogo from './ui/ExperienceLogo'

type Props = {}

const Experience: NextComponentType<NextPageContext, object, Props> = (props: Props) => {
    return (
        <>
            <Heading2>Experience</Heading2>
            <div className="flex gap-6 sm:gap-10 justify-center flex-wrap max-w-3xl mx-auto">
                <ExperienceLogo src="/experience/css-logo.png" alt="CSS Logo" title="CSS" />
                <ExperienceLogo src="/experience/git-logo.png" alt="CSS Logo" title="GIT" />
                <ExperienceLogo src="/experience/nextjs-logo.png" alt="CSS Logo" title="NextJS" />
                <ExperienceLogo src="/experience/php-logo.png" alt="CSS Logo" title="PHP" />
                <ExperienceLogo src="/experience/react-logo.webp" alt="CSS Logo" title="React" />
                <ExperienceLogo src="/experience/tailwind-logo.png" alt="CSS Logo" title="Tailwind CSS" />
                <ExperienceLogo src="/experience/typescript-logo.png" alt="CSS Logo" title="TypeScript" />
                <ExperienceLogo src="/experience/vscode-logo.png" alt="CSS Logo" title="VS Code" />
                <ExperienceLogo src="/experience/wordpress-logo.webp" alt="CSS Logo" title="WordPress" />
            </div>
        </>
    )
}

export default Experience
