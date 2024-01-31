import { memo } from 'react';

interface HeadingProps {
  size: string;
  children: React.ReactNode;
  color?: string;
  italic?: Boolean;
}

const Heading = ({ size, children, color = 'text-white', italic = false }: HeadingProps) => {
  return (
    <h1
      className={`${italic ? 'font-primaryBlackItalic' : 'font-primaryBlack'} ${color} ${
        size === 'xl' && 'text-3xl'
      } 
       ${size === 'md' && 'text-2xl'} ${size === 'sm' && 'text-lg'}`}
    >
      {children}
    </h1>
  );
};

export default memo(Heading);
