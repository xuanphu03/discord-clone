import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import imgHeaderDownload from '@/assets/svgs/imgHeaderDownload.svg';
import imgIOS from '@/assets/svgs/imgIOS.svg';
import imgAndroid from '@/assets/svgs/imgAndroid.svg';
import imgLinux from '@/assets/svgs/imgLinux.svg';
import imgMac from '@/assets/svgs/imgMac.svg';
import SectionInView from '@/components/SectionInView';

export default function DownloadPage() {
  return (
    <>
      <header className="px-5 flex pt-60 pb-32 dark bg-primary text-foreground">
        <div className="flex mx-auto max-w-7xl justify-between">
          <div className="w-1/2 space-y-10">
            <SectionInView animateClass="animate-fade-up" className="space-y-5">
              <h1 className="uppercase font-gintoBlack text-5xl">Get discord for any device</h1>
              <p>
                An adventure awaits. Hang out with your friends on our desktop app and keep the conversation going on
                mobile.
              </p>
            </SectionInView>
            <div className="flex items-center gap-5">
              <Button className="p-7 rounded-full space-x-2 bg-main text-xl text-foreground hover:bg-main/80">
                <Download className="w-5" />
                <span>Download for windown</span>
              </Button>

              <p className="text-sm">Windows 7 or higher</p>
            </div>
          </div>
          <SectionInView animateClass="animate-fade-up" className="w-1/2">
            <img src={imgHeaderDownload} alt="image header download" />
          </SectionInView>
        </div>
      </header>

      <div className="max-w-7xl mx-auto py-32">
        <div className="grid grid-cols-2 grid-rows-6 gap-6">
          <div className="flex flex-col justify-end gap-10 items-center row-span-3 row-start-1 bg-primary rounded-lg">
            <div className="flex flex-col items-center gap-10 pt-20 text-5xl">
              <p className="font-bold">iOS</p>
              <Button className="rounded-full dark bg-primary text-foreground text-xl hover:shadow-lg">Dowload</Button>
            </div>
            <img src={imgIOS} alt="image iphone" />
          </div>

          <div className="flex flex-col justify-end gap-10 items-center row-span-3 row-start-2 bg-primary rounded-lg ">
            <div className="flex flex-col items-center gap-10 pt-20 text-5xl">
              <p className="font-bold">Android</p>
              <Button className="rounded-full dark bg-primary text-foreground text-xl hover:shadow-lg">Dowload</Button>
            </div>
            <img src={imgAndroid} alt="image iphone" />
          </div>

          <div className="flex flex-col justify-end gap-10 items-center row-span-2 bg-primary rounded-lg">
            <div className="flex flex-col items-center gap-10 pt-20 text-5xl">
              <p className="font-bold">Linux</p>
              <Button className="rounded-full dark bg-primary text-foreground text-xl hover:shadow-lg">Dowload</Button>
            </div>
            <img src={imgLinux} alt="image iphone" />
          </div>

          <div className="flex flex-col justify-end gap-10 items-center row-span-2 bg-primary rounded-lg">
            <div className="flex flex-col items-center gap-10 pt-20 text-5xl">
              <p className="font-bold">Mac</p>
              <Button className="rounded-full dark bg-primary text-foreground text-xl hover:shadow-lg">Dowload</Button>
            </div>
            <img src={imgMac} alt="image iphone" />
          </div>

          <div className="px-10 row-span-3 bg-primary rounded-lg flex flex-col gap-10 justify-center">
            <p className="font-bold text-4xl">Feeling experimental?</p>
            <p className="text-xl">Try our Public Test Build and test new features before they launch.</p>

            <Button className="w-fit rounded-full dark bg-primary text-foreground text-xl hover:shadow-lg">
              Dowload Public Test Build
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
