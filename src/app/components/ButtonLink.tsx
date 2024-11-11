









import React from 'react';
import Link from 'next/link';
import ButtonLinkProps from '@/app/type/ButtonLink'



const ButtonLink: React.FC<ButtonLinkProps> = ({ href, text }) => {
  return (
    <Link href={href}>
      <button className="bg-pastel-blue text-gray-700 font-semibold py-2 px-4 rounded-md transition duration-200 hover:bg-pastel-pink hover:text-white">
        {text}
      </button>
    </Link>
  );
};

export default ButtonLink;



