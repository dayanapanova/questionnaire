import FacebookIcon from "../../icons/FacebookIcon";
import TwitterIcon from "../../icons/TwitterIcon";
import GoogleIcon from "../../icons/GoogleIcon";
import ManualIcon from "../../icons/Manualcon";

export default function FooterSection() {
    return (
        <footer className="">
            <div className="mx-auto w-full max-w-screen-xl">
                <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 lg:grid-cols-5">
                    <ManualIcon className="w-[75px] h-[75px] hidden lg:block" />
                    <div className="flex flex-col items-center">
                        <p className="mb-6 text-sm uppercase font-bold">Product</p>
                        <ul className="font-normal text-lg">
                            <li className="mb-6">
                                <a href="#" className=" hover:underline">Popular</a>
                            </li>
                            <li className="mb-6">
                                <a href="#" className="hover:underline">Trending</a>
                            </li>
                            <li className="mb-6">
                                <a href="#" className="hover:underline">Guided</a>
                            </li>
                            <li className="mb-6">
                                <a href="#" className="hover:underline">Products</a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="mb-6 text-sm uppercase font-bold">Company</p>
                        <ul className="font-normal text-lg">
                            <li className="mb-6">
                                <a href="#" className="hover:underline">Press</a>
                            </li>
                            <li className="mb-6">
                                <a href="#" className="hover:underline">Mission</a>
                            </li>
                            <li className="mb-6">
                                <a href="#" className="hover:underline">Strategy</a>
                            </li>
                            <li className="mb-6">
                                <a href="#" className="hover:underline">About</a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="mb-6 text-sm uppercase font-bold">Info</p>
                        <ul className="font-normal text-lg">
                            <li className="mb-6">
                                <a href="#" className="hover:underline">Support</a>
                            </li>

                        </ul>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="mb-6 text-sm uppercase font-bold">Follow us</p>
                        <ul className="font-normal text-lg inline-flex gap-2">
                            <li>
                                <FacebookIcon className="w-[20px] h-[20px] cursor-pointer" />
                            </li>
                            <li>
                                <GoogleIcon className="w-[20px] h-[20px] cursor-pointer" />
                            </li>
                            <li>
                                <TwitterIcon className="w-[20px] h-[20px] cursor-pointer" />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-center mb-4 lg:hidden">
                    <ManualIcon className="w-10 h-10" />
                </div>
                <div className="px-4 py-6 flex justify-center">
                    <span className="text-sm sm:text-center font-normal">© 2021 Manual. All Rights Reserved.
                    </span>
                </div>
            </div>
        </footer>
    )
}

