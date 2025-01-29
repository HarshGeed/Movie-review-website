import Link from "next/link";
import Image from "next/image";

const PricingContent = () => {
  return (
    <div className="flex relative mr-1 -mx-8 w-[61rem] h-auto bg-white p-6 shadow-xl ">
      {/* Side section with images */}
      <div className="relative border-2 border-red-500 w-[20rem] h-50 bg-gray-800 mr-4">
      <div className="p-8 m-auto">
        <p>&quot;The length of a film should be directly related to the endurance of the human bladder.&quot;</p>
        <p></p>
      </div>
      </div>

      {/* Main section with important links */}
      <div>
        <div className="mb-3 space-y-3">
          <h3 className="font-semibold">For Individuals</h3>
          <Link href="#" className="block text-sm hover:underline">
            Introduction
          </Link>
          <Link href="#" className="block text-sm hover:underline">
            Pay as you go
          </Link>
        </div>
        <div className="mb-6 space-y-3">
          <h3 className="font-semibold">For Companies</h3>
          <Link href="#" className="block text-sm hover:underline">
            Startups
          </Link>
          <Link href="#" className="block text-sm hover:underline">
            SMBs
          </Link>
          <Link href="#" className="block text-sm hover:underline">
            Enterprise
          </Link>
        </div>
        <button className="w-full rounded-lg border-2 border-neutral-950 px-4 py-2 font-semibold transition-colors hover:bg-neutral-950 hover:text-white">
          Contact sales
        </button>
      </div>
    </div>
  );
};

export { PricingContent };
