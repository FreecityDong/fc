import { Header } from './Header';
import { Footer } from './Footer';
import imgRectangle1 from "../assets/9bfe38c805c15e2fe9d86040f9e202c36ff163e2.png";
import imgRectangle16 from "../assets/929a5eb596252650adc24dcad9de0f38ace1d842.png";
import imgRectangle17 from "../assets/5b80cd3ad1989377a87b692b125098b1dd66d3d8.png";
import imgRectangle18 from "../assets/8b64695492aedae5abf7b2d534861a1a0a0566e6.png";

const milestones = [
  {
    title: "Technical Concept Validation Phase",
    description: "Inspired by the common challenge of \"how to select the right fruit\" in daily life, the concept of the \"Fruit Core Detector\" was born. Initial detection methods, product design, and functionality were planned, and market research was initiated to validate feasibility."
  },
  {
    title: "Prototype Development Phase",
    description: "Through online research and practical testing, the feasibility of the algorithms was verified. Using 3D printing technology, the first test prototype was successfully developed, integrating odor, sound, and 3D visual detection into an initial product."
  },
  {
    title: "Algorithm Optimization Phase",
    description: "Identified and resolved various flaws, enhancing the algorithm for greater robustness and accuracy. Large-scale data training is being utilized to improve the core algorithm's precision, refining and upgrading the first-generation product."
  },
  {
    title: "Product Testing Phase",
    description: "Currently, the device has achieved relatively accurate assessment for pomelos and watermelons. In the next phase, we plan to expand testing to more fruit varieties, collect additional data to enhance reliability and persuasiveness, optimize the algorithm, and carry out a series of related tasks."
  }
];

export default function ProductPage() {
  return (
    <div className="bg-white min-h-screen flex flex-col font-['Noto_Sans_SC',sans-serif]">
      <Header />

      {/* Hero Banner - 600px height */}
      <section className="relative w-full h-[400px] lg:h-[600px]">
        <img 
          alt="Fruit scanning technology" 
          className="absolute inset-0 w-full h-full object-cover" 
          src={imgRectangle1} 
        />
        <div className="absolute inset-0 bg-[rgba(32,0,26,0.49)]" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <h1 className="capitalize text-white text-center text-[36px] lg:text-[54px] leading-[50px] font-['YouSheBiaoTiHei',sans-serif]">
            Scan the Fruit, Get the Truth
          </h1>
        </div>
      </section>

      {/* Product Feature 1 - 1200px width, 900px image height */}
      <section className="w-full flex justify-center py-12 lg:py-20">
        <div className="w-full max-w-[1200px] px-6 lg:px-0">
          <div className="space-y-6">
            <div className="w-full h-auto lg:h-[900px] overflow-hidden rounded-lg">
              <img 
                alt="Fruit Core Detector scanning device" 
                className="w-full h-full object-cover" 
                src={imgRectangle16} 
              />
            </div>
            <p className="text-[16px] leading-[50px] text-[#333] font-medium">
              <span className="font-bold">Product Introduction 1:</span> The CoreDetector directly addresses the health risks associated with chemically ripened fruits by analyzing internal moisture levels and volatile organic compound profiles to distinguish between naturally ripened and artificially ripened produce. It enables consumers to easily identify issues such as nutrient loss and dry, unpalatable texture caused by artificial ripening, ensuring every bite of fruit is naturally nourishing and wholesome—elevating the experience from "eating with peace of mind" to "eating with true nourishment."
            </p>
          </div>
        </div>
      </section>

      {/* Product Feature 2 - 400px image width, 297px height, 781px text width */}
      <section className="w-full flex justify-center py-12 lg:py-20">
        <div className="w-full max-w-[1200px] px-6 lg:px-0">
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-[18px]">
            <div className="flex-shrink-0 w-full lg:w-[400px]">
              <img 
                alt="Product detection process" 
                className="w-full lg:w-[400px] h-auto lg:h-[297px] object-cover rounded-lg" 
                src={imgRectangle17} 
              />
            </div>
            <div className="flex-1 lg:max-w-[781px]">
              <p className="text-[16px] leading-[50px] text-[#333] font-medium">
                Product Introduction 2: The CoreDetector is an intelligent inspection device that can "see through" the inside of fruits. Without cutting them open, it quickly detects issues such as moisture levels, hollowness, and overripeness, helping farmers, distributors, and consumers accurately assess fruit quality and move beyond reliance on gut feelings when making selections. It is suitable for various settings, including orchards, wholesale markets, and supermarkets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Feature 3 - 400px image width, 297px height, 781px text width */}
      <section className="w-full flex justify-center py-12 lg:py-20">
        <div className="w-full max-w-[1200px] px-6 lg:px-0">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-6 lg:gap-[19px]">
            <div className="flex-shrink-0 w-full lg:w-[400px]">
              <img 
                alt="Technology components" 
                className="w-full lg:w-[400px] h-auto lg:h-[297px] object-cover rounded-lg" 
                src={imgRectangle18} 
              />
            </div>
            <div className="flex-1 lg:max-w-[781px]">
              <p className="text-[16px] leading-[50px] text-[#333] font-medium">
                Product Introduction 3: The CoreDetector is equipped with a self-developed multimodal sensor fusion algorithm, integrating a high-precision gas sensor (for detecting volatile organic compounds), an acoustic resonance analysis module (for identifying frequency characteristics), and a 3D visual modeling system. By correlating sensor data with internal fruit quality parameters through machine learning models, it achieves quantitative detection of water content and internal defects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Timeline - 项目历程 */}
      <section className="bg-[#f9f0ff] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="capitalize text-center text-[28px] lg:text-[36px] leading-[50px] font-['YouSheBiaoTiHei',sans-serif] mb-12 lg:mb-20">
            From Concept to Core Technological Breakthrough
          </h2>
          
          <div className="relative max-w-[1200px] mx-auto">
            {/* Timeline line for desktop - 20px width */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[20px] bg-[#aa49ec] transform -translate-x-1/2 rounded-[50px]" />
            
            {/* Timeline line for mobile */}
            <div className="lg:hidden absolute left-8 top-0 bottom-0 w-1 bg-[#aa49ec] rounded-full" />
            
            <div className="space-y-12 lg:space-y-[98px]">
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className={`relative flex flex-col lg:flex-row items-start lg:items-start gap-4 lg:gap-0 ${
                    index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Dot - 68px for desktop */}
                  <div className="absolute left-8 lg:left-1/2 w-4 h-4 lg:w-[68px] lg:h-[68px] bg-[#f9883c] rounded-full transform -translate-x-1/2" />
                  
                  {/* Content - 373px width for text */}
                  <div className={`pl-16 lg:pl-0 lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-[70px]' : 'lg:pl-[70px]'}`}>
                    <div className={`lg:max-w-[373px] ${index % 2 === 0 ? 'lg:ml-auto' : ''}`}>
                      <h3 className="capitalize text-[20px] leading-[36px] font-bold mb-3">
                        {milestone.title}
                      </h3>
                      <p className="capitalize text-[14px] leading-[24px] text-black">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Spacer for alignment */}
                  <div className="hidden lg:block lg:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}