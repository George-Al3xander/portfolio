import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";

export type VariantPropsWithChildren<
    TCvaType extends ReturnType<typeof cva>,
    TElementType = HTMLElement,
> = HTMLAttributes<TElementType> & VariantProps<TCvaType>;

export type PropsWithTagSpecification<TProp extends object> = {
    as?: keyof HTMLElementTagNameMap;
} & TProp;
