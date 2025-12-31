import { useEffect, useRef } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import svgPaths from "../imports/svg-8kzcearfgm";
import imgRectangle1 from "../assets/20f1bb92eeef32687871c8f156287f8cd57e2a31.png";
import imgRectangle2 from "../assets/dc36b488af0bbc3d83535a7b1a7f0042adc42aff.png";
import imgRectangle4 from "../assets/688497870abe213fac4bf8b1a6c4a164cc33ef40.png";
import imgRectangle5 from "../assets/8fa2b479706536ea6c57ec739959f1dff60b9ed4.png";
import imgRectangle6 from "../assets/92962c49035aea0cdba44b25ed7ad5615597780e.png";
import imgRectangle7 from "../assets/8385c9d51e5bfd9a48ddf9d2d2eb3b49d62bd54a.png";
import imgRectangle8 from "../assets/3aea8d765ba6502bf855bf1541033fb5f39ca21e.png";
import productVideo from "../assets/video.mp4";

export default function HomePage() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!videoEl) return;
        if (entry.isIntersecting) {
          videoEl.play().catch(() => {
            // Ignore autoplay rejection if browser blocks without user gesture
          });
        } else {
          videoEl.pause();
          videoEl.currentTime = 0;
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(videoEl);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white min-h-screen flex flex-col font-['Noto_Sans_SC',sans-serif]">
      <Header />

      {/* Hero Banner - 700px height */}
      <section className="relative w-full h-[500px] lg:h-[700px]">
        <img 
          alt="Fruit scanning technology" 
          className="absolute inset-0 w-full h-full object-cover" 
          src={imgRectangle1} 
        />
        <div className="absolute inset-0 bg-[rgba(32,0,26,0.49)]" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <h1 className="capitalize text-white text-center text-[64px] lg:text-[110px] leading-[1.18] font-['YouSheBiaoTiHei',sans-serif] max-w-6xl">
            <p className="mb-0">Scan the Fruit</p>
            <p>Get the Truth</p>
          </h1>
        </div>
      </section>

      {/* Product Introduction - 产品介绍 */}
      <section className="w-full flex justify-center py-16 lg:py-24">
        <div className="w-full max-w-[1200px] px-6 lg:px-0">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Left image - 300px width, 429px height */}
            <div className="flex-shrink-0 w-full lg:w-[300px]">
              <img 
                alt="Fruit Core Detector device" 
                className="w-full h-auto lg:h-[429px] object-cover rounded-lg" 
                src={imgRectangle2} 
              />
            </div>
            
            {/* Right content - 872px width */}
            <div className="flex-1 lg:max-w-[872px] space-y-6 lg:mt-[60px]">
              <h2 className="capitalize text-[20px] leading-[30px] font-black">
                <p className="mb-0">Project Introduction:</p>
                <p>Fruit Core Detector — Intelligent Technology for Visualizing the Inner Quality of Fruits</p>
              </h2>
              
              <div className="space-y-0 text-[14px] leading-[22px] text-[#333]">
                <p className="mb-0">In fruit purchasing, traditional methods such as tapping to listen for sounds and visual inspection are no longer sufficient to address market challenges. Not only are they unable to accurately determine the internal ripeness and moisture content of fruits like pomelos, coconuts, and watermelons, but they also fail to identify the hidden quality defects in increasingly common off-season and chemically ripened products.</p>
                
                <p className="mb-0">To address this core issue, we have developed the "Fruit Core Detector." This innovative device integrates high-precision odor sensing, acoustic resonance analysis, and 3D visual imaging technologies. Through multi-modal data fusion and machine learning algorithms, it achieves non-destructive, quantitative detection of internal moisture content, distribution uniformity, true ripeness, and potential defects in fruits.</p>
                
                <p className="mb-0">The value of this product extends throughout the entire industry chain:</p>
                
                <p className="mb-0">
                  <span className="font-bold">Empowering Fruit Farmers:</span> Provides scientific harvesting guidance, optimizes picking timing, and enhances the natural quality of fruits from the source.
                </p>
                
                <p className="mb-0">
                  <span className="font-bold">Enabling Distributors:</span> Facilitates standardized grading and pricing based on precise data such as moisture and sugar content, creating a transparent supply chain where quality matches value.
                </p>
                
                <p className="mb-0">
                  <span className="font-bold">Protecting Consumers:</span> Allows for intuitive identification of chemically ripened and inferior fruits, helping consumers easily select healthy, naturally ripe fruits with full moisture content.
                </p>
                
                <p>The Fruit Core Detector uses technology to penetrate the surface, making inner quality clear at a glance. It is driving the fruit industry from relying on educated guesses to making decisions based on data in a new era.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Video - 1200px width, 675px height */}
      <section className="w-full flex justify-center py-12 lg:py-20">
        <div className="w-full max-w-[1200px] px-6 lg:px-0">
          <video
            ref={videoRef}
            className="w-full h-[400px] lg:h-[675px] rounded-lg object-cover bg-black"
            playsInline
            controls={false}
            preload="metadata"
            src={productVideo}
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Innovation Highlights - 产品亮点 */}
      <section className="relative w-full py-16 lg:py-24 bg-[#aa49ec]">
        <div className="relative w-full max-w-[1200px] mx-auto px-6 lg:px-0">
          <h2 className="capitalize text-white text-center text-[36px] lg:text-[48px] leading-[50px] font-['YouSheBiaoTiHei',sans-serif] mb-12 lg:mb-20">
            Innovation highlights
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {/* Highlight 1 */}
            <div className="flex flex-col items-center text-center text-white">
              <div className="w-[130px] h-[130px] mb-6">
                <svg className="w-full h-full" fill="none" viewBox="0 0 130 130">
                  <circle cx="65" cy="65.0001" r="63.5" stroke="white" strokeWidth="3" />
                  <g>
                    <path d={svgPaths.p3109d100} fill="white" stroke="white" strokeWidth="1.5" />
                    <path d={svgPaths.p3dc07f00} fill="white" stroke="white" strokeWidth="1.5" />
                    <path d={svgPaths.p232ec680} fill="white" stroke="white" strokeWidth="1.5" />
                    <path d={svgPaths.p2fa3a180} fill="white" stroke="white" strokeWidth="1.5" />
                  </g>
                </svg>
              </div>
              <h3 className="capitalize text-[20px] leading-[50px] font-bold mb-2">Penetrative Detection</h3>
              <p className="capitalize text-[16px] leading-[21px] max-w-[330px]">
                Integrates acoustic, gas, and visual data to achieve non-destructive quantitative analysis of internal moisture and ripeness in fruits for the first time.
              </p>
            </div>

            {/* Highlight 2 */}
            <div className="flex flex-col items-center text-center text-white">
              <div className="w-[130px] h-[130px] mb-6">
                <svg className="w-full h-full" fill="none" viewBox="0 0 130 130">
                  <circle cx="65" cy="65" r="63.5" stroke="white" strokeWidth="3" />
                  <g transform="translate(42, 40)">
                    {/* Background mask shapes */}
                    <defs>
                      <mask height="51" id="mask0_2_125_home" maskUnits="userSpaceOnUse">
                        <path d={svgPaths.p24c37b70} fill="white" stroke="white" />
                      </mask>
                      <mask height="51" id="mask0_2_132_home" maskUnits="userSpaceOnUse">
                        <path d={svgPaths.p24c37b70} fill="white" stroke="white" />
                      </mask>
                    </defs>
                    
                    {/* Masked elements */}
                    <g mask="url(#mask0_2_125_home)">
                      <path d={svgPaths.p2c4b7000} fill="white" stroke="white" />
                    </g>
                    <g mask="url(#mask0_2_132_home)">
                      <path d={svgPaths.p3de20f00} fill="white" stroke="white" />
                    </g>
                    
                    {/* Additional icon elements with proper positioning */}
                    <g transform="translate(9.34, 14.2)">
                      <svg width="28.087" height="25.497" viewBox="0 0 28.0871 25.4972" fill="none" preserveAspectRatio="none">
                        <path d={svgPaths.p2f290180} fill="white" stroke="white" />
                      </svg>
                    </g>
                    <g transform="translate(29.79, 14.2)">
                      <svg width="7.147" height="7.205" viewBox="0 0 7.14739 7.20522" fill="none" preserveAspectRatio="none">
                        <path d={svgPaths.p25fc0800} fill="white" stroke="white" />
                      </svg>
                    </g>
                    <g transform="translate(23.96, 20.34)">
                      <svg width="13.792" height="8.104" viewBox="0 0 13.7923 8.10445" fill="none" preserveAspectRatio="none">
                        <path d={svgPaths.p3c177280} fill="white" stroke="white" />
                      </svg>
                    </g>
                    <g transform="translate(29.35, 20.48)">
                      <svg width="3.015" height="12.185" viewBox="0 0 3.01478 12.1851" fill="none" preserveAspectRatio="none">
                        <path d={svgPaths.pff17280} fill="white" stroke="white" />
                      </svg>
                    </g>
                  </g>
                </svg>
              </div>
              <h3 className="capitalize text-[20px] leading-[50px] font-bold mb-2">Chain-wide Empowerment</h3>
              <p className="capitalize text-[16px] leading-[21px] max-w-[330px]">
                Provides precise harvesting guidance for farmers and enables data-driven grading and pricing for distributors.
              </p>
            </div>

            {/* Highlight 3 */}
            <div className="flex flex-col items-center text-center text-white">
              <div className="w-[130px] h-[130px] mb-6">
                <svg className="w-full h-full" fill="none" viewBox="0 0 130 130">
                  <circle cx="65" cy="65" r="63.5" stroke="white" strokeWidth="3" />
                  <g>
                    <path d={svgPaths.pb550280} fill="white" stroke="white" strokeWidth="1.5" />
                    <path d={svgPaths.p3b87080} fill="white" stroke="white" strokeWidth="1.5" />
                    <path d={svgPaths.p1292ac00} fill="white" stroke="white" strokeWidth="1.5" />
                  </g>
                </svg>
              </div>
              <h3 className="capitalize text-[20px] leading-[50px] font-bold mb-2">Health & Authenticity Verification</h3>
              <p className="capitalize text-[16px] leading-[21px] max-w-[330px]">
                Establishes a "data fingerprint" to effectively distinguish naturally ripened fruits from chemically ripened ones, safeguarding consumer health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Impact - 产品社会影响 */}
      <section className="w-full flex justify-center py-16 lg:py-24">
        <div className="w-full max-w-[1200px] px-6 lg:px-0">
          <h2 className="capitalize text-center text-[36px] lg:text-[48px] leading-[50px] font-['YouSheBiaoTiHei',sans-serif] mb-12 lg:mb-16">
            Social Impact
          </h2>
          
          {/* Grid layout - 2x2 with specific spacing */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-0 lg:gap-x-[58px] gap-y-12 lg:gap-y-[94px]">
            {/* Impact 1 - 569px width, 332px height */}
            <div className="space-y-4">
              <img 
                alt="Safeguarding Public Health" 
                className="w-full lg:w-[569px] h-auto lg:h-[332px] object-cover rounded-lg" 
                src={imgRectangle5} 
              />
              <h3 className="capitalize text-[20px] leading-[20px] font-bold tracking-[0.2px]">Safeguarding Public Health</h3>
              <p className="capitalize text-[14px] leading-[20px] text-[#898989] tracking-[0.14px] font-medium">
                Helps consumers easily avoid chemically ripened and moisture-deficient inferior fruits, promotes better nutritional intake, and reduces potential health risks.
              </p>
            </div>

            {/* Impact 2 - 569px width, 332px height */}
            <div className="space-y-4">
              <img 
                alt="Promoting Eco-Friendly Agriculture" 
                className="w-full lg:w-[569px] h-auto lg:h-[332px] object-cover rounded-lg" 
                src={imgRectangle8} 
              />
              <h3 className="capitalize text-[20px] leading-[20px] font-bold tracking-[0.2px]">Promoting Eco-Friendly Agriculture</h3>
              <p className="capitalize text-[14px] leading-[20px] text-[#898989] tracking-[0.14px] font-medium">
                Uses market data to encourage reduced reliance on growth regulators in cultivation, fosters natural ripening practices, and advances sustainable agricultural development.
              </p>
            </div>

            {/* Impact 3 - 569px width, 332px height */}
            <div className="space-y-4">
              <img 
                alt="Rebuilding Industry Integrity" 
                className="w-full lg:w-[569px] h-auto lg:h-[332px] object-cover rounded-lg" 
                src={imgRectangle6} 
              />
              <h3 className="capitalize text-[20px] leading-[20px] font-bold tracking-[0.2px]">Rebuilding Industry Integrity</h3>
              <p className="capitalize text-[14px] leading-[20px] text-[#898989] tracking-[0.14px] font-medium">
                Establishes a transparent, traceable quality grading system based on objective data, reduces opportunities for fraudulent practices, and restores consumer trust.
              </p>
            </div>

            {/* Impact 4 - 569px width, 332px height */}
            <div className="space-y-4">
              <img 
                alt="Advocating Scientific Consumption" 
                className="w-full lg:w-[569px] h-auto lg:h-[332px] object-cover rounded-lg" 
                src={imgRectangle7} 
              />
              <h3 className="capitalize text-[20px] leading-[20px] font-bold tracking-[0.2px]">Advocating Scientific Consumption</h3>
              <p className="capitalize text-[14px] leading-[20px] text-[#898989] tracking-[0.14px] font-medium">
                Promotes a quality-centric consumption mindset and drives a societal shift from prioritizing appearance to valuing intrinsic quality, fostering a healthier consumer culture.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
