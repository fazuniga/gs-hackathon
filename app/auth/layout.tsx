export default function AuthLayout({ children } : { children: React.ReactNode }) {
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="md:w-1/2 bg-gray-50 bg-customer sm:bg-none">
                {children}
            </div>
            <div className="md:w-1/2 h-screen">
                <div className="w-full h-screen bg-customer bg-center">
                </div>
            </div>
        </div>
    )
}