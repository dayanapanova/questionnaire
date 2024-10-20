interface Props {
    message: string;
    icon: React.ReactNode;
    type: "success" | "warning"
}

export default function Alert({ message, icon, type }: Props) {
    return (
        <div
            className={`flex items-center p-4 mb-4 text-sm rounded-lg 
                ${type === "warning" ? "bg-light-blue" : "bg-[#BAC7C4]"} 
                mx-4 sm:mx-auto`}
        >
            {icon}
            <div
                dangerouslySetInnerHTML={{ __html: message }}
                className={type === "warning" ? "text-dark-blue" : "text-dark-green"}
            />
        </div>
    );
}
