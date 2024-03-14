export const useHandleScrollToAnchor = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    const href = e.currentTarget.getAttribute('href')
    if (!href) return
    const element = document.querySelector(href)
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
    }
}

export const useScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
}
