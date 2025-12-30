import clsx from "clsx";
import imgLogo1 from "../assets/83355803525a6978565c2af8a9f0438fd4508523.png";
import imgRectangle22 from "../assets/cbe91978b721828493bd5c572239fca7189bef70.png";
import imgRectangle23 from "../assets/ea91d04531ede0fc909f5d5c9539f6344d47bca7.png";
import imgRectangle24 from "../assets/bde097ec5bb92b5d978ccaf44775792a7bce338a.png";
import img7A87Dbf17738378Aef5F79703737Bb392 from "../assets/cdf43fbaf0e2eb21d59add48c3166f6bc7cfcd15.png";
type HelperProps = {
  text: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  additionalClassNames?: string;
};

function Helper({ text, text1, text2, text3, text4, additionalClassNames = "" }: HelperProps) {
  return (
    <div className={clsx("[grid-area:1_/_1] font-['Source_Han_Sans_SC:Medium',sans-serif] h-[182px] leading-[50px] not-italic relative text-[16px] w-[685px]", additionalClassNames)}>
      <p className="mb-0">{text}</p>
      <p className="mb-0">{text1}</p>
      <p className="mb-0">{text2}</p>
      <p className="mb-0">{text3}</p>
      <p>{text4}</p>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[92px] items-end leading-[0] relative size-full" data-name="关于我们">
      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="导航栏">
        <div className="[grid-area:1_/_1] bg-white h-[127px] ml-0 mt-0 w-[1920px]" />
        <p className="[grid-area:1_/_1] font-['Source_Han_Sans_SC:Regular',sans-serif] leading-[50px] ml-[1222px] mt-[57px] not-italic relative text-[16px] text-black text-center text-nowrap translate-x-[-50%]">Home</p>
        <p className="[grid-area:1_/_1] font-['Source_Han_Sans_SC:Regular',sans-serif] leading-[50px] ml-[1315.5px] mt-[57px] not-italic relative text-[16px] text-black text-center text-nowrap translate-x-[-50%]">Team</p>
        <p className="[grid-area:1_/_1] font-['Source_Han_Sans_SC:Regular',sans-serif] leading-[50px] ml-[1410px] mt-[57px] not-italic relative text-[16px] text-black text-center text-nowrap translate-x-[-50%]">Product</p>
        <p className="[grid-area:1_/_1] font-['Source_Han_Sans_SC:Heavy',sans-serif] leading-[50px] ml-[1565px] mt-[57px] not-italic relative text-[#f9883c] text-[16px] text-nowrap text-right translate-x-[-100%]">About Us</p>
        <div className="[grid-area:1_/_1] h-[82px] ml-[354px] mt-[48px] relative w-[225px]" data-name="logo 1">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogo1} />
        </div>
      </div>
      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="团队介绍">
        <div className="[grid-area:1_/_1] bg-white h-[396px] ml-0 mt-0 w-[1926px]" />
        <div className="[grid-area:1_/_1] h-[396px] ml-[364px] mt-0 relative w-[543px]">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle22} />
        </div>
        <p className="[grid-area:1_/_1] font-['Source_Han_Sans_SC:Bold',sans-serif] leading-[50px] ml-[947px] mt-0 not-italic relative text-[36px] text-black text-nowrap">CoreOcean</p>
        <p className="[grid-area:1_/_1] font-['Source_Han_Sans_SC:Medium',sans-serif] h-[322px] leading-[36px] ml-[947px] mt-[74px] not-italic relative text-[#333] text-[16px] w-[614px]">{`CoreOcean sets out towards the vast ocean of stars, starting from a single fruit core. We come from Guoxin Technology and are a cross-disciplinary middle school student team named "CoreOcean". Our journey is the vast future of the fruit and vegetable industry. Although we come from different fields, we are united by the same dream. The team of five members, each performing their own duties, is like the core gears in a precision instrument, jointly driving the innovation engine of Guoxin Technology`}</p>
      </div>
      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="团队愿景">
        <div className="[grid-area:1_/_1] h-[494px] ml-0 mt-0 relative w-[1920px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[218.53%] left-0 max-w-none top-[-87.2%] w-full" src={imgRectangle23} />
          </div>
        </div>
        <div className="[grid-area:1_/_1] bg-[rgba(170,73,236,0.44)] h-[494px] ml-0 mt-0 w-[1920px]" />
        <p className="[grid-area:1_/_1] font-['Source_Han_Sans_SC:Bold',sans-serif] leading-[60px] ml-[965.5px] mt-[180px] not-italic relative text-[40px] text-center text-white translate-x-[-50%] w-[1223px]">Help fruit farmers enjoy high-quality fruits at high prices and enable consumers to choose fruits with peace of mind</p>
      </div>
      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="联系我们">
        <div className="[grid-area:1_/_1] bg-white h-[254px] ml-0 mt-0 w-[1920px]" />
        <p className="[grid-area:1_/_1] font-['Source_Han_Sans_SC:Bold',sans-serif] leading-[50px] ml-[361px] mt-[12px] not-italic relative text-[36px] text-black text-nowrap">Contact us</p>
        <div className="[grid-area:1_/_1] h-[242px] ml-[1160px] mt-[12px] relative w-[398px]">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle24} />
        </div>
        <Helper text="Email： fruitcore.tech@outlook.com" text1="Telephone：19357170700" text2="Address：Xinhu Business Building , Xihu District, Hangzhou City, Zhejiang Province, China" text3="&nbsp;" text4="&nbsp;" additionalClassNames="ml-[360px] mt-[90px] text-black" />
      </div>
      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="尾部">
        <div className="[grid-area:1_/_1] bg-black h-[392px] ml-0 mt-0 w-[1920px]" />
        <div className="[grid-area:1_/_1] capitalize font-['Source_Han_Sans_SC:Medium',sans-serif] h-[246px] leading-[50px] ml-[587px] mt-[72px] not-italic relative text-[16px] text-white w-[163px]">
          <p className="mb-0">Home</p>
          <p className="mb-0">{`Team `}</p>
          <p className="mb-0">product</p>
          <p className="mb-0">solution</p>
          <p>About us</p>
        </div>
        <Helper text="Email： fruitcore.tech@outlook.com" text1="Telephone：19357170700" text2="Address：Xinhu Business Building , Xihu District, Hangzhou City, Zhejiang Province, China" text3="&nbsp;" text4="&nbsp;" additionalClassNames="ml-[878px] mt-[79px] text-white" />
        <div className="[grid-area:1_/_1] ml-[362px] mt-[95px] relative size-[92px]" data-name="7a87dbf17738378aef5f79703737bb39 2">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img7A87Dbf17738378Aef5F79703737Bb392} />
        </div>
      </div>
    </div>
  );
}