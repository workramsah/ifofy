export default function Nav(){
    return(
      <>
     <div className="flex justify-between items-center md:px-[200]">
        <img src="navimg.png" className="w-[131px] h-[29px]"></img>
        <div className="flex space-x-6 text-[16px]">
          <h1>Features</h1>
          <h1>pricing</h1>
          <h1>Resource</h1>
          <h1>Get Support</h1>
        </div>
        <div className="space-x-4">
          <button>Log in</button>
          <button className="w-26 h-8 bg-[rgba(248,101,23,1)] text-white rounded-full">Start free</button>
        </div>
      </div>
      </>
    )
  }