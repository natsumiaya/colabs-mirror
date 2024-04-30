import type { FC } from 'react';
import style from "./index.module.css";

type CardProps = {
    amount: string,
    description: string
    className?: string
}

const Card: FC<CardProps> = ({
    amount, description, className
}) => {
    const longAmount = amount.length > 4;
    return(
    <div className={`${style.stats_card} ${className}`}>
        <span className={`h1 large ${longAmount && style.long}`}>{amount}</span>
        <div>{description}</div>
    </div>
)}

export default Card;