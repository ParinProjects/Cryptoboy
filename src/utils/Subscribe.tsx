interface SubscribeProps {
    size: "normal" | "small";
}



function Subscribe({size} : SubscribeProps) {
    const baseClass = "bg-white  p-4 rounded-l-3xl";
    const sizeClass = { normal : "md:w-2/5 w-full", small : "md:w-1/3 w-full"
    } ;
  return (
    <>
    <input type="text" placeholder='    Enter your email' className={`${baseClass} ${sizeClass[size]}`} />
    <button type='submit' className='bg-[#5869da] text-white md:w-30 w-4/7 rounded-r-3xl hover:scale-110 transition duration-300 ease-in-out'>Subscribe</button>
    </>
  )
}

export default Subscribe