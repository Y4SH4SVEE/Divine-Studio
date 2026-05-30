import type { Metadata } from "next";
import CertificationStandards from "@/components/CertificationStandards";
import ComplianceCta from "@/components/ComplianceCta";
import QualityFramework from "@/components/QualityFramework";
import QualityStages from "@/components/QualityStages";

export const metadata: Metadata = {
  title: "Certifications | Divine India Exports",
  description:
    "Independent verification of quality, sustainability, and safety practices at Divine India Exports.",
};

export default function CertificationsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[linear-gradient(180deg,#f4ead6_0%,#f7efdf_100%)] pt-[120px]">
        <div className="page-shell py-18 sm:py-22">
          <div className="max-w-[560px]">
            <p className="eyebrow">Standards</p>
            <h1 className="section-heading mt-4 text-[3.35rem] sm:text-[4rem]">
              Certifications
            </h1>
            <p className="mt-3 max-w-[470px] text-[12px] leading-8 text-[#717b6a]">
              Independent verification of our quality, sustainability, and safety practices.
            </p>
          </div>
        </div>
      </section>

      <CertificationStandards />
      <QualityStages />
      <QualityFramework />
      <ComplianceCta />
    </div>
  );
}
