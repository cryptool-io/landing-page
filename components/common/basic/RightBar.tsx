import { cx } from "@emotion/css";
import { useMediaSize } from "components/hooks/media-size";

interface RightNavBar {}

const RightNavBar: React.FC<RightNavBar> = ({}) => {
  const { isMiniMobile } = useMediaSize();
  return (
    <>
      <div className={cx("min-w-[300px] pl-[30px] mr-4 flex flex-col justify-end", isMiniMobile && "hidden")}>
        <div className="relative mt-20 pb-[17px] border-b-[1px] border-solid border-[#2B2E39]">
          <div className="absolute top-[18%] left-0 flex items-center pl-[17px] pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="h-9 w-full font-robotic text-sm leading-[22px] focus-visible:outline-none block p-[9px] pl-[35px] text-[#EAF2F7] border border-none rounded-lg bg-[#ffffff33] dark:bg-gray-700 dark:border-gray-600"
            placeholder="Search"
            required
          />
        </div>
        <div className="flex flex-col pt-[33px]">
          <div className="text-[#A2A9B9] py-[5px] px-[9px] font-robotic text-xs font-semibold leading-[18px] tracking-[1.2px] uppercase">ABOUT US</div>
          <div className="flex flex-col">
            <div className="py-[5px] px-[9px] text-[#CCCFD4] text-sm font-normal leading-[22px]">One Pager</div>
            <div className="py-[5px] px-[9px] text-[#CCCFD4] text-sm font-normal leading-[22px]">Getting Started</div>
            <div className="py-[5px] px-[9px] text-[#CCCFD4] text-sm font-normal leading-[22px]">Portfolio Modules</div>
            <div className="py-[5px] px-[9px] text-[#CCCFD4] text-sm font-normal leading-[22px]">Platform Services</div>
            <div className="py-[5px] px-[9px] text-[#CCCFD4] text-sm font-normal leading-[22px]">Platform Account & Fees</div>
            <div className="py-[5px] px-[9px] text-[#CCCFD4] text-sm font-normal leading-[22px]">Roadmap</div>
            <div className="py-[5px] px-[9px] text-[#CCCFD4] text-sm font-normal leading-[22px]">Token Utility</div>
            <div className="py-[5px] px-[9px] text-[#CCCFD4] text-sm font-normal leading-[22px]">Partnerships</div>
            <div className="py-[5px] px-[9px] text-[#CCCFD4] text-sm font-normal leading-[22px]">Investors</div>
            <div className="py-[5px] px-[9px] text-[#CCCFD4] text-sm font-normal leading-[22px]">Team</div>
            <div className="text-[#A2A9B9] py-[5px] px-[9px] font-robotic text-xs font-semibold leading-[18px] tracking-[1.2px] uppercase mt-[37px]">Documentation</div>
            <div className="py-[5px] px-[9px] text-[#CCCFD4] text-sm font-normal leading-[22px]">Tokenomics</div>
            <div className="py-[5px] px-[9px] text-[#CCCFD4] text-sm font-normal leading-[22px]">PitchDeck</div>
            <div className="py-[5px] px-[9px] text-[#CCCFD4] text-sm font-normal leading-[22px]">Whitepaper</div>
            <div className="py-[5px] px-[9px] text-[#CCCFD4] text-sm font-normal leading-[22px]">Economic (Business) Strategy</div>
            <div className="py-[5px] px-[9px] text-[#CCCFD4] text-sm font-normal leading-[22px]">Ambassador Program</div>
            <div className="text-[#A2A9B9] py-[5px] px-[9px] font-robotic text-xs font-semibold leading-[18px] tracking-[1.2px] uppercase mt-[37px]">Company</div>
            <div className="py-[5px] px-[9px] text-[#CCCFD4] text-sm font-normal leading-[22px]">Terms of Use</div>
            <div className="py-[5px] px-[9px] text-[#CCCFD4] text-sm font-normal leading-[22px]">Legal & Privacy</div>
            <div className="py-[5px] px-[9px] text-[#CCCFD4] text-sm font-normal leading-[22px]">Disclaimer</div>
            <div className="text-[#A2A9B9] py-[5px] px-[9px] font-robotic text-xs font-semibold leading-[18px] tracking-[1.2px] uppercase mt-[37px]">Company</div>
            <div className="py-[5px] px-[9px] text-[#CCCFD4] text-sm font-normal leading-[22px]">Technical</div>
            <div className="py-[5px] px-[9px] text-[#CCCFD4] text-sm font-normal leading-[22px]">Security & Audits</div>
            <div className="py-[5px] px-[9px] text-[#CCCFD4] text-sm font-normal leading-[22px]">Contracts</div>
            <div className="py-[5px] px-[9px] text-[#CCCFD4] text-sm font-normal leading-[22px]">API</div>
            <div className="text-[#A2A9B9] py-[5px] px-[9px] font-robotic text-xs font-semibold leading-[18px] tracking-[1.2px] uppercase mt-[37px]">Support</div>
            <div className="py-[5px] px-[9px] text-[#CCCFD4] text-sm font-normal leading-[22px]">Troubleshooting</div>
            <div className="py-[5px] px-[9px] text-[#CCCFD4] text-sm font-normal leading-[22px]">FAQ</div>
            <div className="py-[5px] px-[9px] text-[#CCCFD4] text-sm font-normal leading-[22px] mb-5">Contact</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightNavBar;
