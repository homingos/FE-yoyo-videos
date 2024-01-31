import { memo } from 'react';

// package imports
interface ButtonProps {
  style?: string;
  children: React.ReactNode;
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  rounded?: boolean;
  size?: 'sm' | 'base';
  type?: any;
}

const Button = ({
  style = 'neon',
  children,
  disabled = false,
  fullWidth = false,
  className = '',
  onClick = () => {},
  rounded = false,
  size = 'base',
  type,
}: ButtonProps) => {
  let classes = ' hover-opacity-20 font-semibold py-3 px-6 focus:outline-none ';

  if (!disabled) {
    switch (style) {
      case 'neon':
        classes += 'bg-neon text-black ';
        break;
      case 'neon-hollow':
        classes += 'bg-black text-neon border-2 border-neon ';
        break;
      default:
        classes += 'bg-neon text-black';
        break;
    }
  }

  switch (size) {
    case 'base':
      classes += 'py-3 px-6 ';
      break;
    case 'sm':
      classes += 'text-sm px-6 py-[0.5rem] ';
      break;
    default:
      classes += 'py-3 px-6 ';
      break;
  }

  if (fullWidth) classes += 'w-full ';

  if (rounded) {
    classes += 'rounded-full px-4 ';
  } else {
    classes += 'rounded-2xl ';
  }

  if (disabled) classes += 'bg-grey-100 text-white cursor-not-allowed ';

  classes += className;

  return (
    <button
      className={`${classes} hover:scale-95`}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default memo(Button);
