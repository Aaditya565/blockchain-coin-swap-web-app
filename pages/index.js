import Head from 'next/head'
import Card from '../components/Card'
import Button from '../util/Button'
import { IoChevronForwardOutline } from "react-icons/io5";
import { useRouter } from 'next/router';
import cryptoIcon from '../asset/cryptoIcon.png'
import Image from 'next/image';

export default function Home() {
  const router = useRouter();
  return (
    <div className='flex grow h-full px-10 py-6'>
      <Head>
        <title>Blockchain App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Card >
          <div className='flex flex-col items-center gap-y-10 px-6'>
            
            <h1 className='text-3xl font-semibold'>
              Convert to any Crypto Currency
            </h1>
            <Image src={cryptoIcon} alt="crpto icon" />
            <div className="w-full flex flex-col items-stretch">
              <Button onClick={() => router.push('/swap')} >
                <div className="w-full flex justify-center items-center gap-x-2">
                  <p className='text-xl'>Convert Now</p>
                  <IoChevronForwardOutline className='text-xl' />
                </div>
              </Button>
            </div>

          </div>
        </Card>
      </main>

    </div>
  )
}
