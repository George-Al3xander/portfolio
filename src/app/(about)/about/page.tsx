import { ExperienceItemsList } from "@/app/(about)/_components/experience/ExperienceItemsList";
import { Typography } from "@/ui/components/atoms/Typography";
import { TitledSection } from "@/ui/components/molecules/TitledSection";

const AboutPage = () => {
    return (
        <>
            <Typography variant="title" highlight="primary" as="p">
                About page
            </Typography>
            <TitledSection
                typographyProps={{ className: "mb-12" }}
                title={"My Experience"}
            >
                <ExperienceItemsList />
            </TitledSection>
        </>
    );
};

export default AboutPage;
