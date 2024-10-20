import FacebookIcon from "../../icons/FacebookIcon";
import TwitterIcon from "../../icons/TwitterIcon";
import GoogleIcon from "../../icons/GoogleIcon";
import ManualIcon from "../../icons/Manualcon";

interface Link {
    label: string;
    href: string;
}

interface LinkListProps {
    title: string;
    links: Link[];
}

const LinkList = ({ title, links }: LinkListProps) => (
    <div className="text-dark-green flex flex-col">
        <h6 className="mb-6 text-heading-7 uppercase">{title}</h6>
        <ul>
            {links.map((link, index: number) => (
                <li className="mb-6" key={index}>
                    <a href={link.href} className="hover:underline">{link.label}</a>
                </li>
            ))}
        </ul>
    </div>
);

const SocialMediaIcons = () => (
    <ul className="inline-flex gap-2">
        <li>
            <FacebookIcon className="w-[20px] h-[20px] cursor-pointer text-red" />
        </li>
        <li>
            <GoogleIcon className="w-[20px] h-[20px] cursor-pointer text-red" />
        </li>
        <li>
            <TwitterIcon className="w-[20px] h-[20px] cursor-pointer text-red" />
        </li>
    </ul>
);

export default function FooterSection() {
    const productLinks = [
        { label: "Popular", href: "#" },
        { label: "Trending", href: "#" },
        { label: "Guided", href: "#" },
        { label: "Products", href: "#" },
    ];

    const companyLinks = [
        { label: "Press", href: "#" },
        { label: "Mission", href: "#" },
        { label: "Strategy", href: "#" },
        { label: "About", href: "#" },
    ];

    const infoLinks = [
        { label: "Support", href: "#" },
        { label: "Customer Service", href: "#" },
        { label: "Get started", href: "#" },
    ];

    return (
        <footer className="bg-footer-green mt-4">
            <div className="mx-auto w-full max-w-screen-xl">
                <div className="grid grid-cols-2 gap-8 px-6 py-6 lg:py-8 lg:grid-cols-5">
                    <ManualIcon className="w-[75px] h-[75px] hidden lg:block" />
                    <LinkList title="Product" links={productLinks} />
                    <LinkList title="Company" links={companyLinks} />
                    <LinkList title="Info" links={infoLinks} />
                    <div className="text-dark-green flex flex-col">
                        <h6 className="mb-6 text-heading-7 uppercase">Follow us</h6>
                        <SocialMediaIcons />
                    </div>
                </div>
                <div className="flex justify-center mb-4 lg:hidden">
                    <ManualIcon className="w-10 h-10" />
                </div>
                <div className="border-b border-light-green w-full mb-2 px-10"></div>
                <div className="px-4 py-6 flex justify-center">
                    <p className="text-body-4 text-light-green">© 2021 Manual. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}
