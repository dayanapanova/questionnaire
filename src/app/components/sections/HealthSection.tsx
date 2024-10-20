import Image from "next/image";
import HairLossImg from "../../assets/hairLoss.png";
import EDImg from "../../assets/ed.png";

interface DetailSectionProps {
    title: string;
    subtitle: TrustedHTML;
    description: TrustedHTML;
};

const DetailSection = ({ title, subtitle, description }: DetailSectionProps) => (
    <div className="flex flex-col justify-center mt-4 md:mt-0 md:ml-4">
        <h6 className="text-heading-7 text-light-green uppercase">{title}</h6>
        <h4 className="text-heading-4 text-dark-green mb-6" dangerouslySetInnerHTML={{ __html: subtitle }} />
        <p className="text-body-3 text-dark-green" dangerouslySetInnerHTML={{ __html: description }} />
    </div>
)

export default function HealthSection() {
    return (
        <section className="container mx-auto px-8 py-8">
            <h3 className="flex justify-center text-heading-3 text-dark-green mb-8">What we can help with</h3>
            <div className="grid grid-rows-2 grid-flow-col gap-4">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="w-full max-w-[370px] max-h-[445px]">
                        <Image
                            src={HairLossImg}
                            alt="Manual - Hair Loss Section"
                            className="w-full h-auto object-contain"
                        />
                    </div>
                    <DetailSection
                        title="Hair loss"
                        subtitle="Hair loss needn’t be <br /> irreversible. We can help!"
                        description="We’re working around the clock to bring you a <br /> holistic approach to your wellness. From top to <br/> bottom, inside and out."
                    />
                </div>
                <div className="flex flex-col md:flex-row items-center">
                    <DetailSection
                        title="Erectile dysfunction"
                        subtitle="Erections can be a tricky <br /> thing. But no need to feel <br /> down!"
                        description="We’re working around the clock to bring you a <br /> holistic approach to your wellness. From <br/> top to bottom, inside and out."
                    />
                    <div className="w-full max-w-[370px] max-h-[445px]">
                        <Image
                            src={EDImg}
                            alt="Manual - Erectile Dysfunction Section"
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
