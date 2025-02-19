import { getInformationById } from "@/actions/information";
import { Typography } from "@/ui/components/atoms/Typography";
import { TitledSection } from "@/ui/components/molecules/TitledSection";

export const Summary = async () => {
    const { value } = await getInformationById("summary");
    return (
        <TitledSection title="My Story">
            <Typography size="md">{value}</Typography>
        </TitledSection>
    );
};
