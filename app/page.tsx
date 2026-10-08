import { MapPinIcon, Clock } from "lucide-react";

const venueSearch = encodeURIComponent("Hotel Sea Green Kalpitiya, Sri Lanka");

function FlowerMark() {
  return (
    <svg
      aria-hidden="true"
      className="h-8.5 w-8.5 text-[#a68c5a]"
      viewBox="0 0 52 52"
      fill="none"
    >
      <path
        d="M26 5.5c4.2 5.1 5.2 9.2 0 14.1-5.2-4.9-4.2-9 0-14.1Zm20.5 20.5c-5.1 4.2-9.2 5.2-14.1 0 4.9-5.2 9-4.2 14.1 0ZM26 46.5c-4.2-5.1-5.2-9.2 0-14.1 5.2 4.9 4.2 9 0 14.1ZM5.5 26c5.1-4.2 9.2-5.2 14.1 0-4.9 5.2-9 4.2-14.1 0Z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <circle cx="26" cy="26" r="4.2" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="26" cy="26" r="18.5" stroke="currentColor" strokeWidth=".8" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="mx-auto w-[calc(100%-112px)] max-w-340 text-[#26372d] max-[900px]:w-[calc(100%-64px)] max-[900px]:max-w-180 max-[620px]:w-[calc(100%-40px)] max-[620px]:max-w-115">
      <header className="flex min-h-23 items-center justify-between border-b border-[#deddd2] max-[620px]:min-h-18">
        <a
          className="font-[Georgia,'Times_New_Roman',serif] text-[23px] tracking-[0.02em] text-[#26372d] no-underline"
          href="#home"
          aria-label="Aaysha and Yazar"
        >
          A <span className="italic text-[#a68c5a]">&</span> Y
        </a>
        <p className="m-0 text-[10px] uppercase tracking-[0.17em] text-[#7a7d70] max-[620px]:hidden">
          A celebration of love
        </p>
        <a
          className="text-[10px] uppercase tracking-[0.17em] text-[#26372d] no-underline motion-safe:transition-colors motion-safe:duration-180 hover:text-[#a68c5a] focus-visible:text-[#a68c5a] max-[620px]:text-[8px] max-[620px]:tracking-[0.12em]"
          href="#celebration"
        >
          The celebration{" "}
          <span className="ml-1.75 text-[#a68c5a]" aria-hidden="true">
            ↗
          </span>
        </a>
      </header>

      <section
        className="grid grid-cols-[1fr_.93fr] items-center gap-[clamp(44px,8vw,116px)] py-16 pb-19 min-[1500px]:gap-30 max-[900px]:grid-cols-[1fr_.85fr] max-[900px]:gap-9.5 max-[900px]:py-12.5 max-[900px]:pb-14.5 max-[620px]:grid-cols-1 max-[620px]:gap-8.75 max-[620px]:py-11.25 max-[620px]:pb-12"
        id="home"
        aria-labelledby="invitation-title"
      >
        <div className="px-0 py-2.5 text-center min-[901px]:pl-[clamp(0px,4.3vw,64px)]">
          <p className="m-0 flex items-center justify-center gap-3.25 text-[9px] font-semibold uppercase tracking-[0.24em] text-[#697356] [&>span]:h-px [&>span]:w-5.75 [&>span]:bg-[#a68c5a]">
            <span /> With heart full of gratitude <span />
          </p>
          <p className="mt-8 mb-4.25 font-[Georgia,'Times_New_Roman',serif] text-[16px] leading-[1.7] text-[#7a7d70] italic max-[620px]:mt-6.5 max-[620px]:text-[15px]">
            Together with their families,
            <br />
            we invite you to celebrate
          </p>

          <p className="text-lg italic font-serif">
            “In the name of Allah, the Most Gracious, the Most Merciful”
          </p>

          <div className="flex flex-col items-center" id="invitation-title">
            <div className="mt-6.25 grid gap-1.25 font-[Georgia,'Times_New_Roman',serif] text-[13px] text-[#7a7d70] max-[620px]:mt-5.25 [&>p]:m-0 [&_strong]:font-normal [&_strong]:text-[#26372d]">
              <p>
                Mr and Mrs <strong>Cader Ali</strong> request the presence and
                blessings of
              </p>
              <div className="my-3 font-serif text-3xl italic text-green-950">
                <p className="m-0">Alaudeens &amp; 8 Thatkoorihal</p>
              </div>
              <p>At the waleema of their beloved son</p>
            </div>
            <h1 className="mt-2 font-[Georgia,'Times_New_Roman',serif] text-7xl leading-[0.98] font-normal tracking-[-0.065em] text-[#26372d]">
              Yazar Mohamed
            </h1>
            <div className="mb-6">
              <p className="mt-4 text-xs text-[#7a7d70]">
                ( Son of{" "}
                <span className="font-semibold text-black">CADER ALI</span> &{" "}
                <span className="font-semibold text-black">
                  SANOOSIYA A.C MARIKKAR
                </span>{" "}
                )
              </p>
            </div>
            <FlowerMark />
            <h1 className="mt-6 font-[Georgia,'Times_New_Roman',serif] text-7xl leading-[0.98] font-normal tracking-[-0.065em] text-[#26372d]">
              Aaysha Shimasha
            </h1>
            <p className="text-xs mt-4 text-[#7a7d70]">
              ( Daughter of{" "}
              <span className="font-semibold text-black uppercase">
                Mohamed Niyas
              </span>{" "}
              &{" "}
              <span className="font-semibold text-black uppercase">
                Naseeba S.L
              </span>{" "}
              )
            </p>
          </div>

          <div className="mx-auto mt-6.75 mb-5 h-px w-10.5 bg-[#a68c5a]" />
          <p className="mt-3 mb-0 text-[11px] leading-[1.8] text-[#7a7d70]">
            We would be honoured to have you with us
            <br className="max-[620px]:hidden" /> as we celebrate this beautiful
            beginning.
          </p>
          <p className="font-[Georgia,'Times_New_Roman',serif] text-[17px] text-[#26372d] italic mt-3">
            The Waleema Ceremony
          </p>

          <a
            className="mt-6.25 inline-flex min-h-11 items-center gap-6 border border-[#c9c8bb] px-4.5 text-[10px] tracking-[0.08em] text-[#26372d] no-underline motion-safe:transition-[background,border-color,color] motion-safe:duration-180 hover:border-[#26372d] hover:bg-[#26372d] hover:text-[#f7f5ef] focus-visible:border-[#26372d] focus-visible:bg-[#26372d] focus-visible:text-[#f7f5ef]"
            href="#celebration"
          >
            Join us in celebration{" "}
            <span className="text-[14px] text-[#a68c5a]" aria-hidden="true">
              ↓
            </span>
          </a>
        </div>

        <div
          className="relative min-h-147.5 overflow-hidden bg-[#b1a896] bg-[url(https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1600&q=85)] bg-cover bg-center before:pointer-events-none before:absolute before:inset-3.75 before:z-1 before:border before:border-[rgb(255_255_255/42%)] before:content-[''] max-[900px]:min-h-127.5 max-[620px]:min-h-110"
          role="img"
          aria-label="An intimate wedding celebration surrounded by flowers"
        >
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(34_38_30/5%)_42%,rgb(30_35_28/58%)_100%)]" />
          <div className="absolute right-5.5 bottom-13.25 left-5.5 z-2 grid justify-items-center text-center text-[#fffdf8]">
            <span className="text-lg text-black">A day to remember</span>
            <span className="my-2.75 font-[Georgia,'Times_New_Roman',serif] text-[clamp(34px,4vw,52px)] tracking-[-0.04em]">
              Yazar{" "}
              <i className="text-[0.75em] font-normal text-[#dfc997]">&amp;</i>{" "}
              Aaysha
            </span>
            <span className="text-[11px] uppercase tracking-[0.22em] text-[#f4ead8]">
              26 · 12 · 2026
            </span>
          </div>
        </div>
      </section>

      <section
        className="border-y border-[#deddd2] py-14.75 pb-15.75 max-[620px]:py-11.5"
        id="celebration"
        aria-labelledby="celebration-title"
      >
        <div className="text-center">
          <p className="m-0 flex items-center justify-center gap-3.25 text-[9px] font-semibold uppercase tracking-[0.24em] text-[#697356] [&>span]:h-px [&>span]:w-5.75 [&>span]:bg-[#a68c5a]">
            <span /> Save the date, enjoy the celebration <span />
          </p>
          <h2
            className="mt-3.5 mb-0 font-[Georgia,'Times_New_Roman',serif] text-[clamp(34px,4.2vw,48px)] font-normal tracking-[-0.045em] text-[#26372d]"
            id="celebration-title"
          >
            The celebration
          </h2>
        </div>

        <div className="mx-auto mt-11 grid max-w-230 grid-cols-[1fr_1fr_auto] items-center gap-9 max-[900px]:max-w-162.5 max-[900px]:grid-cols-2 max-[900px]:gap-y-7.5 max-[620px]:mt-8.5 max-[620px]:w-fit max-[620px]:grid-cols-1 max-[620px]:gap-6.5">
          <article className="flex items-start gap-4.25">
            <span className="font-[Georgia,'Times_New_Roman',serif] text-xs italic text-[#a68c5a]">
              01
            </span>
            <div>
              <div className="mb-2.5 flex items-center gap-3">
                <h3 className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#697356]">
                  When
                </h3>
                <span>
                  <Clock className="h-4 w-4 text-[#a68c5a]" />
                </span>
              </div>
              <p className="m-0 font-[Georgia,'Times_New_Roman',serif] text-[15px] text-[#26372d]">
                Saturday, 26 December 2026
              </p>
              <p className="mt-1.5 mb-0 font-[Georgia,'Times_New_Roman',serif] text-xs italic text-[#7a7d70]">
                At 7:30 p.m
              </p>
            </div>
          </article>

          <article className="flex items-start gap-4.25">
            <span className=" font-[Georgia,'Times_New_Roman',serif] text-xs italic text-[#a68c5a]">
              02
            </span>
            <div>
              <div className="mb-2.5 flex items-center gap-3">
                <h3 className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#697356]">
                  Where
                </h3>
                <span>
                  <MapPinIcon className="h-4 w-4 text-[#a68c5a]" />
                </span>
              </div>
              <p className="m-0 font-[Georgia,'Times_New_Roman',serif] text-[15px] text-[#26372d]">
                Hotel Sea Green Kalpitiya, Sri Lanka
              </p>
              <p className="mt-1.5 mb-0 font-[Georgia,'Times_New_Roman',serif] text-xs italic text-[#7a7d70]">
                We look forward to welcoming you
              </p>
            </div>
          </article>

          <a
            className="group flex items-center gap-2.75 whitespace-nowrap text-[10px] tracking-[0.08em] text-[#26372d] no-underline max-[900px]:col-span-full max-[900px]:justify-self-center max-[620px]:col-auto max-[620px]:mt-0.75 max-[620px]:justify-self-start"
            href={`https://www.google.com/maps/search/?api=1&query=${venueSearch}`}
            target="_blank"
            rel="noreferrer"
            aria-label="Find Hotel Sea Green on Google Maps"
          >
            <span
              className="grid h-9 w-9 place-items-center rounded-full border border-[#c9c8bb] text-[15px] text-[#a68c5a] motion-safe:transition-[color,background] motion-safe:duration-180 group-hover:bg-[#26372d] group-hover:text-white group-focus-visible:bg-[#26372d] group-focus-visible:text-white"
              aria-hidden="true"
            >
              ↗
            </span>
            <span>Find the venue</span>
          </a>
        </div>
      </section>

      <footer className="flex min-h-24.75 items-center justify-between">
        <FlowerMark />
        <p className="font-[Georgia,'Times_New_Roman',serif] text-xs italic text-[#26372d]">
          Best compliments from Mohomed Faslan{" "}
          <span className="text-[#a68c5a]">&</span> Kisnath S.A Marikkar
        </p>
        <FlowerMark />
      </footer>
    </main>
  );
}
