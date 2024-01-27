import bgNitro from '@/assets/videos/bgNitro.webm'

export default function Nitro() {
  return (
    <div>
      <div className="relative">
        <video width="100%" height="100%" autoPlay loop muted>
          <source src={bgNitro} type="video/webm" />
        </video>
        <div className="absolute z-50 top-1/2 right-1/2 translate-x-[50%] translate-y-[50%] max-w-7xl ">
          <h1>Unleash more fun with Nitro</h1>
          <p>Subscribe to Nitro to upgrade your emoji, personalize your profile, share bigger files, and so much more</p>
          jbbb
        </div>
      </div>
    </div>
  );
}
 