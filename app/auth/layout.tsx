export default function AuthLayout({ children } : { children: React.ReactNode }) {
    return (
        <div className="w-full h-screen bg-laptop bg-center bg-cover flex items-center justify-center">
            {children}
        </div>
    )
}