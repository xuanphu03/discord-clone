import { Button } from '@/components/ui/button';
import bgBanner from '@/assets/images/bgBanner.png';
import imgGroupChat from '@/assets/svgs/imgGroupChat.svg';
import imgVoiceChat from '@/assets/svgs/imgVoiceChat.svg';
import imgVoiceRoom from '@/assets/svgs/imgVoiceRoom.svg';
import imgFandom from '@/assets/svgs/imgFandom.svg';
import stars from '@/assets/svgs/stars.svg';
import { Download } from 'lucide-react';
import SectionInView from '@/components/SectionInView';


export default function Main() {
  return (
    <>
      <header className="bg-main w-full pt-5 overflow-hidden relative">
        <div className="flex justify-center">
          <img className="max-w-none" src={bgBanner} alt="Background Banner" />
        </div>
        <div className="absolute z-10 top-1/4 left-1/2 translate-x-[-50%] text-background text-center space-y-10">
          <h1 className="text-6xl font-gintoBlack uppercase">Imagine a place...</h1>
          <p>
            ...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a
            handful of friends can spend time together. A place that makes it easy to talk every day and hang out more
            often.
          </p>
          <div className="flex justify-center gap-10">
            <Button className="p-7 rounded-full space-x-2 font-medium text-xl text-foreground hover:shadow-lg">
              <Download className="w-5" />
              <span>Download for windown</span>
            </Button>
            <Button className="p-7 rounded-full font-medium text-xl text-background bg-foreground hover:bg-foreground/80 hover:shadow-lg">
              Open Discord in your browser
            </Button>
          </div>
        </div>
      </header>

      <SectionInView animateClass="animate-fade-up" className="py-32">
        <div className="px-10 max-w-7xl mx-auto flex items-center gap-28">
          <img src={imgGroupChat} alt="Demo group chat" />
          <div>
            <h2 className="text-5xl font-bold leading-snug">Create an invite-only place where you belong</h2>
            <p className="mt-6">
              Discord servers are origanized into topic-based channels where you can collaborate, share, and just talk
              about your day without clogging up a group chat.
            </p>
          </div>
        </div>
      </SectionInView>

      <SectionInView animateClass="animate-fade-up" className="py-32 bg-primary">
        <div className="px-10 max-w-7xl mx-auto flex items-center gap-28">
          <div>
            <h2 className="text-5xl font-bold leading-snug">Where hanging out is easy</h2>
            <p className="mt-6">
              Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and
              instantly pop in to talk without having to call.
            </p>
          </div>
          <img src={imgVoiceChat} alt="Demo group chat" />
        </div>
      </SectionInView>

      <SectionInView animateClass="animate-fade-up" className="py-32">
        <div className="px-10 max-w-7xl mx-auto flex items-center gap-28">
          <img src={imgFandom} alt="Demo group chat" />
          <div>
            <h2 className="text-5xl font-bold leading-snug">From few to a fandom</h2>
            <p className="mt-6">
              Get any community running with moderation tools and custom member access. Give members special powers, set
              up private channels, and more.
            </p>
          </div>
        </div>
      </SectionInView>

      <SectionInView animateClass="animate-fade-up" className="py-32 bg-primary flex flex-col items-center">
        <div className="px-10 max-w-7xl mx-auto text-center">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-gintoBlack uppercase">Reliable tech for staying close</h2>
            <p className="mt-6">
              Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends
              stream their games, or gather up and have a drawing session with screen share.
            </p>
          </div>
          <img src={imgVoiceRoom} alt="Demo group chat" />
        </div>

        <div className="text-center mt-32">
          <div className="relative px-10">
            <img className="absolute -top-10 left-0" src={stars} alt="stars" />
            <p className="text-3xl font-bold">Ready to start your journey?</p>
          </div>

          <Button className="mt-10 p-7 rounded-full space-x-2 bg-main font-medium text-xl text-background hover:bg-main/80 hover:shadow-lg">
            <Download className="w-5" />
            <span>Download for windown</span>
          </Button>
        </div>
      </SectionInView>
    </>
  );
}
