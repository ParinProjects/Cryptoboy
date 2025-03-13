import banner from '../assets/banners/featured.png'
import Subscribe from '../utils/Subscribe'

function Hero() {
    return (
        <>
            <main className="bg-gray-100 f">
                <section className='flex flex-row justify-between container mx-auto md:py-20 py-15'>
                    {/* left */}
                    <div className='md:w-1/2 w-full p-5 md:p-0 flex flex-col'>
                        <h1 className='md:text-6xl text-4xl font-bold md:leading-22 leading-14'>Hello, I’m <span className='text-[#5869da]'>Folk</span>
                            <br /><span className='md:text-5xl text-3xl'>Welcome to my blog</span></h1>
                        <p className='md:text-xl text-md mt-5 md:w-2/3 w-full'>Don't miss out on the latest Tech trends, Gadget reviews, and Software updates.
                            Stay updated with AI, Cybersecurity, and coding tips!</p>

                        <div className='flex flex-row mt-10'>
                            <Subscribe size='normal'></Subscribe>
                        </div>
                    </div>
                    {/* right */}
                    <div className='relative w-1/2  justify-end hidden md:flex '>
                        <img src={banner} alt="" className='w-140' />
                        <div >
                            <div className="chat chat-end absolute -top-[10%] right-[50%]">
                                <div className="chat-bubble chat-bubble-success text-white">You have been given a great honor.</div>
                            </div>
                            <div className="chat chat-end absolute top-[10%] right-[40%]">
                                <div className="chat-bubble chat-bubble-warning text-white">To be on the Council at your age.</div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Hero