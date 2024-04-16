export function BrandButton ({children, href = '#'}) {
    return (
        <a href={href} target="__blank" className="border border-light px-4 py-2 text-light flex gap-3 hover:border-purple hover:text-purple transition-colors ease-in-out duration-300 rounded-md items-center">
            {children}
        </a>
    )
}