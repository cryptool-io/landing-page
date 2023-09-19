import React, { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import ArrowBelow from "public/assets/icons/ArrowBelow";
import Lottie from "react-lottie";
import { cx } from "@emotion/css";
import { useMediaSize } from "components/hooks/media-size";
import IntroSVGAnimation from "public/assets/icons/Cryptool_Homepage_Animation.json";
interface IntroSectionProps {
  activeSlide?: number;
  handleSlideToTwo?: () => void;
  isSubscription: boolean;
  setIsSubscription: Dispatch<SetStateAction<boolean>>;
}
const IntroSection: React.FC<IntroSectionProps> = ({
  handleSlideToTwo,
  activeSlide,
  isSubscription,
  setIsSubscription,
}) => {
  const { isTablet } = useMediaSize();
  return (
    <>
      <div
        className={cx(
          "w-full bg-firstSection flex justify-center",
          !isTablet && "h-full",
          isTablet && "h-[100vh]"
        )}
      >
        <div className="max-w-[1560px] w-full flex flex-col justify-between z-[1111]">
          <div
            className={cx(
              "flex justify-between items-center h-full",
              isTablet ? "flex-col-reverse !justify-around" : "flex-row"
            )}
          >
            <div
              className={cx(
                "w-full items-center flex flex-col gap-10 justify-center max-w-[700px]",
                isTablet && "!justify-start !gap-5"
              )}
            >
              <Image
                className={cx(
                  "mt-14",
                  activeSlide === 0 && "animate-normal-animation duration-1000",
                  isTablet && "!mt-0 hidden"
                )}
                width={isTablet ? 400 : 650}
                height={279.92}
                src="/assets/icons/LogoWhiteBlur.png"
                alt="IntroImage"
              />
              <button
                type="button"
                className={cx(
                  "fuller-button mb-16 blue rounded-3xl text-white flex justify-center items-center flex-shrink-0 w-[324px] py-2 px-6 font-normal text-base shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]",
                  activeSlide === 0 && "animate-normal-animation duration-1000",
                  isTablet && "!mb-0"
                )}
                onClick={() => setIsSubscription(!isSubscription)}
              >
                Start Managing Today
              </button>
              <div
                className={cx(
                  "text-white opacity-[.8] font-robotic text-center tracking-wide max-w-[668px] xl:text-4xl text-3xl",
                  isTablet && "pb-10 !text-2xl",
                  activeSlide === 0 && "animate-normal-animation duration-1000"
                )}
              >
                Automated tool to easily manage, raise, invest and trade
                cryptocurrency assets
              </div>
            </div>
            <div
              className={cx(
                "relative w-full max-w-[600px] z-20",
                isTablet ? "flex justify-center" : "mr-[3cm]"
              )}
            >
              <div
                className={cx(
                  "z-10",
                  isTablet && "mt-24 flex justify-center h-[50vh]",
                  activeSlide === 0 && "animate-normal-animation duration-1000"
                )}
              >
                <Lottie
                  options={{
                    animationData: IntroSVGAnimation,
                    loop: false,
                  }}
                  isPaused={!isTablet && activeSlide !== 0}
                  isClickToPauseDisabled={true}
                  isStopped={!isTablet && activeSlide !== 0}
                />
              </div>
            </div>
          </div>
          <div
            className="flex flex-col justify-center items-center mt-[-32px] swing"
            onClick={handleSlideToTwo}
          >
            <ArrowBelow className="z-10 " />
            <ArrowBelow className="z-10 mt-[-9px]" />
          </div>
        </div>
      </div>
      <Image
        alt="Wireframe"
        className={cx(
          "w-auto z-[0] absolute bottom-0 right-0 !opacity-80 wireframe",
          !isTablet && "h-[100%]"
        )}
        width={1700}
        height={1650}
        src="/assets/icons/Artboard.png"
      />
    </>
  );
};

export default IntroSection;
