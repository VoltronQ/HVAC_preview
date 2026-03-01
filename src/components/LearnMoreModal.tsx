import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { CheckCircle2, ShieldCheck, Zap, Thermometer, Clock } from 'lucide-react'

interface LearnMoreModalProps {
    isOpen: boolean
    onClose: () => void
}

const points = [
    {
        title: "Prevent expensive system failure",
        desc: "Small leaks and worn parts cause massive repair bills if ignored.",
        icon: ShieldCheck,
        color: "text-red-500",
        bgColor: "bg-red-50/50"
    },
    {
        title: "Identify energy bill inefficiencies",
        desc: "A system working too hard is costing you hundreds every month.",
        icon: Zap,
        color: "text-yellow-600",
        bgColor: "bg-yellow-50/50"
    },
    {
        title: "Catch refrigerant & airflow issues",
        desc: "Early detection prevents damage to the compressor and blower motor.",
        icon: Thermometer,
        color: "text-blue-500",
        bgColor: "bg-blue-50/50"
    },
    {
        title: "No-pressure repair options",
        desc: "Understand your system health before major decisions occur.",
        icon: CheckCircle2,
        color: "text-teal-600",
        bgColor: "bg-teal-50/50"
    }
]

export function LearnMoreModal({ isOpen, onClose }: LearnMoreModalProps) {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-xl glass-premium rounded-[3rem] p-0 border-white/20 shadow-premium overflow-hidden">
                <div className="bg-[#050A1A] text-white p-10 relative">
                    {/* Animated Glow */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF5C00]/10 rounded-full blur-3xl"></div>

                    <DialogHeader>
                        <DialogTitle className="text-4xl sm:text-5xl font-outfit font-black leading-tight tracking-tightest">
                            Why <span className="text-accent-orange">Diagnostic</span> Proactivity?
                        </DialogTitle>
                    </DialogHeader>
                    <div className="mt-4 flex items-center gap-2 opacity-60">
                        <Clock className="h-4 w-4" />
                        <span className="text-xs font-black uppercase tracking-widest uppercase">Expert Insight Report Included</span>
                    </div>
                </div>

                <div className="p-10 space-y-8 bg-white/95 backdrop-blur-sm">
                    <p className="text-xl text-slate-600/80 font-medium font-inter leading-relaxed">
                        A small investment today can save you thousands tomorrow. Proactive HVAC health is the ultimate insurance for your home comfort.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {points.map((point, index) => (
                            <div
                                key={index}
                                className={`p-6 rounded-[2rem] border border-slate-100 ${point.bgColor} group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4`}
                                style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'both' }}
                            >
                                <div className={`h-12 w-12 rounded-xl bg-white flex items-center justify-center mb-4 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform duration-500`}>
                                    <point.icon className={`h-6 w-6 ${point.color}`} />
                                </div>
                                <h4 className="text-lg font-outfit font-bold text-navy mb-2 leading-tight">{point.title}</h4>
                                <p className="text-sm text-slate-500 font-medium leading-relaxed font-inter">{point.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="pt-4">
                        <Button
                            onClick={onClose}
                            size="lg"
                            className="w-full bg-[#FF5C00] hover:bg-[#FF5C00]/90 text-white font-outfit font-bold text-xl px-8 h-16 rounded-2xl shadow-xl shadow-[#FF5C00]/20 flex items-center justify-center gap-3 transition-all"
                        >
                            Got it, Close
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
