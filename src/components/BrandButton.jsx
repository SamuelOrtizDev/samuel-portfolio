export function BrandButton ({children, href = '#'}) {
    return (
        <a href={href} target="__blank" className="px-4 py-2 text-light font-medium flex gap-3 hover:border-purple hover:text-orange bg-blue transition-colors ease-in-out duration-300 rounded-full items-center">
            {children}
        </a>
    )
}