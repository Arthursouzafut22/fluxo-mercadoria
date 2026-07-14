import { useEffect, useState } from "react";

export function useMedia(media: string) {
  const [mobile, setMobile] = useState<boolean>();

  useEffect(() => {
    function isMobile() {
      const { matches } = window.matchMedia(media);
      setMobile(matches);
    }
    isMobile();

    window.addEventListener("resize", isMobile);

    return () => {
      window.removeEventListener("resize", isMobile);
    };
  }, [media]);

  return { mobile };
}
