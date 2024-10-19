import Image from "next/image";
import HairLossImg from "../../assets/hairLoss.png";
import EDImg from "../../assets/ed.png";

export default function HealthSection() {
    return (
        <section className="container mx-auto px-8 py-8">
            <h3 className="flex justify-center text-heading-3 text-dark-green mb-8">What we can help with</h3>
            <div className="grid grid-rows-2 grid-flow-col gap-4">
                <div className="w-full">
                    <Image
                        src={HairLossImg}
                        alt="Manual - Hair Loss Section"
                    />
                </div>
                <div>
                    <h6 className="text-heading-7 text-light-green uppercase">Erectile dysfunction</h6>
                    <h4 className="text-heading-4 text-dark-green mb-6">
                        Erections can be a tricky <br /> thing. But no need to feel <br /> down!
                    </h4>
                    <p className="mt-4 font-normal text-xl">
                        We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.
                    </p>
                </div>
                <div>
                    <h6 className="text-heading-7 text-light-green uppercase">Hair loss</h6>
                    <h4 className="text-heading-4 text-dark-green mb-6">
                        Hair loss needn’t be <br /> irreversible. We can help!
                    </h4>
                    <p className="text-body-3">
                        We’re working around the clock to bring you a <br /> holistic approach to your wellness. From top to <br /> bottom, inside and out.
                    </p>
                </div>
                <div className="w-full">
                    <Image
                        src={EDImg}
                        alt="Manual - Erectile Dysfunction Section"
                    />
                </div>
            </div>
        </section>
    )
}

