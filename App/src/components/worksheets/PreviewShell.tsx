import { useEffect, useState, type ComponentType } from "react";

export function PreviewShell({ document }: { document: ComponentType }) {
    const Document = document;

    const [PDFViewer, setPDFViewer] = useState<typeof import("@react-pdf/renderer").PDFViewer | null>(null);

    useEffect(() => {
        import("@react-pdf/renderer").then(({ PDFViewer }) => {
            setPDFViewer(() => PDFViewer);
        });
    }, []);

    if (!PDFViewer) return null;

    return (
        <section className="h-screen overflow-hidden">
            <PDFViewer className="h-full w-full">
                <Document />
            </PDFViewer>
        </section>
    );
}
