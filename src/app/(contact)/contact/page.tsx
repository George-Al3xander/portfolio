import { ContactForm } from "@/app/(contact)/_components/ContactForm";
import { InfoBlock } from "@/app/(contact)/_components/InfoBlock";
import { TitledSection } from "@/ui/components/molecules/TitledSection";

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
