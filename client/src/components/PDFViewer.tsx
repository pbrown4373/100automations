import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Maximize2, FileText, ExternalLink } from "lucide-react";

interface PDFViewerProps {
  pdfUrl: string;
  title: string;
}

export default function PDFViewer({ pdfUrl, title }: PDFViewerProps) {
  const [isPopoutOpen, setIsPopoutOpen] = useState(false);
  const [hasAccess, setHasAccess] = useState(true);

  const openPopout = () => {
    setIsPopoutOpen(true);
  };

  const closePopout = () => {
    setIsPopoutOpen(false);
  };

  // Removed CleverMoneyBuilder form logic - now showing PDF directly

  return (
    <>
      <div className="w-full">
        <div className="bg-muted p-4 rounded-lg border-2 border-dashed border-border">
          {/* PDF Viewer Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <FileText className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground font-medium">{title}</span>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={openPopout}
              className="flex items-center space-x-2"
            >
              <Maximize2 className="w-4 h-4" />
              <span>Pop out</span>
            </Button>
          </div>

          {/* Direct PDF Viewer - No Form Required */}
          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              src={pdfUrl}
              width="100%"
              height="400"
              className="border-0"
              title={`${title} PDF viewer`}
            />
            <div className="absolute bottom-4 right-4">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => window.open(pdfUrl, '_blank')}
                className="flex items-center space-x-1 text-xs"
                data-testid="button-pdf-new-tab"
              >
                <ExternalLink className="w-3 h-3" />
                <span>Open in new tab</span>
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-center mt-4 text-muted-foreground">
            <FileText className="w-4 h-4 mr-2" />
            <span className="text-sm">
              PDF Implementation Guide
            </span>
          </div>
        </div>
      </div>

      {/* Popout Modal */}
      {isPopoutOpen && (
        <Dialog open={isPopoutOpen} onOpenChange={setIsPopoutOpen}>
          <DialogContent className="max-w-7xl max-h-[95vh] p-6">
            <DialogHeader>
              <DialogTitle className="text-lg font-semibold text-foreground">{title}</DialogTitle>
              <DialogDescription className="text-muted-foreground">
                Full-size view of the PDF training guide
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4">
              <div className="flex items-center justify-end">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open(pdfUrl, '_blank')}
                  className="flex items-center space-x-2"
                  data-testid="button-pdf-new-tab-popout"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Open in new tab</span>
                </Button>
              </div>
              
              {/* Full-size PDF Viewer */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <iframe
                  src={pdfUrl}
                  width="100%"
                  height="700"
                  className="border-0"
                  title={`${title} PDF viewer - enlarged`}
                />
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}