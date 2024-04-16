export function BrandButton ({children, href = '#'}) {
    return (
        <a href={href} target="__blank" className="border border-slate-400 px-4 py-2 text-slate-400 flex gap-3 hover:border-[#8B02DE] hover:text-[#8B02DE] transition-colors ease-in-out duration-300 rounded-md items-center">
            {children}
        </a>
    )
}