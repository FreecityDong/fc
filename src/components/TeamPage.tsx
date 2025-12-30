import { Header } from './Header';
import { Footer } from './Footer';
import imgRectangle1 from "../assets/e5f6985a5447c9499110337b8e2bcac8104f68d9.png";
import imgEllipse3 from "../assets/a949b97ce4ae8c1d3e600dfedd80068276db065e.png";
import imgEllipse4 from "../assets/8a11ad4e022ff1a2b08cbf89a164e100a2d4b286.png";
import imgEllipse5 from "../assets/7dbb18bc224c30862fbf62f29bacbcb013f1bd25.png";
import imgEllipse6 from "../assets/771a048905d3c5f9bc85987445c048f34a7ed1df.png";
import imgEllipse7 from "../assets/2ce3b1b149e256cdedac64c04a10a5ae4c330fe5.png";
import imgRectangle12 from "../assets/eb49da44c09f5dcd82ef3e86625af33cd9fb28fb.png";
import imgRectangle13 from "../assets/53121c4b3dc75f462f2d9a25cd3db7e0390de51c.png";
import imgRectangle14 from "../assets/b7399daaff6b41486d4287d8d9ca799f2adc3995.png";
import imgRectangle15 from "../assets/99e598ec02ec28e0a2b9cd0a627804ad1e0222c0.png";

const teamMembers = [
  {
    name: "Lin Xuanhao",
    image: imgEllipse3,
    description: "Captain of the team. He supervises the entire process of overall product design and is committed to transforming excellent product innovation and performance into the team's core competitiveness."
  },
  {
    name: "Wei Liaoxuan",
    image: imgEllipse4,
    description: "Specializes in website development related to Guoxin Innovation. He is responsible for the full-process promotion of product website design implementation and marketing, with a core focus on providing practical support for the project through solid marketing and promotion capabilities."
  },
  {
    name: "Liu Zihang",
    image: imgEllipse5,
    description: "A technical professional committed to promoting innovation in [products/control systems]. He leads the entire process of [overall product design/technical planning] and converts outstanding [mechanical modeling/intelligent control] capabilities into core competitiveness."
  },
  {
    name: "Wang Tengyi",
    image: imgEllipse6,
    description: "A technical professional dedicated to driving product innovation. He oversees the entire process of overall product design and transforms excellent intelligent control capabilities into core competitiveness."
  },
  {
    name: "Wu Jiatong",
    image: imgEllipse7,
    description: "Belongs to the business team dedicated to advancing engineering innovation. He is responsible for driving the entire process of business plan formulation and website design, and translates excellent design and planning capabilities into core competitiveness."
  }
];

const teamPhotos = [
  { image: imgRectangle12, caption: "Daily teamwork" },
  { image: imgRectangle13, caption: "Daily teamwork" },
  { image: imgRectangle14, caption: "Daily teamwork" },
  { image: imgRectangle15, caption: "Daily teamwork" }
];

export default function TeamPage() {
  return (
    <div className="bg-white min-h-screen flex flex-col font-['Noto_Sans_SC',sans-serif]">
      <Header />

      {/* Hero Banner - 600px height */}
      <section className="relative w-full h-[400px] lg:h-[600px]">
        <img 
          alt="Team collaboration" 
          className="absolute inset-0 w-full h-full object-cover" 
          src={imgRectangle1} 
        />
        <div className="absolute inset-0 bg-[rgba(32,0,26,0.49)]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="capitalize text-white text-[48px] lg:text-[72px] leading-[50px] font-['YouSheBiaoTiHei',sans-serif]">
            CoreOcean
          </h1>
        </div>
      </section>

      {/* Team Members - 成员介绍 */}
      <section className="w-full flex justify-center py-16 lg:py-24">
        <div className="w-full max-w-[1200px] px-6 lg:px-0">
          <div className="space-y-12 lg:space-y-[100px]">
            {/* Row 1 - Single member centered - Lin Xuanhao */}
            <div className="flex justify-center">
              <div className="flex flex-col items-start max-w-[481px]">
                <div className="w-[194px] h-[194px] mb-6 rounded-full overflow-hidden">
                  <img 
                    alt={teamMembers[0].name} 
                    className="w-full h-full object-cover" 
                    src={teamMembers[0].image} 
                  />
                </div>
                <h3 className="text-[24px] leading-[50px] font-bold mb-2">{teamMembers[0].name}</h3>
                <p className="text-[16px] leading-[24px] text-[#333] font-medium">
                  {teamMembers[0].description}
                </p>
              </div>
            </div>

            {/* Row 2 - Two members - Wei Liaoxuan & Liu Zihang */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-x-[129px]">
              <div className="flex flex-col items-start">
                <div className="w-[194px] h-[194px] mb-6 rounded-full overflow-hidden">
                  <img 
                    alt={teamMembers[1].name} 
                    className="w-full h-full object-cover" 
                    src={teamMembers[1].image} 
                  />
                </div>
                <h3 className="text-[24px] leading-[50px] font-bold mb-2">{teamMembers[1].name}</h3>
                <p className="text-[16px] leading-[24px] text-[#333] max-w-[481px] font-medium">
                  {teamMembers[1].description}
                </p>
              </div>

              <div className="flex flex-col items-start">
                <div className="w-[194px] h-[194px] mb-6 rounded-full overflow-hidden">
                  <img 
                    alt={teamMembers[2].name} 
                    className="w-full h-full object-cover" 
                    src={teamMembers[2].image} 
                  />
                </div>
                <h3 className="text-[24px] leading-[50px] font-bold mb-2">{teamMembers[2].name}</h3>
                <p className="text-[16px] leading-[24px] text-[#333] max-w-[481px] font-medium">
                  {teamMembers[2].description}
                </p>
              </div>
            </div>

            {/* Row 3 - Two members - Wang Tengyi & Wu Jiatong */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-x-[129px]">
              <div className="flex flex-col items-start">
                <div className="w-[194px] h-[194px] mb-6 rounded-full overflow-hidden">
                  <img 
                    alt={teamMembers[3].name} 
                    className="w-full h-full object-cover" 
                    src={teamMembers[3].image} 
                  />
                </div>
                <h3 className="text-[24px] leading-[50px] font-bold mb-2">{teamMembers[3].name}</h3>
                <p className="text-[16px] leading-[24px] text-[#333] max-w-[481px] font-medium">
                  {teamMembers[3].description}
                </p>
              </div>

              <div className="flex flex-col items-start">
                <div className="w-[194px] h-[194px] mb-6 rounded-full overflow-hidden">
                  <img 
                    alt={teamMembers[4].name} 
                    className="w-full h-full object-cover" 
                    src={teamMembers[4].image} 
                  />
                </div>
                <h3 className="text-[24px] leading-[50px] font-bold mb-2">{teamMembers[4].name}</h3>
                <p className="text-[16px] leading-[24px] text-[#333] max-w-[481px] font-medium">
                  {teamMembers[4].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Photos - 日常照片展示 */}
      <section className="w-full flex justify-center py-16 lg:py-24">
        <div className="w-full max-w-[1200px] px-6 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-0 lg:gap-x-[25px] gap-y-12 lg:gap-y-[80px]">
            {teamPhotos.map((photo, index) => (
              <div key={index} className="space-y-4">
                <img 
                  alt={photo.caption} 
                  className="w-full lg:w-[587px] h-auto lg:h-[402px] object-cover rounded-lg" 
                  src={photo.image} 
                />
                <p className="text-center text-[20px] leading-[50px] font-bold">{photo.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}