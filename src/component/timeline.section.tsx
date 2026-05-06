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
    align: "start",
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
      <div className="mt-6">
        <div className="relative overflow-hidden">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex items-end">
              {items.map((item, index) => {
                const total = items.length;
                const rawDistance = Math.abs(index - selectedIndex);
                const distance = Math.min(rawDistance, total - rawDistance);
                const visualClass =
                  distance === 0
                    ? "scale-100 opacity-100 border-slate-700/75 bg-slate-950/60"
                    : distance === 1
                      ? "scale-100 opacity-60 border-slate-800/80 bg-slate-950/45"
                      : "scale-100 opacity-40 border-slate-800/80 bg-slate-950/45";
                return (
                  <article
                    key={`${item.organisation}-${index}`}
                    className="min-w-0 shrink-0 grow-0 basis-[92%] px-1.5 md:basis-[36%] md:px-2"
                  >
                    <div className="flex h-[290px] items-end md:h-[260px]">
                      <div
                        className={`h-full w-full overflow-hidden rounded-xl border p-4 backdrop-blur-sm transition-all duration-300 ${visualClass}`}
                      >
                        <div className="flex h-full flex-col">
                          <div className="mt-1 md:mt-3">
                            <p className="text-[11px] font-medium tracking-[0.08em] text-slate-400">Role</p>
                            <h3 className="mt-1 text-base font-semibold text-slate-100">{item.role}</h3>
                            <p className="mt-1 text-sm text-slate-300">{item.organisation}</p>
                          </div>

                          <div className="mt-2 flex-1">
                            <p className="line-clamp-3 text-xs leading-5 text-slate-400">
                              {item.labels?.[0] ?? "Delivered key frontend features and improvements."}
                            </p>
                          </div>

                          {/* <div className="mt-3 h-px w-full bg-slate-800/80" /> */}
                          <div className="mt-3 flex items-center justify-end">
                            <span className="rounded-full bg-sky-400/10 px-2.5 py-1 text-[10px] font-medium text-sky-300">
                              {item.location}
                            </span>
                          </div>
                          <div className="mt-2 flex items-center justify-end">
                            <span className="inline-flex rounded-lg 
                            border border-slate-700/50 bg-slate-900/45 
                            px-2.5 py-1 text-[10px] font-medium leading-4 text-slate-300 md:px-2.5 md:py-1.5 md:text-[11px]">
                              <span className="block md:hidden">{item.from}</span>
                              <span className="mx-1 hidden text-slate-500 md:inline">-</span>
                              <span className="block text-slate-400">{item.to}</span>
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
              <button
                key={`dot-${index}`}
                type="button"
                onClick={() => emblaApi?.scrollTo(index)}
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
