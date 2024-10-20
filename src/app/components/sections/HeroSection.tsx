"use client";
import { useRouter } from 'next/navigation';
import Image from "next/image";
import HeroImg from "../../assets/hero.jpeg";
import ManualIcon from "../../icons/Manualcon";
import Button from '../basics/Button';

export default function HeroSection() {
    const router = useRouter();

    return (
        <section className="relative">
            <Image
                src={HeroImg}
                alt="Manual - Hero Section"
                priority
            />

            <div className="xs:block justify-center text-center items-center lg:absolute lg:text-justify lg:items-start top-10 left-0 flex flex-col px-20 py-10">
                <ManualIcon className="w-[40px] h-[40px] mb-20" />
                <h1 className="text-heading-3 md:text-heading-1 text-dark-green">
                    Be good <br /> to yourself
                </h1>
                <p className="mt-6 mb-8 text-body-3 text-dark-green">
                    We’re working around the clock to bring you a holistic <br /> approach to your wellness. From top to bottom, inside and <br /> out.
                </p>
                <Button text="Take the quiz" onClick={() => router.push("/questionnaire")} />
            </div>
        </section >
    );
}
