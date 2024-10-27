'use client'

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import HomeHeader from "./home-header"
import Image from "next/image"
import { features, platformName } from "@/lib/platform/config"
import { Routes } from "@/lib/platform/routes"

export default function LandingPage() {
    const [colorTheme, setColorTheme] = useState<'light' | 'dark' | 'purple'>('light')

    const themes = {
        light: {
            name: 'light',
            background: "bg-gray-50",
            text: "text-gray-900",
            primary: "bg-blue-600 hover:bg-blue-700 text-white",
            secondary: "bg-gray-200 hover:bg-gray-300 text-gray-900",
            accent: "bg-blue-100",
        },
        dark: {
            name: 'dark',
            background: "bg-gray-900",
            text: "text-gray-50",
            primary: "bg-blue-500 hover:bg-blue-600 text-white",
            secondary: "bg-gray-700 hover:bg-gray-600 text-gray-50",
            accent: "bg-blue-900",
        },
        purple: {
            name: 'purple',
            background: "bg-purple-100",
            text: "text-purple-900",
            primary: "bg-purple-600 hover:bg-purple-700 text-white",
            secondary: "bg-purple-200 hover:bg-purple-300 text-purple-900",
            accent: "bg-purple-200",
        },
    }

    const currentTheme = themes[colorTheme]

    return (
        <div className={`min-h-screen flex flex-col w-full ${currentTheme.background} ${currentTheme.text}`}>
            <HomeHeader currentTheme={currentTheme} setColorTheme={setColorTheme} />

            <main className="flex-grow">
                <section className={`py-20 ${currentTheme.accent}`}>
                    <div className="container_ mx-auto_ px-8">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="md:w-1/2 mb-10 md:mb-0 text-left xs:text-center w-full flex flex-col gap-4 xs:justify-center xs:items-center">
                                <div className="flex flex-col gap-1 justify-center items-center max-w-xl text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                                    <span className="">Lleva a otro nivel</span>
                                    <span className={`${colorTheme === 'purple' ? 'text-purple-600' : 'text-blue-600'}`}>la Experiencia</span>
                                    <span className="">de Soporte al Cliente</span>
                                </div>

                                <div className="flex gap-1 text-center sm:text-left text-lg max-w-lg">
                                    Empodera a tu equipo con nuestra plataforma de soporte intuitiva, poderosa y eficiente. Transforma las interacciones con los clientes en relaciones duraderas.
                                </div>
                                <Link href={Routes.LOGIN} className="mt-8 text-left sm:text-center">
                                    <Button className={`${currentTheme.primary} text-2xl p-8 rounded-xl`}>
                                        Comencemos
                                    </Button>
                                </Link>
                            </div>
                            <div className="md:w-1/2 relative">
                                <div className={`absolute top-0 right-0 w-72 h-72 ${colorTheme === 'purple' ? 'bg-purple-300' : 'bg-blue-300'} rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob`}></div>
                                <div className={`absolute top-0 -left-4 w-72 h-72 ${colorTheme === 'purple' ? 'bg-purple-400' : 'bg-blue-400'} rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000`}></div>
                                <div className={`absolute -bottom-8 left-20 w-72 h-72 ${colorTheme === 'purple' ? 'bg-purple-500' : 'bg-blue-500'} rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000`}></div>
                                <div className="relative">
                                    <Image
                                        src={"/images/customer_support.jpg"}
                                        height={400}
                                        width={400}
                                        className="rounded-lg shadow-2xl object-contain h-full w-auto"
                                        alt="Customer Support"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20">
                    <div className="container mx-auto px-8">
                        <h2 className="text-3xl font-bold mb-12 text-center">¿Por qué elegir {platformName}?</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {features.map((feature, index) => (
                                <div key={index} className={`p-6 rounded-lg ${colorTheme === 'dark' ? 'bg-gray-800' : 'bg-white shadow-lg'}`}>
                                    <feature.icon className={`h-12 w-12 mb-4 ${colorTheme === 'purple' ? 'text-purple-600' : 'text-blue-600'}`} />
                                    <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                                    <p>{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className={`py-20 ${currentTheme.accent}`}>
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-6">¿Listo para transformar tu soporte al cliente?</h2>
                        <p className="text-xl mb-8 max-w-2xl mx-auto">
                            Únete a miles de empresas que ya han mejorado su experiencia de cliente con { platformName }.
                        </p>
                        <Link href={Routes.LOGIN}>
                            <Button className={`${currentTheme.primary} text-xl p-8 rounded-xl`}>Comienza aquí</Button>
                        </Link>
                    </div>
                </section>

            </main>

            <footer className={`${colorTheme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'} py-8`}>
                <div className="container mx-auto px-4 text-center flex flex-col gap-2">
                    <p>&copy; {new Date().getFullYear()} · SupportHub</p>
                    <p>All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}