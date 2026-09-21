import React from "react";
import { createRoot } from "react-dom/client";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { Download, FileText, Printer } from "lucide-react";
import { WelcomeCardDocument } from "./App";
import { Badge } from "@eca/shadcn-ui/components/ui/badge";
import { buttonVariants } from "@eca/shadcn-ui/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@eca/shadcn-ui/components/ui/card";
import { Separator } from "@eca/shadcn-ui/components/ui/separator";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@eca/shadcn-ui/components/ui/tooltip";
import "./styles.css";

function DownloadPdfButton() {
    return (
        <PDFDownloadLink
            document={<WelcomeCardDocument />}
            fileName="lesson-01-python-homework.pdf"
            className={buttonVariants({ size: "lg" })}>
            {({ loading }) => (
                <>
                    <Download data-icon="inline-start" />
                    {loading ? "Preparing PDF" : "Download PDF"}
                </>
            )}
        </PDFDownloadLink>
    );
}

function PreviewShell() {
    return (
        <TooltipProvider>
            <main className="app-shell">
                <header className="app-header">
                    <div className="header-content">
                        <div className="lesson-typography prose prose-sm max-w-none">
                            <p className="eyebrow">Coding Club / Lesson 01</p>
                            <h1>Python Homework Worksheet</h1>
                            <p className="header-description">
                                Complete, test, and submit your Lesson 01 Python work.
                            </p>
                        </div>
                        <div className="header-actions">
                            <Badge variant="secondary">
                                A4 assignment sheet
                            </Badge>
                            <DownloadPdfButton />
                        </div>
                    </div>
                </header>

                <section className="viewer-wrap" aria-label="PDF preview">
                    <div className="preview-meta">
                        <div className="meta-label">
                            <FileText aria-hidden="true" />
                            <span>Document preview</span>
                        </div>
                        <Tooltip>
                            <TooltipTrigger render={<span />}>
                                <Badge variant="outline">Ready to print</Badge>
                            </TooltipTrigger>
                            <TooltipContent>
                                Download the PDF to print or submit it.
                            </TooltipContent>
                        </Tooltip>
                    </div>

                    <Card className="viewer-card">
                        <CardHeader className="viewer-card-header">
                            <CardTitle className="viewer-title">
                                Python Homework Worksheet
                            </CardTitle>
                            <Tooltip>
                                <TooltipTrigger render={<span />}>
                                    <Printer
                                        className="viewer-icon"
                                        aria-label="PDF print preview"
                                    />
                                </TooltipTrigger>
                                <TooltipContent>
                                    The document is formatted for A4 paper.
                                </TooltipContent>
                            </Tooltip>
                        </CardHeader>
                        <Separator />
                        <CardContent className="viewer-card-content">
                            <PDFViewer
                                className="pdf-viewer"
                                showToolbar={false}
                                title="Lesson 01 Python homework PDF preview">
                                <WelcomeCardDocument />
                            </PDFViewer>
                        </CardContent>
                    </Card>
                </section>
            </main>
        </TooltipProvider>
    );
}

createRoot(document.getElementById("root")).render(<PreviewShell />);
