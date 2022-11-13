import Header from '../components/Header'
import '../styles/globals.css'

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <html>
            <head>
                <title>
                    Nikola Petrov Portfolio
                </title>
                <meta content="width=device-width, initial-scale=1" name="viewport" />
            </head>
            <body>
                {children}
            </body>
        </html>
    )
}