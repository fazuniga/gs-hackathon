'use client'

import { useState } from 'react'
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
import { ThemeSwitcher } from '../theme-switcher'

// Define an interface for the translations
interface Translations {
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

// Type the translations object
const translations: Record<string, Translations> = {
    en: {
        dashboard: 'Dashboard',
        inbox: 'Inbox',
        templates: 'Templates',
        settings: 'Settings',
        needsSupervision: 'Needs supervision',
        autoAnswered: 'Auto answered',
        closedTickets: 'Closed tickets',
        search: 'Search by address or subject',
        reloadTickets: 'Reload tickets',
        info: 'Info',
        origin: 'Origin',
        messages: 'Messages',
        originalLanguage: 'Original Language',
        lastMessage: 'Last message',
        sender: 'Sender',
        status: 'Status',
    },
    es: {
        dashboard: 'Panel de control',
        inbox: 'Bandeja de entrada',
        templates: 'Plantillas',
        settings: 'Configuración',
        needsSupervision: 'Necesita supervisión',
        autoAnswered: 'Respondido automáticamente',
        closedTickets: 'Tickets cerrados',
        search: 'Buscar por dirección o asunto',
        reloadTickets: 'Recargar tickets',
        info: 'Información',
        origin: 'Origen',
        messages: 'Mensajes',
        originalLanguage: 'Idioma original',
        lastMessage: 'Último mensaje',
        sender: 'Remitente',
        status: 'Estado',
    },
    fr: {
        dashboard: 'Tableau de bord',
        inbox: 'Boîte de réception',
        templates: 'Modèles',
        settings: 'Paramètres',
        needsSupervision: 'Nécessite une supervision',
        autoAnswered: 'Répondu automatiquement',
        closedTickets: 'Tickets fermés',
        search: 'Rechercher par adresse ou sujet',
        reloadTickets: 'Recharger les tickets',
        info: 'Info',
        origin: 'Origine',
        messages: 'Messages',
        originalLanguage: 'Langue d\'origine',
        lastMessage: 'Dernier message',
        sender: 'Expéditeur',
        status: 'Statut',
    },
}

export default function Dashboard() {
    const [language, setLanguage] = useState('en')
    const { theme, setTheme } = useTheme()
    const t: Translations = translations[language]

    return (
        <div className="flex h-screen bg-background">
            <div className="flex-1 flex flex-col overflow-hidden">
                <header className="bg-background border-b">
                    <div className="flex items-center justify-between px-4 py-3">
                        <h2 className="text-lg font-semibold">{t.dashboard}</h2>
                        <div className="flex items-center space-x-4">
                            <Select value={language} onValueChange={setLanguage}>
                                <SelectTrigger className="w-[100px]">
                                    <SelectValue placeholder="Language" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="en">English</SelectItem>
                                    <SelectItem value="es">Español</SelectItem>
                                    <SelectItem value="fr">Français</SelectItem>
                                </SelectContent>
                            </Select>
                            <ThemeSwitcher />
                        </div>
                    </div>
                    <div className="flex items-center justify-between px-4 py-2 border-t">
                        <div className="flex space-x-2">
                            <Button variant="secondary">{t.needsSupervision}</Button>
                            <Button variant="ghost">{t.autoAnswered}</Button>
                            <Button variant="ghost">{t.closedTickets}</Button>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Input placeholder={t.search} className="w-64" />
                            <Button variant="secondary">
                                <Search className="w-4 h-4 mr-2" />
                                {t.search}
                            </Button>
                            <Button>
                                <RotateCcw className="w-4 h-4 mr-2" />
                                {t.reloadTickets}
                            </Button>
                        </div>
                    </div>
                </header>

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
