import { TooltipProvider } from "./ui/tooltip";

export default function Providers({ children, ...props }: { children: React.ReactNode }) {
    return (
        <TooltipProvider {...props}>
            { children }
        </TooltipProvider>
    )
}