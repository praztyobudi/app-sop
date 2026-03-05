import "../globals.css";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="id">
            <body>
                <div className="min-h-screen bg-gray-100">
                    {children}
                </div>
            </body>
        </html>
    );
}