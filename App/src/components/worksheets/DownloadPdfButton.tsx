import { useEffect, useState } from "react";
import type { ComponentType } from "react";
import { DownloadIcon, LoaderCircleIcon } from "lucide-react";
import { buttonVariants } from "../shadcn/button";

export function DownloadPdfButton({ document }: { document: ComponentType }) {
    const Document = document;
    const [PDFDownloadLink, setPDFDownloadLink] = useState<typeof import("@react-pdf/renderer").PDFDownloadLink | null>(null);

    useEffect(() => {
        import("@react-pdf/renderer").then(({ PDFDownloadLink }) => {
            setPDFDownloadLink(() => PDFDownloadLink);
        });
    }, []);

    if (!PDFDownloadLink) return null;

    return (
        <PDFDownloadLink
            document={<Document />}
            fileName="lesson-01-python-homework.pdf"
            className={buttonVariants({ size: "icon-lg" })}>
            {({ loading }) => (loading ? <LoaderCircleIcon className="animate-spin" /> : <DownloadIcon />)}
        </PDFDownloadLink>
    );
}
