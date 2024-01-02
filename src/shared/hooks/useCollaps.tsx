import { CSSProperties, useEffect, useRef, useState } from "react";

export const useCollaps = () => {
  const preview_ref = useRef<HTMLDivElement | null>(null);
  const additional_ref = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState<number>(Number(preview_ref?.current?.offsetHeight));
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const previewHeight = Number(preview_ref?.current?.offsetHeight);
    const additional = Number(additional_ref?.current?.offsetHeight);

    if (isOpen) {
      return setHeight(previewHeight + additional);
    }
    setHeight(previewHeight);
  }, [isOpen]);

  const preview_styles: CSSProperties = {
    position: "relative",
    zIndex: 1,
  };
  const additional_styles: CSSProperties = {
    transform: `translateY(${isOpen ? "-5%" : "-105%"})`,
    position: "relative",
    transitionProperty: "1s",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    transitionDuration: "150ms",
  };
  const collaps_styles: CSSProperties = {
    height: `${height}px`,
    overflow: "hidden",
    transitionProperty: "1s",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    transitionDuration: "150ms",
  };

  return {
    toggle,
    additional_ref,
    preview_ref,
    isOpen,
    collaps_styles,
    additional_styles,
    preview_styles,
  };
};
