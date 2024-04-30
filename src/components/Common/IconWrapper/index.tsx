import { ComponentProps } from "react";

import dynamic from "next/dynamic";

interface LazySvgProps extends ComponentProps<"svg"> {
  name: string;
}

export const SvgWrapper = ({ name, ...props }: LazySvgProps) => {
  const Svg = dynamic(() => import(`@/assets/icons/${name}.svg`));
  return <Svg {...props} />;
};