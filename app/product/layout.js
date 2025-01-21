import PageTitle from "@/components/PageTitle";
import Link from "next/link";

export default function ProductLayout({ children }) {
    return (
        <div className="flex flex-col md:flex-row gap-8">
            <div className="grow">
                {children}
            </div>
        </div>
    );
}