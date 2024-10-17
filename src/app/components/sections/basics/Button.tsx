interface Props {
    disabled?: boolean;
    onClick: () => void;
    text: string
}

export default function Button({ disabled = false, onClick, text }: Props) {
    return (
        <button
            disabled={disabled}
            className={`items-center justify-center px-5 py-3 text-center text-[#FFF] bg-[#7E0707] uppercase ${disabled && "bg-gray-300 text-gray-800 pointer-events-none"}`}
            onClick={onClick}
        >
            {text}
        </button>
    )
}