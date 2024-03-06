import type { NextComponentType, NextPageContext } from 'next'
import Heading2 from './ui/Heading2'

const Contact: NextComponentType<NextPageContext> = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 my-auto items-center">
            <Heading2>Get In Touch</Heading2>
            <p></p>
        </div>
    )
}

export default Contact
