'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart, Users, MessageSquare, PieChart, User } from "lucide-react"

export function PortfolioComponent() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Portfolio de Moustapha LO</h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center text-gray-900">
                <User className="w-6 h-6 mr-2 text-gray-700" />
                About me
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">Je suis Moustapha LO, élève diplômé en conseil et recherche en Management et actuellement étudiant en AI Applied to Business.</p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center text-gray-900">
                <BarChart className="w-6 h-6 mr-2 text-gray-700" />
                Analyse de Données
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Suivi des KPIs Clients</li>
                <li>Apport de dashboard pour l'équipe commerciale</li>
                <li>Reporting de Performance</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center text-gray-900">
                <Users className="w-6 h-6 mr-2 text-gray-700" />
                Gestion des Clients
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Onboarding</li>
                <li>Appels avec clients pour suivi</li>
                <li>Gestion des Feedbacks</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center text-gray-900">
                <MessageSquare className="w-6 h-6 mr-2 text-gray-700" />
                Communication
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">Facilitation de la communication entre les clients et l'équipe interne pour assurer la satisfaction et la rétention des clients.</p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center text-gray-900">
                <PieChart className="w-6 h-6 mr-2 text-gray-700" />
                Analyse Stratégique
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">Utilisation des données pour identifier les opportunités d'amélioration et de croissance pour les clients et l'entreprise.</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Compétences Clés</h2>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="bg-gray-200 text-gray-700">Analyse de données</Badge>
            <Badge variant="secondary" className="bg-gray-200 text-gray-700">Gestion de la relation client</Badge>
            <Badge variant="secondary" className="bg-gray-200 text-gray-700">Reporting</Badge>
            <Badge variant="secondary" className="bg-gray-200 text-gray-700">Onboarding</Badge>
            <Badge variant="secondary" className="bg-gray-200 text-gray-700">Communication</Badge>
            <Badge variant="secondary" className="bg-gray-200 text-gray-700">Résolution de problèmes</Badge>
          </div>
        </div>

        <footer className="mt-16 text-center text-gray-600">
          <p>© 2024 Portfolio de Moustapha LO. Tous droits réservés.</p>
        </footer>
      </div>
    </div>
  )
}

