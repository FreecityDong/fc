import clsx from "clsx";
import imgRectangle1 from "../assets/9bfe38c805c15e2fe9d86040f9e202c36ff163e2.png";
import imgLogo1 from "../assets/83355803525a6978565c2af8a9f0438fd4508523.png";
import imgRectangle16 from "../assets/929a5eb596252650adc24dcad9de0f38ace1d842.png";
import imgRectangle17 from "../assets/5b80cd3ad1989377a87b692b125098b1dd66d3d8.png";
import imgRectangle18 from "../assets/8b64695492aedae5abf7b2d534861a1a0a0566e6.png";
import img7A87Dbf17738378Aef5F79703737Bb392 from "../assets/cdf43fbaf0e2eb21d59add48c3166f6bc7cfcd15.png";
type Component4HelperProps = {
  additionalClassNames?: string;
};

function Component4Helper({ additionalClassNames = "" }: Component4HelperProps) {
  return (
    <div className={clsx("[grid-area:1_/_1] ml-[939px] relative size-[68px]", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68 68">
        <circle cx="34" cy="34" fill="var(--fill-0, #F9883C)" id="Ellipse 4" r="34" />
      </svg>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[51px] items-center leading-[0] relative size-full" data-name="产品">
      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="导航栏">
        <div className="[grid-area:1_/_1] bg-white h-[127px] ml-0 mt-0 w-[1920px]" />
        <p className="[grid-area:1_/_1] font-['Source_Han_Sans_SC:Regular',sans-serif] leading-[50px] ml-[1222.5px] mt-[64px] not-italic relative text-[16px] text-black text-center text-nowrap translate-x-[-50%]">Home</p>
        <p className="[grid-area:1_/_1] font-['Source_Han_Sans_SC:Regular',sans-serif] leading-[50px] ml-[1316px] mt-[64px] not-italic relative text-[16px] text-black text-center text-nowrap translate-x-[-50%]">Team</p>
        <p className="[grid-area:1_/_1] font-['Source_Han_Sans_SC:Heavy',sans-serif] leading-[50px] ml-[1411px] mt-[64px] not-italic relative text-[#f9883c] text-[16px] text-center text-nowrap translate-x-[-50%]">Product</p>
        <p className="[grid-area:1_/_1] font-['Source_Han_Sans_SC:Regular',sans-serif] leading-[50px] ml-[1565.5px] mt-[64px] not-italic relative text-[16px] text-black text-nowrap text-right translate-x-[-100%]">About Us</p>
        <div className="[grid-area:1_/_1] h-[82px] ml-[354.5px] mt-[55px] relative w-[225px]" data-name="logo 1">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogo1} />
        </div>
        <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-0 mt-[200px] place-items-start relative" data-name="banner">
          <div className="[grid-area:1_/_1] h-[600px] ml-0 mt-0 relative w-[1920px]">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle1} />
          </div>
          <div className="[grid-area:1_/_1] bg-[rgba(32,0,26,0.49)] h-[600px] ml-0 mt-0 w-[1920px]" />
          <p className="[grid-area:1_/_1] capitalize font-['YouSheBiaoTiHei:Regular',sans-serif] leading-[50px] ml-[490px] mt-[263px] not-italic relative text-[54px] text-nowrap text-white">Scan the Fruit, Get the Truth</p>
        </div>
      </div>
      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="图文排版示例1">
        <div className="[grid-area:1_/_1] h-[900px] ml-0 mt-0 relative w-[1200px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-full left-[-15.03%] max-w-none top-0 w-[133.39%]" src={imgRectangle16} />
          </div>
        </div>
        <p className="[grid-area:1_/_1] font-['Source_Han_Sans_SC:Medium',sans-serif] h-[200px] leading-[50px] ml-px mt-[923px] not-italic relative text-[#333] text-[16px] w-[1197px]">
          <span className="font-['Source_Han_Sans_SC:Bold',sans-serif]">{`Product Introduction 1: `}</span>
          <span>{`The CoreDetector directly addresses the health risks associated with chemically ripened fruits by analyzing internal moisture levels and volatile organic compound profiles to distinguish between naturally ripened and artificially ripened produce. It enables consumers to easily identify issues such as nutrient loss and dry, unpalatable texture caused by artificial ripening, ensuring every bite of fruit is naturally nourishing and wholesome—elevating the experience from "eating with peace of mind" to "eating with true nourishment."`}</span>
        </p>
      </div>
      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="图文排版示例2">
        <div className="[grid-area:1_/_1] h-[297px] ml-0 mt-[12px] relative w-[400px]">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle17} />
        </div>
        <p className="[grid-area:1_/_1] font-['Source_Han_Sans_SC:Medium',sans-serif] h-[285px] leading-[50px] ml-[418px] mt-0 not-italic relative text-[#333] text-[16px] w-[781px]">{`Product Introduction 2: The CoreDetector is an intelligent inspection device that can "see through" the inside of fruits. Without cutting them open, it quickly detects issues such as moisture levels, hollowness, and overripeness, helping farmers, distributors, and consumers accurately assess fruit quality and move beyond reliance on gut feelings when making selections. It is suitable for various settings, including orchards, wholesale markets, and supermarkets.`}</p>
      </div>
      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="图文排版示例3">
        <div className="[grid-area:1_/_1] h-[297px] ml-[787px] mt-0 relative w-[400px]">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle18} />
        </div>
        <p className="[grid-area:1_/_1] font-['Source_Han_Sans_SC:Medium',sans-serif] h-[297px] leading-[50px] ml-0 mt-0 not-italic relative text-[#333] text-[16px] w-[781px]">Product Introduction 3: The CoreDetector is equipped with a self-developed multimodal sensor fusion algorithm, integrating a high-precision gas sensor (for detecting volatile organic compounds), an acoustic resonance analysis module (for identifying frequency characteristics), and a 3D visual modeling system. By correlating sensor data with internal fruit quality parameters through machine learning models, it achieves quantitative detection of water content and internal defects.</p>
      </div>
      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="项目历程">
        <div className="[grid-area:1_/_1] bg-[#f9f0ff] h-[1416px] ml-0 mt-0 w-[1920px]" />
        <p className="[grid-area:1_/_1] capitalize font-['YouSheBiaoTiHei:Regular',sans-serif] leading-[50px] ml-[963.5px] mt-[94px] not-italic relative text-[36px] text-black text-center text-nowrap translate-x-[-50%]">From Concept to Core Technological Breakthrough</p>
        <div className="[grid-area:1_/_1] bg-[#aa49ec] h-[1083px] ml-[963px] mt-[261px] rounded-[50px] w-[20px]" />
        <Component4Helper additionalClassNames="mt-[331px]" />
        <p className="[grid-area:1_/_1] capitalize font-['Source_Han_Sans_SC:Bold',sans-serif] h-[36px] leading-[36px] ml-[543px] mt-[331px] not-italic relative text-[20px] text-black w-[373px]">Technical Concept Validation Phase</p>
        <p className="[grid-area:1_/_1] capitalize font-['Source_Han_Sans_SC:Bold',sans-serif] h-[36px] leading-[36px] ml-[1045px] mt-[560px] not-italic relative text-[20px] text-black w-[373px]">Prototype Development Phase</p>
        <p className="[grid-area:1_/_1] capitalize font-['Source_Han_Sans_SC:Regular',sans-serif] h-[125px] leading-[24px] ml-[543px] mt-[372px] not-italic relative text-[14px] text-black w-[373px]">{`Inspired by the common challenge of"how to select the right fruit"in daily life, the concept of the"Fruit Core Detector"was born. Initial detection methods, product design, and functionality were planned, and market research was initiated to validate feasibility.`}</p>
        <p className="[grid-area:1_/_1] capitalize font-['Source_Han_Sans_SC:Bold',sans-serif] h-[36px] leading-[36px] ml-[543px] mt-[781px] not-italic relative text-[20px] text-black w-[373px]">Algorithm Optimization Phase</p>
        <p className="[grid-area:1_/_1] capitalize font-['Source_Han_Sans_SC:Bold',sans-serif] h-[36px] leading-[36px] ml-[1035px] mt-[1027px] not-italic relative text-[20px] text-black w-[373px]">Product Testing Phase</p>
        <p className="[grid-area:1_/_1] capitalize font-['Source_Han_Sans_SC:Regular',sans-serif] h-[125px] leading-[24px] ml-[543px] mt-[822px] not-italic relative text-[14px] text-black w-[353px]">{`Identified and resolved various flaws, enhancing the algorithm for greater robustness and accuracy. Large-scale data training is being utilized to improve the core algorithm's precision, refining and upgrading the first-generation product.`}</p>
        <p className="[grid-area:1_/_1] capitalize font-['Source_Han_Sans_SC:Regular',sans-serif] h-[144px] leading-[24px] ml-[1035px] mt-[1068px] not-italic relative text-[14px] text-black w-[353px]">1. Currently, the device has achieved relatively accurate assessment for pomelos and watermelons. In the next phase, we plan to expand testing to more fruit varieties, collect additional data to enhance reliability and persuasiveness, optimize the algorithm, and carry out a series of related tasks.</p>
        <p className="[grid-area:1_/_1] capitalize font-['Source_Han_Sans_SC:Regular',sans-serif] h-[125px] leading-[24px] ml-[1045px] mt-[601px] not-italic relative text-[14px] text-black w-[373px]">Through online research and practical testing, the feasibility of the algorithms was verified. Using 3D printing technology, the first test prototype was successfully developed, integrating odor, sound, and 3D visual detection into an initial product.</p>
        <Component4Helper additionalClassNames="mt-[548px]" />
        <Component4Helper additionalClassNames="mt-[771px]" />
        <Component4Helper additionalClassNames="mt-[1009px]" />
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
        <div className="[grid-area:1_/_1] font-['Source_Han_Sans_SC:Medium',sans-serif] h-[182px] leading-[50px] ml-[878px] mt-[79px] not-italic relative text-[16px] text-white w-[685px]">
          <p className="mb-0">Email： fruitcore.tech@outlook.com</p>
          <p className="mb-0">Telephone：19357170700</p>
          <p className="mb-0">Address：Xinhu Business Building , Xihu District, Hangzhou City, Zhejiang Province, China</p>
          <p className="mb-0">&nbsp;</p>
          <p>&nbsp;</p>
        </div>
        <div className="[grid-area:1_/_1] ml-[362px] mt-[95px] relative size-[92px]" data-name="7a87dbf17738378aef5f79703737bb39 2">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img7A87Dbf17738378Aef5F79703737Bb392} />
        </div>
      </div>
    </div>
  );
}