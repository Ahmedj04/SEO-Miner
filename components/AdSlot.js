import { useEffect, useRef, useState } from "react";

export default function AdSlot({ slot, className = "" }) {
  const adRef = useRef(null);
  const isPushed = useRef(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const ad = adRef.current;
    if (!ad) return;

    const updateVisibility = () => {
      setIsVisible(ad.dataset.adStatus === "filled");
    };

    const observer = new MutationObserver(updateVisibility);
    observer.observe(ad, {
      attributes: true,
      attributeFilter: ["data-ad-status"],
    });

    if (!isPushed.current && !ad.getAttribute("data-adsbygoogle-status")) {
      isPushed.current = true;
      try {
        if (typeof window !== "undefined") {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
      } catch (err) {
        console.warn("AdSense push error:", err);
      }
    }

    return () => {
      observer.disconnect();
    };
  }, [slot]);

  return (
    <div
      className={`${className} w-full ${!isVisible ? "hidden" : ""}`}
      aria-hidden={!isVisible}
    >
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{
          display: "block",
          width: "100%",
        }}
        data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}