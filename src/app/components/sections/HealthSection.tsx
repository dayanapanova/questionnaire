import Image from "next/image";
import HairLossImg from "../../assets/hairLoss.png";
import EDImg from "../../assets/ed.png";

interface DetailSectionProps {
    title: string;
    subtitle: TrustedHTML;
    description: TrustedHTML;
};

const DetailSection = ({ title, subtitle, description }: DetailSectionProps) => (
    <div className="flex flex-col items-center text-center mt-4 md:items-start md:text-left md:mt-0 md:ml-4 py-8">
        <h6 className="text-heading-7 text-light-green uppercase mb-4">{title}</h6>
        <h4 className="text-heading-4 text-dark-green mb-6" dangerouslySetInnerHTML={{ __html: subtitle }} />
        <p className="text-body-3 text-dark-green" dangerouslySetInnerHTML={{ __html: description }} />
    </div>
)

export default function HealthSection() {
    return (
        <section className="container mx-auto px-8 py-8">
            <h3 className="text-heading-4 flex justify-center md:text-heading-3 text-dark-green mb-8">What we can help with</h3>
            <div className="grid grid-rows-2 grid-flow-col gap-x-4 gap-y-20">
                <div className="flex flex-col md:flex-row items-center justify-center">
                    <div className="w-full max-w-[370px] max-h-[445px] px-6">
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
                <div className="flex flex-col md:flex-row items-center justify-center">
                    <DetailSection
                        title="Erectile dysfunction"
                        subtitle="Erections can be a tricky <br /> thing. But no need to feel <br /> down!"
                        description="We’re working around the clock to bring you a <br /> holistic approach to your wellness. From <br/> top to bottom, inside and out."
                    />
                    <div className="w-full max-w-[370px] max-h-[445px] px-6">
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
