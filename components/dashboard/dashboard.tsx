// 'use client'

// import { useState } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun, Inbox, FileText, Settings, Search, RotateCcw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
// import {
//     Sidebar,
//     SidebarContent,
//     SidebarHeader,
//     SidebarMenuItem,
//     SidebarMenu,
//     SidebarTrigger,
// } from '@/components/ui/sidebar'
import { Badge } from '@/components/ui/badge'
import { translations } from '@/lib/platform/config'
import DashboardHeader from './header'
import TicketManagement from './ticket-management'

// Define an interface for the translations
export interface Translations {
    dashboard: string;
    inbox: string;
    templates: string;
    settings: string;
    needsSupervision: string;
    autoAnswered: string;
    closedTickets: string;
    search: string;
    reloadTickets: string;
    info: string;
    origin: string;
    messages: string;
    originalLanguage: string;
    lastMessage: string;
    sender: string;
    status: string;
}

export default function Dashboard({ user }: { user: any }) {
    // const [language, setLanguage] = useState('en')
    // const { theme, setTheme } = useTheme()
    const t: Translations = translations['en']

    return (
        <div className="flex h-screen bg-background">
            <div className="flex-1 flex flex-col overflow-hidden gap-4">
                <DashboardHeader t={t} />

                <TicketManagement t={t} />

                <main className="flex-1 overflow-x-auto p-4">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>{t.info}</TableHead>
                                <TableHead>{t.origin}</TableHead>
                                <TableHead>{t.messages}</TableHead>
                                <TableHead>{t.originalLanguage}</TableHead>
                                <TableHead>{t.lastMessage}</TableHead>
                                <TableHead>{t.sender}</TableHead>
                                <TableHead>{t.status}</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium">I am having trouble accessing the website</TableCell>
                                <TableCell>Gmail</TableCell>
                                <TableCell>1</TableCell>
                                <TableCell>English</TableCell>
                                <TableCell>about 3 hours ago</TableCell>
                                <TableCell>demo@gurusup.com</TableCell>
                                <TableCell>
                                    <Badge variant="destructive" className="rounded-full">
                                        DRAFT
                                    </Badge>
                                </TableCell>
                            </TableRow>
                            {/* Add more rows as needed */}
                        </TableBody>
                    </Table>
                </main>
            </div>
        </div>
    )
}
