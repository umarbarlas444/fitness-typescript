import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    page: string;
    selectedPage: string;
    setSelectedPage: (value: string) => void
}

function Link({page, selectedPage, setSelectedPage}: Props) {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "");
  return (
    <AnchorLink href={`#${lowerCasePage}`} onClick={() => setSelectedPage(lowerCasePage)} className={`${selectedPage === lowerCasePage ? 'text-primary-500' : ''} transition duration-500 hover:text-primary-500`}>
        {page}
    </AnchorLink>
  )
}

export default Link