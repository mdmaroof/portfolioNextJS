import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Heading } from "./heading";
import { objectWork } from "./workHistory.section";

interface Props {
  work?: objectWork[];
}

export const Timeline = ({ work }: Props) => {
  const items = work ?? [];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    dragFree: false,
    watchDrag: false,
    containScroll: "trimSnaps",
  });

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi || items.length <= 1) return;
    const timer = setInterval(() => {
      emblaApi.scrollNext();
    }, 3500);

    return () => clearInterval(timer);
  }, [emblaApi, items.length]);

  return (
    <div>
      <Heading>Timeline</Heading>
      <p className="mt-2 text-sm text-slate-300 md:text-base">Career path and role progression.</p>
      <div className="mt-6 -mx-6 md:-mx-10">
        <div className="relative overflow-hidden">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {items.map((item, index) => {
                const isActive = index === selectedIndex;
                return (
                  <article
                    key={`${item.organisation}-${index}`}
                    className="min-w-0 shrink-0 grow-0 basis-[72%] px-2 md:basis-[36%]"
                  >
                    <div
                      className={`h-[280px] w-full overflow-hidden rounded-xl border 
                        px-4 py-4 
                        shadow-[0_14px_28px_rgba(2,6,23,0.35)] 
                        backdrop-blur-sm transition-all duration-300 md:h-[260px] ${isActive
                          ? "scale-100 border-slate-700/75 bg-slate-950/60 opacity-100"
                          : "scale-[0.7] border-slate-800/80 bg-slate-950/45 opacity-60"
                        }`}
                    >
                      <div className="flex h-full flex-col justify-between">
                        <div>
                          <h3 className="text-base font-semibold text-slate-100">{item.organisation}</h3>
                          <p className="mt-1 text-sm text-slate-300">{item.role}</p>
                          <p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-400">
                            {item.labels?.[0] ?? "Delivered key frontend features and improvements."}
                          </p>
                        </div>

                        <div>
                          <div className="mb-2 h-px w-full bg-slate-800/80" />
                          <div className="flex items-center justify-between">
                            <span className="rounded-full border border-slate-700/70 bg-slate-900/70 px-2 py-0.5 text-[11px] text-slate-300">
                              {item.location}
                            </span>
                            <span className="text-[10px] font-medium uppercase tracking-[0.11em] text-slate-400">
                              {item.from} - {item.to}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="mt-5 flex items-center justify-center gap-2">
            {items.map((_, index) => (
              <div
                key={`dot-${index}`}
                onClick={() => { }}//emblaApi?.scrollTo(index)
                aria-label={`Go to timeline item ${index + 1}`}
                className={`h-1 w-1 rounded-full transition-all ${index === selectedIndex
                  ? "bg-sky-300 ring-2 ring-sky-400/30 w-4"
                  : "bg-slate-600 hover:bg-slate-500"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
