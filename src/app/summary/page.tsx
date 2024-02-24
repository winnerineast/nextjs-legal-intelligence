import Summary from "@/components/Summary";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Next.js Calender | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Calender page for TailAdmin  Tailwind CSS Admin Dashboard Template",
};

const SummaryPage = () => {
  return (
    <DefaultLayout>
      <Summary />
    </DefaultLayout>
  );
};

export default SummaryPage;
