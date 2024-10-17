import Image from "next/image";
import HairLossImg from "../../assets/hairLoss.png";
import EDImg from "../../assets/ed.png";

export default function HealthSection() {
    return (
        <section className="sm:px-6 lg:px-12">
            <h1 className="flex justify-center text-[#0B3B3C] mb-10">What we can help with</h1>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div className="flex flex-col">
                    <div className="w-[370px] h-[440px]">
                        <Image
                            src={HairLossImg}
                            alt="Manual - Hair Loss Section"
                            layout="responsive"
                        />
                    </div>
                </div>
                <div className="flex flex-col">
                    <p className="font-normal text-sm text-[#6D8A83]">Hair loss</p>
                    <p className="mt-2 font-bold text-xl text-[#0B3B3C]">
                        Hair loss needn’t be <br /> irreversible. We can help!
                    </p>
                    <p className="mt-4 font-normal text-xl text-[#0B3B3C]">
                        We’re working around the clock to bring you a <br /> holistic approach to your wellness. From top to <br /> bottom, inside and out.
                    </p>
                </div>


                {/* Втора секция - Erective Dysfunction */}
                <div className="flex flex-col">
                    <p className="font-normal text-sm text-[#6D8A83]">Erectile dysfunction</p>
                    <p className="mt-2 font-bold text-xl text-[#0B3B3C]">
                        Erections can be a tricky <br /> thing. But no need to feel <br /> down!
                    </p>
                    <p className="mt-4 font-normal text-xl text-[#0B3B3C]">
                        We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.
                    </p>
                </div>
                <div className="flex flex-col">
                    <div className="w-[370px] h-[440px]">
                        <Image
                            src={EDImg}
                            alt="Manual - Erectile Dysfunction Section"
                            layout="responsive"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

