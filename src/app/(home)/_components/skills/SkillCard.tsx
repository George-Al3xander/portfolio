import { TSkill } from "@/types/models/firestore";
import { StringToHtml } from "@/ui/components/atoms/StringToHtml";
import { Typography } from "@/ui/components/atoms/Typography";
import { FC } from "react";

type Props = TSkill;

export const SkillCard: FC<Props> = ({ name, icon }) => {
    return (
        <li className="flex items-center gap-4 rounded-xl bg-muted p-4 transition-all duration-100 ease-in-out hover:scale-90 hover:opacity-60">
            <span className="block min-h-10 min-w-10 fill-foreground">
                <StringToHtml>{icon}</StringToHtml>
            </span>
            <Typography size="lg">{name}</Typography>
        </li>
    );
};
