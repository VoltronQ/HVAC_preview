import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'

interface LearnMoreModalProps {
    isOpen: boolean
    onClose: () => void
}

export function LearnMoreModal({ isOpen, onClose }: LearnMoreModalProps) {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-navy text-2xl font-bold">
                        Why Schedule a Diagnostic Visit?
                    </DialogTitle>
                </DialogHeader>

                <div className="space-y-6 py-4">
                    <p className="text-gray-600">
                        A small investment today can save you thousands tomorrow. Here's why proactive diagnostics are essential:
                    </p>

                    <ul className="space-y-4">
                        {[
                            "Prevent expensive system failure",
                            "Identify inefficiency increasing energy bills",
                            "Catch refrigerant and airflow problems early",
                            "Understand repair options before committing",
                            "Protect equipment lifespan"
                        ].map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700 font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="bg-light-blue/20 p-4 rounded-xl border border-light-blue">
                        <p className="text-sm text-navy italic">
                            "Most major HVAC failures could have been prevented with a simple 30-minute diagnostic check."
                        </p>
                    </div>
                </div>

                <Button onClick={onClose} className="w-full">
                    Got it, Close
                </Button>
            </DialogContent>
        </Dialog>
    )
}
