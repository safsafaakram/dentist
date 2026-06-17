import svgPaths from "./svg-61oxhy913u";
import imgDrKarimYelles from "./a165835bfeb9784c2b610def7a5801a89d6bbdb2.png";
import imgDiv from "./d294773d63b1f9824ca739cbaafe1ca2bbafd457.png";
import imgDiv1 from "./2898627533355a86b957d1a1596f5f836915228c.png";
import imgImageHeroDeco from "./a9a03805db38fa6ae1a336eb9b49484e00c57f89.png";

function Div() {
  return <div className="absolute border-r-2 border-solid border-t-2 border-white left-[137.65px] size-[6px] top-[24.35px]" data-name="Div" />;
}

function Link() {
  return (
    <div className="absolute bg-[#ee6318] h-[57.19px] left-0 rounded-[9999px] top-[315.38px] w-[171.91px]" data-name="Link">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Zen_Maru_Gothic:Medium',sans-serif] justify-center leading-[0] left-[18.5px] not-italic text-[15.938px] text-white top-[27.31px] tracking-[0.4781px] whitespace-nowrap">
        <p className="leading-[28.688px]">contact from here</p>
      </div>
      <Div />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#161d16] text-[24px] text-center tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[31.2px]">DR. KARIM YELLES</p>
      </div>
    </div>
  );
}

function OverlayOverlayBlur() {
  return (
    <div className="backdrop-blur-[2px] bg-[rgba(89,99,38,0.1)] content-stretch flex items-start justify-center px-[16px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Overlay+OverlayBlur">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#596326] text-[12px] text-center tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">{` SPECIALIST`}</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[8px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3d4a3d] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[26px] mb-0 whitespace-pre">{`Expertise in blablablabla blablablabla `}</p>
        <p className="leading-[26px] mb-0 whitespace-pre">{`blablablabla blablablabla blablablabla blablablabla `}</p>
        <p className="leading-[26px] whitespace-pre">{`blablablabla blablablabla `}</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-center left-[-94.5px] p-[32px] top-[62.18px] w-[389px]" data-name="Container">
      <Heading2 />
      <OverlayOverlayBlur />
      <Container1 />
    </div>
  );
}

function DivText() {
  return (
    <div className="absolute h-[372.57px] left-[540px] top-[67.22px] w-[540px]" data-name="Div [text]">
      <Link />
      <Container />
    </div>
  );
}

function DrKarimYelles() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Dr. Karim Yelles">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[121.56%] left-0 max-w-none top-[-10.78%] w-full" src={imgDrKarimYelles} />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex h-[320px] items-end justify-center left-[27px] overflow-clip right-[70px] rounded-bl-[136.15px] rounded-br-[218.35px] rounded-tl-[212.7px] rounded-tr-[77.8px] top-[147px]" data-name="Container">
      <DrKarimYelles />
    </div>
  );
}

function Image() {
  return (
    <div className="absolute h-[507px] left-[26.5px] overflow-clip rounded-[30px] top-[-29.6px] w-[486px]" data-name="Image">
      <Container2 />
    </div>
  );
}

function DivImg() {
  return (
    <div className="absolute h-[507px] left-0 overflow-clip top-0 w-[540px]" data-name="Div [img]">
      <Image />
    </div>
  );
}

function DivLpsPartsChild() {
  return (
    <div className="h-[507px] relative shrink-0 w-[1080px]" data-name="Div [lps_parts--child]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <DivText />
        <DivImg />
      </div>
    </div>
  );
}

function DivInner() {
  return (
    <div className="absolute h-[602.6px] left-[172.5px] top-[501px] w-[1080px]" data-name="Div [inner]">
      <div className="content-stretch flex flex-col items-start pb-[924px] relative size-full">
        <DivLpsPartsChild />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#161d16] text-[40px] text-center tracking-[-0.8px] uppercase whitespace-nowrap">
        <p className="leading-[48px]">CLINICAL SERVICES</p>
      </div>
      <div className="-translate-x-1/2 absolute bg-gradient-to-r bottom-[-15.5px] from-[rgba(66,214,116,0)] h-[4px] left-1/2 rounded-[9999px] to-[rgba(66,214,116,0)] via-1/2 via-[#42d674] w-[96px]" data-name="Gradient" />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(66,214,116,0.2)] blur-[20px] h-[128px] left-1/2 rounded-[9999px] top-1/2 w-[256px]" data-name="Overlay+Blur" />
      <Heading1 />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[25.333px] relative shrink-0 w-[18.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.6667 25.3333">
        <g id="Container">
          <path d={svgPaths.p2c141980} fill="var(--fill-0, #006D32)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(255,255,255,0.4)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[64px]" data-name="Overlay">
      <Container5 />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col h-[88px] items-start pb-[24px] relative shrink-0 w-[64px]" data-name="Margin">
      <Overlay />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#161d16] text-[24px] w-full">
        <p className="leading-[31.2px] mb-0">Eye</p>
        <p className="leading-[31.2px]">Examinations</p>
      </div>
    </div>
  );
}

function Heading3Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="Heading 3:margin">
      <Heading3 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3d4a3d] text-[16px] w-full">
        <p className="leading-[24px] mb-0">Comprehensive</p>
        <p className="leading-[24px] mb-0">diagnostic evaluations</p>
        <p className="leading-[24px] mb-0">utilizing state-of-the-art</p>
        <p className="leading-[24px] mb-0">imaging technology to</p>
        <p className="leading-[24px] mb-0">detect ocular pathologies</p>
        <p className="leading-[24px]">early.</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[32px] relative shrink-0 w-full" data-name="Margin">
      <Container6 />
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[9px] relative shrink-0 w-[12px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 9">
        <g id="Container">
          <path d={svgPaths.p21a182c0} fill="var(--fill-0, #006D32)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#006d32] text-[14px] tracking-[0.7px] uppercase whitespace-nowrap">
        <p className="leading-[14px]">LEARN MORE</p>
      </div>
      <Container7 />
    </div>
  );
}

function ServiceCard() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-start shrink-0" data-name="Service Card 1">
      <div className="content-stretch flex flex-col items-start p-[32px] relative size-full">
        <div className="absolute backdrop-blur-[12px] inset-[0_0_-0.38px_0] opacity-70 rounded-bl-[253.55px] rounded-br-[308.7px] rounded-tl-[140.03px] rounded-tr-[294.91px]" style={{ backgroundImage: "linear-gradient(123.201deg, rgba(221, 234, 157, 0.3) 0%, rgb(247, 223, 218) 100%)" }} data-name="Gradient+OverlayBlur" />
        <Margin />
        <Heading3Margin />
        <Margin1 />
        <Link1 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[20px] relative shrink-0 w-[29.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.3333 20">
        <g id="Container">
          <path d={svgPaths.p20c821b0} fill="var(--fill-0, #006D32)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(255,255,255,0.4)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[64px]" data-name="Overlay">
      <Container8 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col h-[88px] items-start pb-[24px] relative shrink-0 w-[64px]" data-name="Margin">
      <Overlay1 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#161d16] text-[24px] w-full">
        <p className="leading-[31.2px]">Cataract Surgery</p>
      </div>
    </div>
  );
}

function Heading3Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="Heading 3:margin">
      <Heading4 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[31.69px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3d4a3d] text-[16px] w-full">
        <p className="leading-[24px] mb-0">Advanced micro-</p>
        <p className="leading-[24px] mb-0">incisional</p>
        <p className="leading-[24px] mb-0">phacoemulsification with</p>
        <p className="leading-[24px] mb-0">premium intraocular lens</p>
        <p className="leading-[24px] mb-0">implantation for rapid</p>
        <p className="leading-[24px]">visual recovery.</p>
      </div>
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[32px] relative shrink-0 w-full" data-name="Margin">
      <Container9 />
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[9px] relative shrink-0 w-[12px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 9">
        <g id="Container">
          <path d={svgPaths.p21a182c0} fill="var(--fill-0, #006D32)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#006d32] text-[14px] tracking-[0.7px] uppercase whitespace-nowrap">
        <p className="leading-[14px]">LEARN MORE</p>
      </div>
      <Container10 />
    </div>
  );
}

function ServiceCard1() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-start shrink-0" data-name="Service Card 2">
      <div className="content-stretch flex flex-col items-start p-[32px] relative size-full">
        <div className="absolute backdrop-blur-[12px] bg-[#f7dfda] inset-[0_0_-0.69px_0] opacity-70 rounded-bl-[96.51px] rounded-br-[253.55px] rounded-tl-[210.04px] rounded-tr-[55.15px]" data-name="Gradient+OverlayBlur" />
        <Margin2 />
        <Heading3Margin1 />
        <Margin3 />
        <Link2 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[26.667px] relative shrink-0 w-[28px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 26.6667">
        <g id="Container">
          <path d={svgPaths.p28ac2680} fill="var(--fill-0, #006D32)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay2() {
  return (
    <div className="bg-[rgba(255,255,255,0.4)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[64px]" data-name="Overlay">
      <Container11 />
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col h-[88px] items-start pb-[24px] relative shrink-0 w-[64px]" data-name="Margin">
      <Overlay2 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#161d16] text-[24px] w-full">
        <p className="leading-[31.2px] mb-0">Laser Vision</p>
        <p className="leading-[31.2px]">Correction</p>
      </div>
    </div>
  );
}

function Heading3Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="Heading 3:margin">
      <Heading5 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3d4a3d] text-[16px] w-full">
        <p className="leading-[24px] mb-0">Precision refractive</p>
        <p className="leading-[24px] mb-0">procedures to eliminate</p>
        <p className="leading-[24px] mb-0">dependency on corrective</p>
        <p className="leading-[24px] mb-0">eyewear, tailored to</p>
        <p className="leading-[24px] mb-0">individual corneal</p>
        <p className="leading-[24px]">topography.</p>
      </div>
    </div>
  );
}

function Margin5() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[32px] relative shrink-0 w-full" data-name="Margin">
      <Container12 />
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[9px] relative shrink-0 w-[12px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 9">
        <g id="Container">
          <path d={svgPaths.p21a182c0} fill="var(--fill-0, #006D32)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#006d32] text-[14px] tracking-[0.7px] uppercase whitespace-nowrap">
        <p className="leading-[14px]">LEARN MORE</p>
      </div>
      <Container13 />
    </div>
  );
}

function ServiceCard2() {
  return (
    <div className="col-3 justify-self-stretch relative row-1 self-start shrink-0" data-name="Service Card 3">
      <div className="content-stretch flex flex-col items-start p-[32px] relative size-full">
        <div className="absolute backdrop-blur-[12px] inset-[0_0_-0.38px_0] opacity-70 rounded-bl-[253.55px] rounded-br-[308.7px] rounded-tl-[140.03px] rounded-tr-[294.91px]" style={{ backgroundImage: "linear-gradient(56.7994deg, rgb(252, 240, 236) 0%, rgba(139, 251, 138, 0) 100%)" }} data-name="Gradient+OverlayBlur" />
        <Margin4 />
        <Heading3Margin2 />
        <Margin5 />
        <Link3 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Container">
          <path d={svgPaths.p282fd600} fill="var(--fill-0, #006D32)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay3() {
  return (
    <div className="bg-[rgba(255,255,255,0.4)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[64px]" data-name="Overlay">
      <Container14 />
    </div>
  );
}

function Margin6() {
  return (
    <div className="content-stretch flex flex-col h-[88px] items-start pb-[24px] relative shrink-0 w-[64px]" data-name="Margin">
      <Overlay3 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#161d16] text-[24px] w-full">
        <p className="leading-[31.2px]">Pediatric Care</p>
      </div>
    </div>
  );
}

function Heading3Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="Heading 3:margin">
      <Heading6 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[55.69px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3d4a3d] text-[16px] w-full">
        <p className="leading-[24px] mb-0">Specialized strabismus</p>
        <p className="leading-[24px] mb-0">management, amblyopia</p>
        <p className="leading-[24px] mb-0">treatment, and vision</p>
        <p className="leading-[24px] mb-0">therapy for our youngest</p>
        <p className="leading-[24px]">patients.</p>
      </div>
    </div>
  );
}

function Margin7() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[32px] relative shrink-0 w-full" data-name="Margin">
      <Container15 />
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[9px] relative shrink-0 w-[12px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 9">
        <g id="Container">
          <path d={svgPaths.p21a182c0} fill="var(--fill-0, #006D32)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#006d32] text-[14px] tracking-[0.7px] uppercase whitespace-nowrap">
        <p className="leading-[14px]">LEARN MORE</p>
      </div>
      <Container16 />
    </div>
  );
}

function ServiceCard3() {
  return (
    <div className="col-4 justify-self-stretch relative row-1 self-start shrink-0" data-name="Service Card 4">
      <div className="content-stretch flex flex-col items-start p-[32px] relative size-full">
        <div className="absolute backdrop-blur-[12px] inset-[0_0_-0.69px_0] opacity-70 rounded-bl-[96.51px] rounded-br-[253.55px] rounded-tl-[210.04px] rounded-tr-[55.15px]" style={{ backgroundImage: "linear-gradient(-56.8616deg, rgba(221, 234, 157, 0.3) 0%, rgba(221, 234, 157, 0) 100%)" }} data-name="Gradient+OverlayBlur" />
        <Margin6 />
        <Heading3Margin3 />
        <Margin7 />
        <Link4 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="gap-x-[48px] gap-y-[48px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[_424.38px] relative shrink-0 w-full" data-name="Container">
      <ServiceCard />
      <ServiceCard1 />
      <ServiceCard2 />
      <ServiceCard3 />
    </div>
  );
}

function ServicesSection() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[64px] items-start left-[90px] max-w-[1280px] top-0 w-[1247px]" data-name="Services Section">
      <Container3 />
      <Container4 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[24px] text-black tracking-[-0.6px] uppercase w-full">
        <p className="leading-[31.2px]">EL-BASAR CLINIC</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[320px] relative shrink-0 w-[320px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:Light',sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[16px] text-black whitespace-nowrap">
        <p className="leading-[26px] mb-0">The bold standard in Algerian</p>
        <p className="leading-[26px] mb-0">ophthalmic care. Precision, clarity, and</p>
        <p className="leading-[26px]">uncompromising quality.</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[16px] items-start justify-self-stretch pb-[22.81px] relative row-1 self-start shrink-0" data-name="Container">
      <Container19 />
      <Container20 />
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-black tracking-[0.7px] uppercase whitespace-nowrap">
        <p className="leading-[20px]">SERVICES</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-black tracking-[0.7px] uppercase whitespace-nowrap">
        <p className="leading-[20px]">OUR TEAM</p>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-black tracking-[0.7px] uppercase whitespace-nowrap">
        <p className="leading-[20px]">CLINIC HOURS</p>
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-black tracking-[0.7px] uppercase whitespace-nowrap">
        <p className="leading-[20px]">PATIENT PORTAL</p>
      </div>
    </div>
  );
}

function Link9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-black tracking-[0.7px] uppercase whitespace-nowrap">
        <p className="leading-[20px]">PRIVACY POLICY</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[134.09px]" data-name="Container">
      <Link5 />
      <Link6 />
      <Link7 />
      <Link8 />
      <Link9 />
    </div>
  );
}

function Container21() {
  return (
    <div className="col-2 content-stretch flex flex-col items-center justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Container22 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[12px] text-[rgba(5,5,5,0.6)] text-right tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px] mb-0">© 2024 EL-BASAR OPHTHALMOLOGY ALGERIA.</p>
        <p className="leading-[16px]">ALL SIGHT RESERVED.</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="col-3 content-stretch flex flex-col items-end justify-end justify-self-stretch pt-[116px] relative row-1 self-start shrink-0" data-name="Container">
      <Container24 />
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[_148px] left-[129px] max-w-[1280px] top-[88px] w-[1167px]" data-name="Container">
      <Container18 />
      <Container21 />
      <Container23 />
    </div>
  );
}

function FooterFooter() {
  return (
    <div className="absolute bg-[#5a4c49] h-[323px] left-[3px] rounded-tl-[30px] rounded-tr-[30px] top-[1905px] w-[1425px]" data-name="Footer [footer]">
      <Container17 />
    </div>
  );
}

function Div1() {
  return (
    <div className="absolute h-[162px] left-0 top-[676px] w-[1425px]" data-name="Div">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[83.8%] left-[111.57%] max-w-none top-[-423.12%] w-[101.05%]" src={imgDiv} />
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#161d16] text-[40px] tracking-[-0.8px] uppercase whitespace-nowrap">
        <p className="leading-[48px]">INITIATE CONTACT</p>
      </div>
      <div className="absolute bg-gradient-to-r bottom-[-7.5px] from-[#006d32] h-[4px] left-0 rounded-[9999px] to-[rgba(0,109,50,0)] w-[64px]" data-name="Gradient" />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3d4a3d] text-[18px] w-full">
        <p className="leading-[29.25px] mb-0">Schedule your comprehensive evaluation or reach</p>
        <p className="leading-[29.25px]">out for urgent clinical inquiries.</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col gap-[23.125px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading7 />
      <Container27 />
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p303da380} fill="var(--fill-0, #006D32)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function OverlayOverlayBlur1() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.3)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[48px]" data-name="Overlay+OverlayBlur">
      <Container30 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#006d32] text-[14px] tracking-[1.4px] uppercase whitespace-nowrap">
        <p className="leading-[20px]">HEADQUARTERS</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3d4a3d] text-[16px] whitespace-nowrap">
        <p className="leading-[26px] mb-0">{`45 Avenue de l'Indépendance`}</p>
        <p className="leading-[26px]">Algiers, Algeria 16000</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[237.73px]" data-name="Container">
      <Heading8 />
      <Container32 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <OverlayOverlayBlur1 />
      <Container31 />
    </div>
  );
}

function Container34() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p3ed9b280} fill="var(--fill-0, #006D32)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function OverlayOverlayBlur2() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.3)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[48px]" data-name="Overlay+OverlayBlur">
      <Container34 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#006d32] text-[14px] tracking-[1.4px] uppercase whitespace-nowrap">
        <p className="leading-[20px]">DIRECT LINE</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:Light',sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[#3d4a3d] text-[20px] tracking-[0.5px] whitespace-nowrap">
        <p className="leading-[28px]">+213 21 00 00 00</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[166.48px]" data-name="Container">
      <Heading9 />
      <Container36 />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <OverlayOverlayBlur2 />
      <Container35 />
    </div>
  );
}

function Container38() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p39ac9700} fill="var(--fill-0, #006D32)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function OverlayOverlayBlur3() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.3)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[48px]" data-name="Overlay+OverlayBlur">
      <Container38 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#006d32] text-[14px] tracking-[1.4px] uppercase whitespace-nowrap">
        <p className="leading-[20px]">OPERATING HOURS</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3d4a3d] text-[16px] whitespace-nowrap">
        <p className="leading-[26px] mb-0">Sun - Thu: 08:00 - 17:00</p>
        <p className="leading-[26px] text-[rgba(61,74,61,0.7)]">Fri - Sat: Emergency Only</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[202.38px]" data-name="Container">
      <Heading10 />
      <Container40 />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <OverlayOverlayBlur3 />
      <Container39 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container29 />
      <Container33 />
      <Container37 />
    </div>
  );
}

function Container25() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[48px] items-start p-[32px] relative size-full">
        <Container26 />
        <Container28 />
      </div>
    </div>
  );
}

function ContactInfo() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[101px_831px_200.88px_58px] items-start" data-name="Contact Info">
      <Container25 />
    </div>
  );
}

function SectionHomeArea() {
  return (
    <div className="absolute bg-[#f7dfda] h-[669px] left-[3px] overflow-clip top-[1104px] w-[1425px]" data-name="Section [home_area]">
      <Div1 />
      <ContactInfo />
    </div>
  );
}

function Div2() {
  return (
    <div className="h-[193px] relative w-[1425px]" data-name="Div">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDiv1} />
    </div>
  );
}

function DivWrapper() {
  return (
    <div className="absolute h-[2404px] left-0 top-[930px] w-[1425px]" data-name="Div [wrapper]">
      <DivInner />
      <ServicesSection />
      <FooterFooter />
      <SectionHomeArea />
      <div className="absolute flex h-[193px] items-center justify-center left-[3px] top-[1693px] w-[1425px]">
        <div className="-scale-y-100 flex-none">
          <Div2 />
        </div>
      </div>
    </div>
  );
}

function DivSlickList() {
  return <div className="absolute h-[994.54px] left-0 overflow-clip top-0 w-[1425px]" data-name="Div [slick-list]" />;
}

function DivHeroSlide() {
  return (
    <div className="absolute h-[994.54px] left-0 overflow-clip top-0 w-[1425px]" data-name="Div [hero_slide]">
      <DivSlickList />
    </div>
  );
}

function OverlayShadowOverlayBlur() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.3)] content-stretch flex flex-col items-start px-[20px] py-[8px] relative rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Overlay+Shadow+OverlayBlur">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0b0b0b] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">{`ALGERIA'S PREMIER EYE CENTER`}</p>
      </div>
    </div>
  );
}

function Margin8() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[48px] pb-[8px] top-[8px]" data-name="Margin">
      <OverlayShadowOverlayBlur />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[48px] pr-[68.47px] top-[112px]" data-name="Heading 1">
      <div className="[word-break:break-word] bg-clip-text bg-gradient-to-r flex flex-col font-['Montserrat:ExtraBold',sans-serif] font-extrabold from-[#006d32] h-[119px] justify-center leading-[0] relative shrink-0 text-[96px] text-[transparent] to-[#161d16] tracking-[-2.56px] uppercase w-[919px] whitespace-pre-wrap">
        <p className="leading-[70.4px] mb-0">{`your eyes is our `}</p>
        <p className="leading-[70.4px] mb-0">​</p>
        <p className="leading-[70.4px]">priorety</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[48px] max-w-[672px] pr-[41.58px] top-[301px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3d4a3d] text-[18px] whitespace-nowrap">
        <p className="leading-[29.25px] mb-0">Expert ophthalmological care, precision diagnostics, and advanced</p>
        <p className="leading-[29.25px] mb-0">surgical interventions in a modern clinical environment. See the world</p>
        <p className="leading-[29.25px]">with unprecedented clarity.</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white tracking-[0.7px] uppercase whitespace-nowrap">
        <p className="leading-[14px]">BOOK CONSULTATION</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path d={svgPaths.p1a406200} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#0b0b0b] content-stretch flex gap-[12px] items-center px-[32px] py-[16px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_-0.02px_0_0] rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Button:shadow" />
      <Container44 />
      <Container45 />
    </div>
  );
}

function ButtonMargin() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[48px] pt-[24px] top-[388.53px]" data-name="Button:margin">
      <Button />
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute h-[516.53px] left-[-102px] right-[581px] top-[172px]" data-name="Container">
      <Margin8 />
      <Heading />
      <Container43 />
      <ButtonMargin />
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute h-[741px] left-[89px] top-[321px] w-[1247px]" data-name="Container">
      <Container42 />
    </div>
  );
}

function ImageHeroDeco() {
  return (
    <div className="absolute h-[1318.12px] left-[-15px] overflow-clip top-[-34px] w-[1425px]" data-name="Image [hero_deco]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-[-0.03%] max-w-none size-full top-[-21.43%]" src={imgImageHeroDeco} />
      </div>
      <Container41 />
    </div>
  );
}

function DivHeroSlides() {
  return (
    <div className="absolute h-[994.54px] left-[-19px] top-[-43px] w-[1425px]" data-name="Div [hero_slides]">
      <DivHeroSlide />
      <ImageHeroDeco />
    </div>
  );
}

function DivHero() {
  return (
    <div className="absolute h-[930px] left-[23px] top-[15px] w-[1425px]" data-name="Div [hero]">
      <DivHeroSlides />
    </div>
  );
}

function MainStandard() {
  return (
    <div className="absolute h-[3158px] left-0 top-0 w-[1425px]" data-name="Main [standard]">
      <DivWrapper />
      <DivHero />
    </div>
  );
}

function Link10() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[34px] top-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Space_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#605850] text-[20px] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">[ HERO ]</p>
      </div>
    </div>
  );
}

function Link11() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[189px] top-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Space_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#605850] text-[20px] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">[ SERVICE ]</p>
      </div>
    </div>
  );
}

function Link12() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[384px] top-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Space_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#605850] text-[20px] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">[ WORKS ]</p>
      </div>
    </div>
  );
}

function Link13() {
  return <div className="absolute h-[16px] left-[34px] top-[64px] w-[93px]" data-name="Link" />;
}

function Nav() {
  return (
    <div className="h-[59px] relative shrink-0 w-[508px]" data-name="Nav">
      <div aria-hidden className="absolute border-[rgba(216,208,200,0.3)] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Link10 />
        <Link11 />
        <Link12 />
        <Link13 />
      </div>
    </div>
  );
}

function Div3() {
  return <div className="absolute border-r-2 border-solid border-t-2 border-white left-[137.65px] size-[6px] top-[19.1px]" data-name="Div" />;
}

function Button1() {
  return (
    <div className="-translate-y-1/2 absolute backdrop-blur-[2px] bg-[#fcc8ac] content-stretch flex flex-col h-[48px] items-center justify-center left-[-0.1px] px-[24px] py-[12px] rounded-[9999px] top-[calc(50%-0.25px)] w-[172px]" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0.27px_0_0] rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Button:shadow" />
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white tracking-[0.7px] uppercase whitespace-nowrap">
        <p className="leading-[14px]">BOOK NOW</p>
      </div>
    </div>
  );
}

function Link14() {
  return (
    <div className="absolute bg-[#ee6318] h-[46.69px] left-[176.75px] rounded-[26.25px] top-[11.91px] w-[171.91px]" data-name="Link">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Zen_Maru_Gothic:Medium',sans-serif] justify-center leading-[0] left-[30px] not-italic text-[15.938px] text-white top-[22.66px] tracking-[0.4781px] whitespace-nowrap">
        <p className="leading-[28.688px]">お問い合わせ</p>
      </div>
      <Div3 />
      <Button1 />
    </div>
  );
}

function ListGnavCta() {
  return (
    <div className="h-[58px] relative shrink-0 w-[376px]" data-name="List [gnav--cta]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Link14 />
      </div>
    </div>
  );
}

function NavGnav() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[24px] h-[70.5px] items-start left-[363.53px] pb-[12px] pl-[48px] pr-[14.875px] rounded-bl-[75px] rounded-tl-[75px] top-[18px] w-[941.48px]" data-name="Nav [gnav]">
      <Nav />
      <ListGnavCta />
    </div>
  );
}

function Image1() {
  return <div className="absolute h-[45.75px] left-[48px] top-[33.38px] w-[180px]" data-name="Image" />;
}

function Container47() {
  return (
    <div className="h-[20px] relative shrink-0 w-[29.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.3333 20">
        <g id="Container">
          <path d={svgPaths.p20c821b0} fill="var(--fill-0, #FBC5A6)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#161d16] text-[24px] tracking-[-0.6px] whitespace-nowrap">
        <p className="leading-[31.2px]">EL-BASAR CLINIC</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex gap-[12px] items-center left-[14px] top-[calc(50%-0.25px)]" data-name="Container">
      <Container47 />
      <Container48 />
    </div>
  );
}

function H1HeaderLogo() {
  return (
    <div className="absolute bg-white h-[112.5px] left-0 rounded-bl-[24px] rounded-br-[24px] top-0 w-[276px]" data-name="H1 [header--logo]">
      <Image1 />
      <Container46 />
    </div>
  );
}

function DivInner1() {
  return (
    <div className="absolute h-[112.5px] left-0 top-0 w-[1425px]" data-name="Div [inner]">
      <NavGnav />
      <H1HeaderLogo />
    </div>
  );
}

export default function BodyTop() {
  return (
    <div className="bg-white relative size-full" data-name="Body [top]">
      <MainStandard />
      <DivInner1 />
    </div>
  );
}