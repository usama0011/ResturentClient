export default function PrimaryButton({children, ...rest}) {
    return (
        <button {...rest} className="bg-primary-color hover:shadow-xl text-white px-8 rounded h-8">{children}</button>
    )
}
