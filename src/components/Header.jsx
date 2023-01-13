import { useState, useEffect, useRef } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLangEffect, setShowLangEffect] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const isMenuShowed =
      getComputedStyle(domRef.current).getPropertyValue("display") != "none";
    if (isMenuShowed && isOpen) {
      document.body.style.setProperty("overflow", "hidden");
      setShowLangEffect(true);
    } else {
      document.body.style.setProperty("overflow", "auto");
    }
  });

  useEffect(() => {
    function resizeListener() {
      const isMenuShowed =
      getComputedStyle(domRef.current).getPropertyValue("display") != "none";
      setShowLangEffect(isMenuShowed);
    }
    window.addEventListener('resize', resizeListener);
    return () => window.removeEventListener('resize', resizeListener)
  }, [setShowLangEffect]);
  return (
    <header className=" h-full flex justify-between items-center relative z-10 md:my-[63px] md:h-auto">
      <div className="  flex items-center ">
        <a className=" block  ">
          <span className="border-l-[10px] border-l-black  md:border-l-[34px] block h-2"></span>
        </a>
        <a
          href="/"
          className=" p-2.5 block text-sm leading-none md:flex items-center"
        >
          <span
            className={ `${showLangEffect ? '':'effect-text'} w-full min-w-[108px] name   text-[18px] md:text-[14px] leading-none `}
            data-text="KASHIWA SATO"
          >
            KASHIWA SATO
          </span>
          <span
            className={ `${showLangEffect ? '':'effect-text'} md:hidden llg:block w-full min-w-[125px] title  text-[10px] block text-[#575757] md:pl-2 leading-none  `}
            data-text="SAMURAI INC. TOKYO"
          >
            SAMURAI INC. TOKYO
          </span>
        </a>
      </div>
      <div ref={domRef} className=" flex items-center md:hidden">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="block text-gray-300 hover:text-gray-500 focus:outline-none"
        >
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            {isOpen ? (
              <path
                fillRule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            )}
          </svg>
        </button>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } bg-white  px-2 h-screen pb-4 md:flex fixed  overflow-hidden left-0 right-0 top-10 md:static md:h-auto md:pb-0 items-center justify-end `}
      >
        <a
          href="#"
          data-text="PROJECT"
          className={ `${!showLangEffect ? 'effect-text': ''} block px-1 py-1 text-[14px] `}
        >
          PROJECT
        </a>
        <span className=" hidden w-[1px] h-[12px] border-[1px]  text-[#ccc] md:inline"></span>
        <a
          href="#"
          data-text="PROFILE"
          className={ `${!showLangEffect ? 'effect-text': ''} block px-1 py-1 text-[14px] text-[#999] `}
        >
          PROFILE
        </a>
        <a
          href="#"
          data-text="CONTACT"
          className={ `${!showLangEffect ? 'effect-text': ''}  block px-1 py-1 text-[14px] text-[#999] `}
        >
          CONTACT
        </a>
        <div className="h-8 md:h-auto md:w-4 "></div>
        <a href="#" data-text="ENGLISH" className={ `${!showLangEffect ? 'effect-text': ''}  block px-1 py-1 text-[14px]  `}>
          ENGLISH
        </a>
        <a
          href="#"
          data-text="JAPANESE"
          className={ `${!showLangEffect ? 'effect-text': ''} block px-1 py-1 text-[14px] text-[#999] `}
        >
          JAPANESE
        </a>
        <a
          href="#"
          data-text="CHINESE"
          className={ `${!showLangEffect ? 'effect-text': ''} block px-1 py-1 text-[14px] text-[#999] `}
        >
          CHINESE
        </a>
        <div className="h-8 md:h-auto md:w-2 "></div>
        <div className=" hidden  md:block">
          <div className=" group  relative flex items-center justify-end ">
            <div className=" border-none p-1 relative group-hover:border-[1px] group-hover:border-solid bg-white group-hover:border-gray-300 flex justify-end group-hover:absolute group-hover:top-[-16px] group-hover:right-[-1px] ">
              <input
                type="input"
                className=" hidden text-[12px] w-[230px] focus-visible:outline-none group-hover:inline "
                placeholder="PLEASE INPUT KEYWORD"
              />
              <span className=" absolute top-[-2px] block bg-white left-[-3px] right-0 bottom-[-3px] transition-all ease-linear duration-300 group-hover:right-[102%]"></span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-3 h-3 z-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex text-[12px] md:hidden">
          <div className=" flex border-[1px] px-1 py-0 w-[215px] justify-between ">
            <input
              type="input"
              className=" grow block focus-visible:outline-none "
              placeholder="PLEASE INPUT KEYWORD"
            />
            <div className="grow-0 ">
              <svg
                className="h-6 w-6 fill-[#ccc] "
                viewBox="0 0 30 60"
                x="0px"
                y="0px"
                enableBackground={"new 0 0 30 60"}
              >
                {/* <path
                fillRule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
              /> */}
                <line
                  stroke="#999999"
                  strokeMiterlimit="10"
                  x1="15"
                  y1="15"
                  x2="45"
                  y2="45"
                />
                <line
                  stroke="#999999"
                  strokeMiterlimit="10"
                  x1="45"
                  y1="15"
                  x2="15"
                  y2="45"
                />
              </svg>
            </div>
          </div>
          <div className="bg-[#ccc] px-2 py-1">
            <button type="button" className="text-white align-sub ">
              SEARCH
            </button>
          </div>
        </div>{" "}
      </div>
    </header>
  );
}

export default Header;
