import PatientForm from "@/components/forms/PatientForm";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
      <div className="flex h-screen max-h-screen">
        <section className="remove-scrollbar container my-auto">
          <div className="sub-container max-w-[496px]">
            <Image
              src="/assets/icons/logo-full.svg"
              alt="patient-hub"
              width={1000}
              height={1000}
              className="mb-12 h-10 w-fit"
            />
            <PatientForm></PatientForm>
            <div className="text-14-regular">
              <p className="justify-items-end text-dark-600 xl:text-left">© 2024 Patient Hub</p>
              <Link href={"/?admin=true" } className="text-green-500"></Link>
            </div>
          </div>
        </section>
        <Image
              src="/assets/images/onboarding-img.png"
              alt="patient"
              width={1000}
              height={1000}
              className="side-img max-w-[50%]"
            />
      </div>
  );
}
