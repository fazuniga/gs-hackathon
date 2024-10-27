import Link from "next/link"

import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SubmitButton } from "../submit-button"
import { FormMessage } from "../form-message"
import { signInAction } from "@/app/actions"
import { Routes } from "@/lib/platform/routes"
import PlatformLogo from "../logo"

// Ensure this component is used in a server-rendered context
export async function LoginForm() {
	return (
		<form className="flex-1 flex flex-col min-w-64" action={signInAction}>
			<Card className="mx-auto max-w-sm p-4 w-[380px] h-fit">
				<CardHeader>
					<CardTitle className="text-2xl flex flex-row items-center justify-between gap-1">
						Ingresar
						<PlatformLogo />
					</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="flex flex-col justify-center gap-4">
						<div className="grid gap-2">
							<Label htmlFor="email">Email</Label>
							<Input
								id="email"
								name="email"
								type="email"
								placeholder="m@example.com"
								required
							/>
						</div>
						<div className="grid gap-2">
							<div className="flex items-center">
								<Label htmlFor="password">Password</Label>
							</div>
							<Input id="password" name="password" type="password" required />
						</div>
						<SubmitButton pendingText="Ingresando..." className="bg-blue-600 hover:bg-blue-700">
							Ingresar
						</SubmitButton>
					</div>
					<div className="mt-8 text-center text-sm">
						¿No tienes cuenta?{" "}
						<Link href={Routes.SIGNUP} className="underline">
							Crea una aquí
						</Link>
					</div>
				</CardContent>
			</Card>
		</form>
	)
}
