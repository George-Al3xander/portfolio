declare module "cssjson" {
    export declare interface CssAttributes {
        [attribute: string]: string;
    }

    export interface Children {
        [attribute: string]: {
            children: Children;
            attributes: CssAttributes;
        };
    }

    declare interface CssJsonArgs {
        ordered: boolean;
        comments: boolean;
        stripComments: boolean;
        split: boolean;
    }

    export interface JSONNode {
        children: Children;
        attributes: CssAttributes;
    }

    export function toJSON(cssString: string, args?: CssJsonArgs): JSONNode;
}
