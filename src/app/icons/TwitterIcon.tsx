import React from "react";

function TwitterIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            {...props}
        >
            <path d="M22.212 5.656a8.384 8.384 0 01-2.401.658A4.195 4.195 0 0021.649 4c-.82.488-1.719.83-2.655 1.015a4.182 4.182 0 00-7.126 3.814 11.874 11.874 0 01-8.621-4.37 4.168 4.168 0 00-.566 2.103c0 1.45.739 2.731 1.86 3.481a4.169 4.169 0 01-1.894-.523v.051a4.185 4.185 0 003.355 4.102 4.205 4.205 0 01-1.89.072A4.185 4.185 0 008.02 16.65a8.394 8.394 0 01-6.192 1.732 11.831 11.831 0 006.41 1.88c7.694 0 11.9-6.373 11.9-11.9 0-.18-.004-.362-.012-.541a8.497 8.497 0 002.086-2.164z"></path>
        </svg>
    );
}

export default TwitterIcon;