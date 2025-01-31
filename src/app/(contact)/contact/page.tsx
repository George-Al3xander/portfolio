import { ContactForm } from "@/app/(contact)/_components/ContactForm";
import { InfoBlock } from "@/app/(contact)/_components/InfoBlock";
import { metadataConfig } from "@/configs/metadata";
import { TitledSection } from "@/ui/components/molecules/TitledSection";

export const metadata = metadataConfig["pages"]["contact"];

const ContactPage = () => {
    return (
        <TitledSection title="Get In Touch">
            <div className="flex flex-col items-center justify-between gap-10 sm:flex-row">
                <ContactForm />
                <InfoBlock />
            </div>
        </TitledSection>
    );
};

export default ContactPage;
