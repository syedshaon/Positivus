import Image from "next/image";

const Companys = () => {
  return (
    <div className="container flex flex-wrap gap-4 justify-between items-center my-10">
      <Image src="/Company-logo-0.png" width={125} height={48} alt="Company we server" />
      <Image src="/Company-logo-1.png" width={125} height={48} alt="Company we server 2" />
      <Image src="/Company-logo-2.png" width={125} height={48} alt="Company we server 3" />
      <Image src="/Company-logo-3.png" width={125} height={48} alt="Company we server 4" />
      <Image src="/Company-logo-4.png" width={125} height={48} alt="Company we server 5" />
      <Image src="/Company-logo-5.png" width={125} height={48} alt="Company we server 6" />
    </div>
  );
};

export default Companys;
