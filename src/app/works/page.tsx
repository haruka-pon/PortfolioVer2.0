import { ProjectsList } from "@/components/sections/works-list";
import { SITE_CONFIG } from "@/lib/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Works",
    description: `Projects by ${SITE_CONFIG.name}`,
};

export default function WorksPage() {
    return (
        <div className="container mx-auto px-4 md:px-6 py-12">
            <div className="flex flex-col items-center gap-4 text-center mb-12">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl font-sans text-primary">Works</h1>
                <p className="text-muted-foreground max-w-2xl text-lg">
                    これまでに制作したプロジェクト一覧です。
                </p>
            </div>
            <ProjectsList />
        </div>
    );
}
