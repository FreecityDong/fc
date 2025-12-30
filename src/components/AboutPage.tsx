import { Header } from './Header';
import { Footer } from './Footer';
import imgRectangle22 from "../assets/cbe91978b721828493bd5c572239fca7189bef70.png";
import imgRectangle23 from "../assets/ea91d04531ede0fc909f5d5c9539f6344d47bca7.png";
import imgRectangle24 from "../assets/bde097ec5bb92b5d978ccaf44775792a7bce338a.png";

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen flex flex-col font-['Noto_Sans_SC',sans-serif]">
      <Header />

      {/* Team Introduction - 团队介绍 */}
      <section className="w-full flex justify-center py-16 lg:py-20 bg-white">
        <div className="w-full max-w-[1200px] px-6 lg:px-0">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[40px] items-start">
            {/* Left image - 543px width, 396px height */}
            <div className="flex-shrink-0 w-full lg:w-[543px]">
              <img 
                alt="CoreOcean team working together" 
                className="w-full lg:w-[543px] h-auto lg:h-[396px] object-cover rounded-lg shadow-lg" 
                src={imgRectangle22} 
              />
            </div>
            
            {/* Right content - 614px width */}
            <div className="flex-1 lg:max-w-[614px] space-y-6">
              <h2 className="text-[36px] leading-[50px] font-bold">CoreOcean</h2>
              
              <p className="text-[16px] leading-[36px] text-[#333] font-medium">
                CoreOcean sets out towards the vast ocean of stars, starting from a single fruit core. We come from Guoxin Technology and are a cross-disciplinary middle school student team named "CoreOcean". Our journey is the vast future of the fruit and vegetable industry. Although we come from different fields, we are united by the same dream. The team of five members, each performing their own duties, is like the core gears in a precision instrument, jointly driving the innovation engine of Guoxin Technology
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Vision - 团队愿景, 494px height */}
      <section className="relative w-full h-[350px] lg:h-[494px]">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover" 
            src={imgRectangle23} 
          />
        </div>
        <div className="absolute inset-0 bg-[rgba(170,73,236,0.44)]" />
        <div className="relative h-full flex items-center justify-center px-4">
          <h2 className="text-white text-center text-[28px] lg:text-[40px] leading-[1.5] lg:leading-[60px] font-bold max-w-[1223px]">
            Help fruit farmers enjoy high-quality fruits at high prices and enable consumers to choose fruits with peace of mind
          </h2>
        </div>
      </section>

      {/* Contact Us - 联系我们 */}
      <section className="w-full flex justify-center py-16 lg:py-20 bg-white">
        <div className="w-full max-w-[1200px] px-6 lg:px-0">
          <h2 className="text-[36px] leading-[50px] font-bold mb-8 lg:mb-12">Contact us</h2>
          
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[40px] items-start">
            {/* Contact info - 685px width */}
            <div className="flex-1 lg:max-w-[685px] space-y-4 text-[16px] leading-[50px] font-medium text-black">
              <p>Email: fruitcore.tech@outlook.com</p>
              <p>Telephone: 19357170700</p>
              <p>Address: Xinhu Business Building, Xihu District, Hangzhou City, Zhejiang Province, China</p>
            </div>
            
            {/* Right image - 398px width, 242px height */}
            <div className="flex-shrink-0 w-full lg:w-[398px]">
              <img 
                alt="Welcome to the team" 
                className="w-full lg:w-[398px] h-auto lg:h-[242px] object-cover rounded-lg shadow-lg" 
                src={imgRectangle24} 
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
