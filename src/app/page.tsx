
import Nav from "./component/Nav";
import Trust from "./component/Trust";
import Create from "./component/Create";
import What from "./component/What";
import Pricing from "./component/Pricing";
import Faq from "./component/Faq";
import Make from "./component/Make";
import Footer from "./component/Footer";
import Made from "./component/Made";
import Send from "./component/Send";
import Record from "./component/Record";
import Group from "./component/Group";



export default function Page() {
  return (
    <>
    <div className="space-y-12">

      <div className="mt-[29px]"><Nav /></div>

      <div className="md:mt-[104px] mt-[50px]"><Trust /></div>
      <div className="mt-[50px]"><Group /></div>
      
      <div className="mt-[29px]"><Create /></div>
      <div className="mt-[29px]"><Record /></div>
      <div className="mt-[29px] space-y-6"><Send /></div>
      <div className="mt-[29px]"><Made /></div>
      <div className="mt-[100px]"><What /></div>
      <div><Pricing /></div>
      <div><Make /></div>
      <div className="mt-[29px]"><Faq /></div>
      <div><Footer /></div>
    </div>
    </>
  )
}