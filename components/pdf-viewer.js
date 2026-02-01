import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// Manually configure the worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PdfViewer = ({ file, width, onLoadSuccess, loading, error }) => {
    return (
        <Document
            file={file}
            onLoadSuccess={onLoadSuccess}
            loading={loading}
            error={error}
        >
            <Page
                pageNumber={1}
                renderAnnotationLayer={false}
                renderTextLayer={false}
                width={width}
            />
        </Document>
    );
};

export default PdfViewer;
