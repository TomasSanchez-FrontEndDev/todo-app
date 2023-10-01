import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface LinkProps {
  ClassLink?: string;
  RefLink: string;
  ImgLink: string;
  TextLink?: string;
}
const CustomLink: React.FC<LinkProps> = ({
  ClassLink,
  RefLink,
  ImgLink,
  TextLink,
}) => {
  return (
    <>
      <Link
        href={RefLink}
        className={`bg-navy p-2 rounded-lg flex items-center ${ClassLink}`}
      >
        <Image src={ImgLink} alt='Image Link' width={35} height={35} />
        <p className='text-white ml-1 font-semibold'>{TextLink}</p>
      </Link>
    </>
  );
};

export default CustomLink;
