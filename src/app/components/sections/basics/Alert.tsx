interface Props {
    message: string;
    icon: React.ReactNode;
    type: "success" | "warning"
}

export default function Alert({ message, icon, type }: Props) {
    return (
        <div className={`flex items-center p-4 mb-4 text-sm rounded-lg ${type === "warning" ? "bg-red-50" : "bg-green-50"}`}>
            {icon}
            <div
                dangerouslySetInnerHTML={{ __html: message }}
                className={type === "warning" ? "text-red-800" : "text-green-800"}
            >
            </div>
        </div>
    )
}