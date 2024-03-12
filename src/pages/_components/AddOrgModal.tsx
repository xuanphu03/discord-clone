import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { ChevronRight, Plus } from 'lucide-react';
import { useEffect, useState } from 'react';
import createMyOwn from '@/assets/svgs/iconCreateYourServer.svg';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import { UploadButton } from '@/components/ui/upload-button';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { uploadFile } from '@/apis/upload';
// import { getMe } from '@/apis/users';
import { addOrg } from '@/apis/orgs';
import { useQuery, useQueryClient } from 'react-query';

enum Step {
  CREATE_YOUR_SERVER = 'CREATE_YOUR_SERVER',
  TELL_US_MORE = 'TELL_US_MORE',
  CUSTOMIZE_YOUR_SERVER = 'CUSTOMIZE_YOUR_SERVER',
}

const tabClass =
  'p-4 mt-0 bg-primary-foreground/10 data-[state=inactive]:p-0  data-[state=inactive]:translate-x-[50%] data-[state=active]:translate-x-0 transition-transform ease-linear';

export default function AddOrgModal() {
  const [serverName, setServerName] = useState('');
  const [step, setStep] = useState(Step.CREATE_YOUR_SERVER);
  const [open, setOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);
  const queryClient = useQueryClient();

  const onOpen = () => {
    setStep(Step.CREATE_YOUR_SERVER);
    setOpen(true);
  };

  const onUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const formData = new FormData();
    formData.append('file', file);
    const { data } = await uploadFile(formData);
    setImageUrl(data.url);
  };

  // const { data: me } = useQuery({
  //   queryKey: ['me'],
  //   queryFn: () => getMe(),
  // });

  // useEffect(() => {
  //   if (me?.username) setServerName(`${me.username}'s server`);
  // }, [me?.username]);

  const createOrg = async () => {
    try {
      await addOrg({
        name: serverName,
        icon: imageUrl,
      });
      setOpen(false);
      queryClient.invalidateQueries({
        queryKey: ['orgs'],
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild onClick={onOpen}>
        <div className="cursor-pointer rounded-full w-14 h-14 bg-primary-foreground/10 text-green-500 flex items-center justify-center hover:text-white hover:bg-green-500 hover:rounded-md">
          <Plus />
        </div>
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-[425px] bg-primary-foreground/10 p-0"
        // haveClose={false}
      >
        <Tabs
          className="w-full overflow-hidden bg-primary-foreground/10 rounded-md"
          value={step}
        >
          <TabsContent
            value={Step.CREATE_YOUR_SERVER}
            className={tabClass}
            hidden={false}
          >
            <h1 className="text-xl font-bold text-center">
              Create Your Server
            </h1>
            <p className="mt-2 text-gray-400">
              Your sever is where you and your friends hang out
            </p>
            <div>
              <div
                onClick={() => setStep(Step.TELL_US_MORE)}
                className="flex gap-2 mt-4 justify-between border p-4 items-center border-white rounded-sm hover:bg-primary-foreground/20 cursor-pointer"
              >
                <div className="flex gap-2 items-center">
                  <img src={createMyOwn} />
                  <span>Create My Own </span>
                </div>
                <ChevronRight />
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value={Step.TELL_US_MORE}
            className={tabClass}
            hidden={false}
          >
            <h1 className="text-xl font-bold text-center">
              Tell Us More About Your Server
            </h1>
            <p className="mt-2 text-gray-400">
              In order to help you with your setup, is your new server for just
              a few friends or a larger community?
            </p>
            <div
              onClick={() => setStep(Step.CUSTOMIZE_YOUR_SERVER)}
              hidden={false}
            >
              <div className="flex gap-2 mt-4 justify-between border p-4 items-center border-white rounded-sm hover:bg-primary-foreground/20 cursor-pointer">
                <div className="flex gap-2 items-center">
                  <img src={createMyOwn} />
                  <span>For me and my friends </span>
                </div>
                <ChevronRight />
              </div>
            </div>
            <button
              className="mt-4"
              onClick={() => setStep(Step.CREATE_YOUR_SERVER)}
            >
              Back
            </button>
          </TabsContent>
          <TabsContent value={Step.CUSTOMIZE_YOUR_SERVER} className={tabClass}>
            <h1 className="text-xl font-bold text-center">
              Customize Your Server
            </h1>
            <p className="mt-2 text-gray-400 text-center">
              Give your new server a personality with a name and an icon. You
              can always change it later.
            </p>
            <div className="flex justify-center my-4">
              <UploadButton onChange={onUpload} imageUrl={imageUrl} />
            </div>
            <p className="mb-2"> SERVER NAME </p>
            <Input
              value={serverName}
              onChange={(e) => setServerName(e.target.value)}
            />
            <p className="mt-4">By creating a server, you agree to Discrod</p>
            <div className="flex justify-between mt-4">
              <button
                className="mt-4"
                onClick={() => setStep(Step.CREATE_YOUR_SERVER)}
              >
                Back
              </button>
              <Button disabled={!serverName} onClick={createOrg}>
                Create
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
