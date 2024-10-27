// import { SidebarProvider } from "@/components/ui/sidebar";

export default function DashboardLayout({ children } : { children : React.ReactNode }) {
    return (
        <div className="w-full min-h-screen">
            { children }
        </div>
    )
}