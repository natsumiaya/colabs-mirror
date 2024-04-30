"use client";

import { FC, PropsWithChildren } from "react";
import Jarallax, { JarallaxProps } from ".";

const ClientJarallax: FC<PropsWithChildren<JarallaxProps>> = ({
  image,
  children,
  ...props
}) => (
  <Jarallax image={image} {...props}>
    {children}
  </Jarallax>
);

export default ClientJarallax;
