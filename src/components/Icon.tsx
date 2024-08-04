import { DetailedHTMLProps, HTMLAttributes } from "react";

interface IIconProps extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
    type?: 'solid' | 'brands'
    id?: string;
    name?: string;
    size?: "lg" | "xl" | "2xl" | "3xl" | ""
}

export default function Icon({
    type='solid',
    name,
    size = "",
    ...props
}: IIconProps) {
    return (
        <span {...props}>
            <i className={`fa-${type} fa-${name} fa-${size}`}></i>
        </span>
    )
}