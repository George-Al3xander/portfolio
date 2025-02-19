import { getInformationById } from "@/actions/information";
import { Typography } from "@/ui/components/atoms/Typography";

export const AboutMe = async () => {
    const { value } = await getInformationById("about-me");

    return (
        <Typography variant="quote" size="lg">
            {value}
        </Typography>
    );
};
