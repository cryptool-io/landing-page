import { cx } from "@emotion/css";
import { useMediaSize } from "components/hooks/media-size";
import ArrowBelow from "public/assets/icons/ArrowBelow";
import ArrowTop from "public/assets/icons/ArrowTop";
import ArrowDown from "public/assets/icons/ArrowDown";
import { useEffect, useState } from "react";
import Link from "next/link";
import Mail from "public/assets/icons/Mail";
import Twitter from "public/assets/icons/Twitter";
import Linkedin from "public/assets/icons/Linkedin";
import Telegram from "public/assets/icons/Telegram";
import Calendar from "public/assets/icons/Calendar";

interface RightNavBar {}

const RightNavBar: React.FC<RightNavBar> = ({}) => {
  const { isMiniMobile } = useMediaSize();
  const [isactive, setIsactive] = useState<string>("");
  const [isClickStarted, setIsClickStarted] = useState<boolean>(false);
  const [isClickAccount, setIsClickAccount] = useState<boolean>(false);
  const [isClickModules, setIsClickModules] = useState<boolean>(false);
  const [isClickPortfolio, setIsClickPortfolio] = useState<boolean>(false);
  const [isClickRaise, setIsClickRaise] = useState<boolean>(false);
  const [isClickMarket, setIsClickMarket] = useState<boolean>(false);
  const [isClickBroker, setIsClickBroker] = useState<boolean>(false);
  return (
    <>
      <div>
        <div
          className={cx(
            "min-w-[300px] pl-[30px] mr-4 flex flex-col justify-end relative",
            isMiniMobile && "hidden"
          )}
        >
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
            <div className="text-[#A2A9B9] py-[5px] rounded-md px-[9px] font-robotic text-xs font-semibold leading-[18px] tracking-[1.2px] uppercase">
              ABOUT US
            </div>
            <div className="flex flex-col">
              <div className="py-[5px] px-[9px] text-[#CCCFD4] hover:bg-[#85a8e01a] cursor-pointer rounded-md text-sm font-normal leading-[22px]">
                One Pager
              </div>
              <div
                className={cx(
                  "py-[5px] px-[9px] hover:bg-[#85a8e01a] rounded-md text-sm font-normal leading-[22px] flex cursor-pointer justify-between",
                  isactive === "Getting Started"
                    ? "text-[#71A8FF] bg-[#85a8e01a]"
                    : "text-[#CCCFD4]"
                )}
                onClick={() =>
                  isClickModules
                    ? (setIsClickStarted(true),
                      setIsClickAccount(false),
                      setIsactive("Getting Started"),
                      setIsClickPortfolio(false),
                      setIsClickRaise(false),
                      setIsClickMarket(false),
                      setIsClickBroker(false),
                      setIsClickModules(false))
                    : isClickStarted
                    ? (setIsClickStarted(false),
                      setIsactive(""),
                      setIsClickAccount(false))
                    : (setIsClickStarted(true), setIsactive("Getting Started"))
                }
              >
                Getting Started
                {isClickStarted ? (
                  <ArrowTop
                    className="w-[18px]"
                    width={"18px"}
                    height={"18px"}
                  />
                ) : (
                  <ArrowDown
                    className="w-[18px]"
                    width={"18px"}
                    height={"18px"}
                  />
                )}
              </div>
              {isClickStarted && (
                <div className="flex flex-col ml-[17px] duration-1000 border-solid border-[#374151] border-l-[1px]">
                  <div
                    className={cx(
                      "py-[5px] pr-[9px] pl-2 hover:bg-[#85a8e01a] rounded-md text-sm font-normal leading-[22px] flex cursor-pointer justify-between",
                      isactive === "Account Registration"
                        ? "text-[#71A8FF] bg-[#85a8e01a]"
                        : "text-[#CCCFD4]"
                    )}
                    onClick={() =>
                      isClickAccount
                        ? (setIsClickAccount(false), setIsactive(""))
                        : (setIsClickAccount(true),
                          setIsactive("Account Registration"))
                    }
                  >
                    Account Registration
                    {isClickAccount ? (
                      <ArrowTop
                        className="w-[18px]"
                        width={"18px"}
                        height={"18px"}
                      />
                    ) : (
                      <ArrowDown
                        className="w-[18px]"
                        width={"18px"}
                        height={"18px"}
                      />
                    )}
                  </div>
                  {isClickAccount && (
                    <div className="py-[5px] pr-[9px] ml-2 pl-2 border-solid border-[#374151] border-l-[1px] text-[#CCCFD4] text-sm font-normal leading-[22px] flex cursor-pointer justify-between">
                      Ambassador Referral
                    </div>
                  )}
                  <div className="py-[5px] pr-[9px] pl-2 text-[#CCCFD4] rounded-md text-sm font-normal leading-[22px] flex cursor-pointer justify-between">
                    Creating Portfolio
                  </div>
                  <div className="py-[5px] pr-[9px] pl-2 text-[#CCCFD4] rounded-md text-sm font-normal leading-[22px] flex cursor-pointer justify-between">
                    Creating Group
                  </div>
                  <div className="py-[5px] pr-[9px] pl-2 text-[#CCCFD4] rounded-md text-sm font-normal leading-[22px] flex cursor-pointer justify-between">
                    Creating Pool
                  </div>
                  <div className="py-[5px] pr-[9px] pl-2 text-[#CCCFD4] rounded-md text-sm font-normal leading-[22px] flex cursor-pointer justify-between">
                    Creating Listing
                  </div>
                  <div className="py-[5px] pr-[9px] pl-2 text-[#CCCFD4] rounded-md text-sm font-normal leading-[22px] flex cursor-pointer justify-between">
                    Broker Registration
                  </div>
                  <div className="py-[5px] pr-[9px] pl-2 text-[#CCCFD4] rounded-md text-sm font-normal leading-[22px] flex cursor-pointer justify-between">
                    Staking
                  </div>
                </div>
              )}
              <div
                className={cx(
                  "py-[5px] px-[9px] hover:bg-[#85a8e01a] cursor-pointer rounded-md text-sm font-normal leading-[22px] flex justify-between",
                  isactive === "Portfolio Modules"
                    ? "text-[#71A8FF] bg-[#85a8e01a]"
                    : "text-[#CCCFD4]"
                )}
                onClick={() =>
                  isClickStarted
                    ? (setIsClickStarted(false),
                      setIsClickAccount(false),
                      setIsactive("Portfolio Modules"),
                      setIsClickModules(true))
                    : (setIsClickModules(!isClickModules),
                      isactive === ""
                        ? setIsactive("Portfolio Modules")
                        : setIsactive(""))
                }
              >
                Portfolio Modules
                {isClickModules ? (
                  <ArrowTop
                    className="w-[18px]"
                    width={"18px"}
                    height={"18px"}
                  />
                ) : (
                  <ArrowDown
                    className="w-[18px]"
                    width={"18px"}
                    height={"18px"}
                  />
                )}
              </div>
              {isClickModules && (
                <div className="flex flex-col ml-[17px] duration-1000 border-solid border-[#374151] border-l-[1px]">
                  <div
                    className={cx(
                      "py-[5px] pr-[9px] pl-2 text-[#CCCFD4] hover:bg-[#85a8e01a] rounded-md text-sm font-normal leading-[22px] flex cursor-pointer justify-between",
                      isactive === "Portfolio"
                        ? "text-[#71A8FF] bg-[#85a8e01a]"
                        : "text-[#CCCFD4]"
                    )}
                    onClick={() =>
                      isClickRaise === true || isClickMarket === true
                        ? (setIsClickMarket(false),
                          setIsClickPortfolio(true),
                          setIsactive("Portfolio"),
                          setIsClickRaise(false),
                          setIsClickBroker(false))
                        : (setIsClickPortfolio(!isClickPortfolio),
                          isactive === ""
                            ? setIsactive("Portfolio")
                            : setIsactive(""))
                    }
                  >
                    Portfolio
                    {isClickPortfolio ? (
                      <ArrowTop
                        className="w-[18px]"
                        width={"18px"}
                        height={"18px"}
                      />
                    ) : (
                      <ArrowDown
                        className="w-[18px]"
                        width={"18px"}
                        height={"18px"}
                      />
                    )}
                  </div>
                  {isClickPortfolio && (
                    <>
                      <div className="py-[5px] pr-[9px] ml-2 pl-2 border-solid border-[#374151] border-l-[1px] text-[#CCCFD4] text-sm font-normal leading-[22px] flex cursor-pointer justify-between">
                        Management
                      </div>
                      <div className="py-[5px] pr-[9px] ml-2 pl-2 border-solid border-[#374151] border-l-[1px] text-[#CCCFD4] text-sm font-normal leading-[22px] flex cursor-pointer justify-between">
                        Events & Action Calendar
                      </div>
                      <div className="py-[5px] pr-[9px] ml-2 pl-2 border-solid border-[#374151] border-l-[1px] text-[#CCCFD4] text-sm font-normal leading-[22px] flex cursor-pointer justify-between">
                        Staking Tracker
                      </div>
                    </>
                  )}
                  <div
                    className={cx(
                      "py-[5px] pr-[9px] pl-2 text-[#CCCFD4] hover:bg-[#85a8e01a] rounded-md text-sm font-normal leading-[22px] flex cursor-pointer justify-between",
                      isactive === "Raise"
                        ? "text-[#71A8FF] bg-[#85a8e01a]"
                        : "text-[#CCCFD4]"
                    )}
                    onClick={() =>
                      isClickPortfolio === true || isClickMarket === true
                        ? (setIsClickMarket(false),
                          setIsClickPortfolio(false),
                          setIsactive("Raise"),
                          setIsClickRaise(true),
                          setIsClickBroker(false))
                        : (setIsClickRaise(!isClickRaise),
                          isactive === ""
                            ? setIsactive("Raise")
                            : setIsactive(""))
                    }
                  >
                    Raise
                    {isClickRaise ? (
                      <ArrowTop
                        className="w-[18px]"
                        width={"18px"}
                        height={"18px"}
                      />
                    ) : (
                      <ArrowDown
                        className="w-[18px]"
                        width={"18px"}
                        height={"18px"}
                      />
                    )}
                  </div>
                  {isClickRaise && (
                    <>
                      <div className="py-[5px] pr-[9px] ml-2 pl-2 border-solid border-[#374151] border-l-[1px] text-[#CCCFD4] text-sm font-normal leading-[22px] flex cursor-pointer justify-between">
                        VC Management
                      </div>
                      <div className="py-[5px] pr-[9px] ml-2 pl-2 border-solid border-[#374151] border-l-[1px] text-[#CCCFD4] text-sm font-normal leading-[22px] flex cursor-pointer justify-between">
                        Crowdfunding
                      </div>
                      <div className="py-[5px] pr-[9px] ml-2 pl-2 border-solid border-[#374151] border-l-[1px] text-[#CCCFD4] text-sm font-normal leading-[22px] flex cursor-pointer justify-between">
                        Fundraising
                      </div>
                      <div className="py-[5px] pr-[9px] ml-2 pl-2 border-solid border-[#374151] border-l-[1px] text-[#CCCFD4] text-sm font-normal leading-[22px] flex cursor-pointer justify-between">
                        Presale / IDO Funding
                      </div>
                    </>
                  )}
                  <div
                    className={cx(
                      "py-[5px] pr-[9px] pl-2 text-[#CCCFD4] hover:bg-[#85a8e01a] rounded-md text-sm font-normal leading-[22px] flex cursor-pointer justify-between",
                      isactive === "Market"
                        ? "text-[#71A8FF] bg-[#85a8e01a]"
                        : "text-[#CCCFD4]"
                    )}
                    onClick={() =>
                      isClickPortfolio === true || isClickRaise === true
                        ? (setIsClickMarket(true),
                          setIsClickPortfolio(false),
                          setIsactive("Market"),
                          setIsClickRaise(false))
                        : (setIsClickMarket(!isClickMarket),
                          isactive === ""
                            ? setIsactive("Market")
                            : setIsactive(""))
                    }
                  >
                    Market
                    {isClickMarket ? (
                      <ArrowTop
                        className="w-[18px]"
                        width={"18px"}
                        height={"18px"}
                      />
                    ) : (
                      <ArrowDown
                        className="w-[18px]"
                        width={"18px"}
                        height={"18px"}
                      />
                    )}
                  </div>
                  {isClickMarket && (
                    <div className="border-solid ml-2 border-[#374151] border-l-[1px]">
                      <div className="py-[5px] pr-[9px] pl-2  text-[#CCCFD4] text-sm font-normal leading-[22px] flex cursor-pointer justify-between">
                        Allocation OTC
                      </div>
                      <div
                        className={cx(
                          "py-[5px] pr-[9px] pl-2  text-sm font-normal leading-[22px] flex cursor-pointer justify-between rounded-md",
                          isactive === "Broker Sales"
                            ? "text-[#71A8FF] bg-[#85a8e01a]"
                            : "text-[#CCCFD4]"
                        )}
                        onClick={() => (
                          setIsClickBroker(!isClickBroker),
                          isClickBroker
                            ? setIsactive("")
                            : setIsactive("Broker Sales")
                        )}
                      >
                        Broker Sales
                        {isClickBroker ? (
                          <ArrowTop
                            className="w-[18px]"
                            width={"18px"}
                            height={"18px"}
                          />
                        ) : (
                          <ArrowDown
                            className="w-[18px]"
                            width={"18px"}
                            height={"18px"}
                          />
                        )}
                      </div>
                      {isClickBroker && (
                        <div
                          className={cx(
                            "py-[5px] pr-[9px] pl-2 ml-2 border-solid border-[#374151] border-l-[1px] text-[#CCCFD4] text-sm font-normal leading-[22px] flex cursor-pointer justify-between"
                          )}
                        >
                          SAFT / SAFE
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
              <div className="py-[5px] px-[9px] text-[#CCCFD4] cursor-pointer rounded-md text-sm font-normal leading-[22px]">
                Platform Services
              </div>
              <div className="py-[5px] px-[9px] text-[#CCCFD4] cursor-pointer rounded-md text-sm font-normal leading-[22px]">
                Platform Account & Fees
              </div>
              <div className="py-[5px] px-[9px] text-[#CCCFD4] cursor-pointer rounded-md text-sm font-normal leading-[22px]">
                Roadmap
              </div>
              <div className="py-[5px] px-[9px] text-[#CCCFD4] cursor-pointer rounded-md text-sm font-normal leading-[22px]">
                Token Utility
              </div>
              <div className="py-[5px] px-[9px] text-[#CCCFD4] cursor-pointer rounded-md text-sm font-normal leading-[22px]">
                Partnerships
              </div>
              <div className="py-[5px] px-[9px] text-[#CCCFD4] cursor-pointer rounded-md text-sm font-normal leading-[22px]">
                Investors
              </div>
              <div className="py-[5px] px-[9px] text-[#CCCFD4] cursor-pointer rounded-md text-sm font-normal leading-[22px]">
                Team
              </div>
              <div className="text-[#A2A9B9] py-[5px] rounded-md px-[9px] font-robotic text-xs font-semibold leading-[18px] tracking-[1.2px] uppercase mt-[37px]">
                Documentation
              </div>
              <div className="py-[5px] px-[9px] text-[#CCCFD4] cursor-pointer rounded-md text-sm font-normal leading-[22px]">
                Tokenomics
              </div>
              <div className="py-[5px] px-[9px] text-[#CCCFD4] cursor-pointer rounded-md text-sm font-normal leading-[22px]">
                PitchDeck
              </div>
              <div className="py-[5px] px-[9px] text-[#CCCFD4] cursor-pointer rounded-md text-sm font-normal leading-[22px]">
                Whitepaper
              </div>
              <div className="py-[5px] px-[9px] text-[#CCCFD4] cursor-pointer rounded-md text-sm font-normal leading-[22px]">
                Economic (Business) Strategy
              </div>
              <div className="py-[5px] px-[9px] text-[#CCCFD4] cursor-pointer rounded-md text-sm font-normal leading-[22px]">
                Ambassador Program
              </div>
              <div className="text-[#A2A9B9] py-[5px] rounded-md px-[9px] font-robotic text-xs font-semibold leading-[18px] tracking-[1.2px] uppercase mt-[37px]">
                Company
              </div>
              <div className="py-[5px] px-[9px] text-[#CCCFD4] cursor-pointer rounded-md text-sm font-normal leading-[22px]">
                Terms of Use
              </div>
              <div className="py-[5px] px-[9px] text-[#CCCFD4] cursor-pointer rounded-md text-sm font-normal leading-[22px]">
                Legal & Privacy
              </div>
              <div className="py-[5px] px-[9px] text-[#CCCFD4] cursor-pointer rounded-md text-sm font-normal leading-[22px]">
                Disclaimer
              </div>
              <div className="text-[#A2A9B9] py-[5px] rounded-md px-[9px] font-robotic text-xs font-semibold leading-[18px] tracking-[1.2px] uppercase mt-[37px]">
                Technical
              </div>
              <div className="py-[5px] px-[9px] text-[#CCCFD4] cursor-pointer rounded-md text-sm font-normal leading-[22px]">
                Security & Audits
              </div>
              <div className="py-[5px] px-[9px] text-[#CCCFD4] cursor-pointer rounded-md text-sm font-normal leading-[22px]">
                Contracts
              </div>
              <div className="py-[5px] px-[9px] text-[#CCCFD4] cursor-pointer rounded-md text-sm font-normal leading-[22px]">
                API
              </div>
              <div className="text-[#A2A9B9] py-[5px] rounded-md px-[9px] font-robotic text-xs font-semibold leading-[18px] tracking-[1.2px] uppercase mt-[37px]">
                Support
              </div>
              <div className="py-[5px] px-[9px] text-[#CCCFD4] cursor-pointer rounded-md text-sm font-normal leading-[22px]">
                Troubleshooting
              </div>
              <div className="py-[5px] px-[9px] text-[#CCCFD4] cursor-pointer rounded-md text-sm font-normal leading-[22px]">
                FAQ
              </div>
              <div className="py-[5px] px-[9px] text-[#CCCFD4] cursor-pointer rounded-md text-sm font-normal leading-[22px] mb-5">
                Contact
              </div>
            </div>
          </div>
        </div>
        <div className="sticky bottom-0 pb-[10px] bg-[#0F2421]">
              <div className="flex flex-row space-x-3 justify-center">
                <Link
                  target="blank"
                  href={"mailto:info@cryptool.io"}
                  className="cursor-pointer p-2 rounded-full w-fit bg-[#E2EEED] flex items-center text-base"
                >
                  <Mail width={14} height={16} />
                </Link>
                <Link
                  target="blank"
                  href={"https://twitter.com/cryptool_io"}
                  className="cursor-pointer p-2 rounded-full w-fit bg-[#E2EEED] flex items-center text-base"
                >
                  <Twitter width={14} height={16} />
                </Link>
                <Link
                  target="blank"
                  href={"https://linkedin.com/company/cryptool-io"}
                  className="cursor-pointer p-2 rounded-full w-fit bg-[#E2EEED] flex items-center text-base"
                >
                  <Linkedin width={14} height={16} />
                </Link>
                <Link
                  target="blank"
                  href={"https://t.me/cryptool_io"}
                  className="cursor-pointer p-2 rounded-full w-fit bg-[#E2EEED] flex items-center text-base"
                >
                  <Telegram width={14} height={16} />
                </Link>
                <Link
                  target="blank"
                  href={"https://calendly.com/cryptool_io/"}
                  className="cursor-pointer p-2 rounded-full w-fit bg-[#E2EEED] flex items-center text-base"
                >
                  <Calendar width={14} height={16} />
                </Link>
              </div>
        </div>
      </div>
    </>
  );
};

export default RightNavBar;
