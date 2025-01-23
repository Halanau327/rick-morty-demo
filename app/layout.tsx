import React from "react";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Locations',
    description: 'New NextJs'
}

export default function DashboardLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>

        <main>{children}</main>
        </body>
        </html>
    )
}