import { Translations } from "@/components/dashboard/dashboard";
import { BarChart, MessageCircle, Users } from "lucide-react";

export const platformName = "SupportHub";

export const features = [
  {
    icon: MessageCircle,
    title: "Bandeja Unificada",
    description:
      "Gestiona todas las interacciones con los clientes en un solo lugar",
  },
  {
    icon: BarChart,
    title: "Analíticas Avanzadas",
    description:
      "Obtén información accionable para mejorar la calidad de tu soporte",
  },
  {
    icon: Users,
    title: "Colaboración en Equipo",
    description:
      "Trabaja en equipo y resuelve los problemas de los clientes más rápido",
  },
];

export const translations: Record<string, Translations> = {
    en: {
        dashboard: 'My Dashboard',
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