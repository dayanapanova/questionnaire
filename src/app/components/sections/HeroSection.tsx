"use client";
import Image from "next/image";
import HeroImg from "../../assets/hero.jpeg";
import ManualIcon from "../../icons/Manualcon";
import { useRouter } from 'next/navigation';
import Button from "./basics/Button";

export default function HeroSection() {
    const router = useRouter();
    return (
        <section className="relative bg-white">
            <div className="absolute inset-0 z-0 hidden lg:block">
                <Image
                    src={HeroImg}
                    alt="Manual - Here Section"
                    layout="fill"
                    objectFit="cover"
                    priority
                />
            </div>
            <div className="grid max-w-screen-xl mx-auto min-h-[600px] lg:gap-8 xl:gap-0 lg:grid-cols-12 relative z-10">
                <div className="lg:col-span-5 lg:flex lg:order-2">
                    <div className="block lg:hidden">
                        <Image
                            src={HeroImg}
                            alt="Manual - Here Section"
                            layout="responsive"
                            width={700}
                            height={400}
                        />
                    </div>
                </div>
                <div className="lg:col-span-7 lg:order-1">
                    <ManualIcon className="mt-10 w-[40px] h-[40px] mb-16 hidden lg:block" />
                    <h1 className="max-w-2xl mb-4 text-4xl text-[#0B3B3C] font-normal md:text-5xl lg:text-6xl">
                        Be good <br />to yourself
                    </h1>
                    <p className="max-w-2xl mb-6 font-light text-[#0B3B3C] lg:mb-8 md:text-lg lg:text-xl">
                        We’re working around the clock to bring you a holistic <br /> approach to your wellness. From top to bottom, inside and <br /> out.
                    </p>
                    <Button text="Take the quiz" onClick={() => router.push("/questionnaire")} />
                </div>
            </div>
        </section>
    )
}

