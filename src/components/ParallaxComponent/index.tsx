import React, { useRef, useEffect, PropsWithChildren, FC } from "react";

import { jarallax } from "jarallax";
import "jarallax/dist/jarallax.min.css";

export type JarallaxProps = {
  className?: string;
  image: string;
};

const Jarallax: FC<PropsWithChildren<JarallaxProps>> = ({
  className = "",
  children,
  image,
  ...props
}) => {
  const $el = useRef<HTMLDivElement>(null);

  // Init Jarallax.
  useEffect(() => {
    if ($el.current) {
      jarallax($el.current, props);
    }

    // Destroy Jarallax.
    return function destroy() {
      if ($el.current) {
        jarallax($el.current, "destroy");
      }
    };
  }, []);

  // Update options.
  useEffect(() => {
    if ($el.current) {
      jarallax($el.current, "destroy");
      jarallax($el.current, props);
    }
  }, [props]);

  return (
    <section
      ref={$el}
      className={`jarallax ${className}`}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      {children}
    </section>
  );
};

export default Jarallax;
