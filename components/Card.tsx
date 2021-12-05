import Image from 'next/image'
import { useState, useEffect } from 'react';
const currencies = require('@/data/currency.json');

type CurrencyData = {
    id: string;
    name: string;
  }

interface ICardProps {
    title: string
}

const Card: React.FC<ICardProps> = (props) => {

    const currencyName = props.title && currencies.data.filter((c: CurrencyData) => c.id === props.title)[0]?.name;


    return (
    <div className="bg-gradient-to-tr from-blue-600 via-purple-800 to-purple-900 rounded-lg text-white overflow-hidden flex shadow-lg text-left transform transition-all duration-500 ease-in-out hover:bg-gray-50 hover:scale-105 hover:shadow-none">
        <Image src="/images/diag.svg" width="100" height="100" className="transform rotate-180" />
        <div className="w-full flex md:flex-col">
            <div className="sm:max-w-sm sm:flex-none md:w-auto md:flex-auto flex flex-col items-start relative z-10 p-6 xl:p-8">
                <h3 className="text-2xl font-semibold text-shadow">
                    {props.title} - {currencyName}
                </h3>               
            </div>
        </div>
        <Image src="/images/diag.svg" width="100" height="100" />
    </div>
    )
}

export default Card;