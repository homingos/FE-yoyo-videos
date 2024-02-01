/* eslint-disable import/no-extraneous-dependencies */
import type { LucideIcon } from "lucide-react";
import { Clock4, Dumbbell, Martini, TrendingUp, Users, PlusCircle } from "lucide-react";

import { cn } from "@/lib/functions";

export type IIcon = LucideIcon | any;

export const icons: IIcon = {
  clock: Clock4,
  fitness: Dumbbell,
  dance: Martini,
  celebrity: TrendingUp,
  faceOff: Users, 
  extra: PlusCircle
};

const Icon = ({
  icon,
  transition,
  className,
  disabled,
  ...props
}: {
  icon: IIcon;
  transition?: "down" | "up";
  className: string;
  disabled?: boolean;
} & any) => {
  const IconComponent = icons[icon as IIcon];

  let hoverIcon = "";

  switch (transition) {
    case "down":
      hoverIcon = "hover:scale-[0.9] hover:transition-all";
      break;
    case "up":
      hoverIcon = "";
      break;
    default:
      break;
  }

  if (IconComponent) {
    return (
      <IconComponent
        aria-hidden
        {...props}
        className={cn(
          className,
          hoverIcon,
          disabled && "pointer-events-none opacity-50"
        )}
      />
    );
  }

  return null;
};

export const TooltipIcon = ({
  icon,
  text,
  side = "bottom",
  ...props
}: {
  side?: "left" | "right" | "top" | "bottom";
  text: string;
  icon: IIcon;
} & any) => {
  return (
    <div className="relative">
      <Icon icon={icon} {...props} />
    </div>
  );
};

export default Icon;
