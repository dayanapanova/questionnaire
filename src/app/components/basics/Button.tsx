interface Props {
    disabled?: boolean;
    onClick: () => void;
    text: string
}

export default function Button({ disabled = false, onClick, text }: Props) {
    return (
        <button
            disabled={disabled}
            className={`text-heading-7 items-center justify-center px-5 py-3 uppercase bg-red text-[#FFF] transition duration-200 ease-in-out 
            ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={onClick}
        >
            {text}
        </button>

    )
}