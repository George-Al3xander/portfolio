import parse from "html-react-parser";
import { FC } from "react";

type Props = {
    children: string;
};

export const StringToHtml: FC<Props> = ({ children }) => parse(children);
