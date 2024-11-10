'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, BarChart, Menu, X, Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react"
import GlobalEnergyConsumption from "@/components/graphic"
import AITokenUsageComparison from "@/components/graphics-comparison"
import Image from "next/image"
import Link from "next/link"

export function LandingPageComponent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [chatOpen, setChatOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Olá! Como posso ajudar você hoje?' }
  ])
  const [inputMessage, setInputMessage] = useState('')

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const toggleChat = () => {
    setChatOpen(!chatOpen)
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputMessage.trim()) {
      setMessages([...messages, { role: 'user', content: inputMessage }])
      setInputMessage('')
      // Simulate bot response (replace with actual API call in production)
      setTimeout(() => {
        setMessages(prev => [...prev, { role: 'assistant', content: 'Obrigado por sua mensagem. Um de nossos consultores entrará em contato em breve.' }])
      }, 1000)
    }
  }

  const NavItems = () => (
    <>
      <Link href="#solucao" className="text-sm font-medium hover:text-[#FFB927]">
        Solução
      </Link>
      <Link href="#beneficios" className="text-sm font-medium hover:text-[#FFB927]">
        Benefícios
      </Link>
      <Link href="#casos-de-sucesso" className="text-sm font-medium hover:text-[#FFB927]">
        Casos de Sucesso
      </Link>
      <Link href="#sobre-nos" className="text-sm font-medium hover:text-[#FFB927]">
        Sobre Nós
      </Link>
      <Link href="#contato" className="text-sm font-medium hover:text-[#FFB927]">
        Contato
      </Link>
    </>
  )

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between mr-10 ml-10">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="Solaris Logo" width={32} height={32} />
            <span className="font-bold">Solaris</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <NavItems />
          </nav>
          <Button asChild className="hidden md:inline-flex bg-[#FFB927] hover:bg-[#E5A622] text-black">
            <Link href="#agendar">Agende uma Reunião</Link>
          </Button>
          <button
            className="md:hidden"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileMenuOpen ? <X className="h-6 w-6 text-[#FFB927]" /> : <Menu className="h-6 w-6 text-[#FFB927]" />}
          </button>
        </div>
      </header>
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background md:hidden">
          <div className="container flex flex-col h-full py-4">
            <div className="flex justify-between items-center mb-8">
              <Link href="/" className="flex items-center space-x-2">
                <Image src="/logo.png" alt="Solaris Logo" width={32} height={32} />
                <span className="font-bold">Solaris</span>
              </Link>
              <button onClick={toggleMobileMenu} aria-label="Fechar menu">
                <X className="h-6 w-6 text-[#FFB927]" />
              </button>
            </div>
            <nav className="flex flex-col space-y-4">
              <NavItems />
            </nav>
            <Button asChild className="mt-8 bg-[#FFB927] hover:bg-[#E5A622] text-black">
              <Link href="#agendar" onClick={toggleMobileMenu}>Agende uma Reunião</Link>
            </Button>
          </div>
        </div>
      )}
      <main className="flex-1 mr-10 ml-10">
        {/* Main content (unchanged) */}
        <section id="solucao" className="w-full py-6 md:py-12 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  IA Sustentável para Empresas Conscientes
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Otimize seu consumo de energia com práticas de IA sustentável e alcance suas metas ESG sem comprometer a
                  eficiência.
                </p>
                <Button asChild size="lg" className="w-full sm:w-auto bg-[#FFB927] hover:bg-[#E5A622] text-black">
                  <Link href="#agendar">Agende uma Reunião com um Consultor</Link>
                </Button>
              </div>
              <GlobalEnergyConsumption />
            </div>
          </div>
        </section>
        <AITokenUsageComparison/>
        <section id="beneficios" className="w-full py-6 md:py-12 lg:py-16 pr-5 pl-5 bg-[#f8f8f8]">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
              Por que escolher nossa consultoria em IA sustentável?
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <BarChart className="w-12 h-12 text-[#FFB927]" />
                  <h3 className="text-xl font-bold">Reduza Custos com Consumo de Energia</h3>
                  <p className="text-sm text-muted-foreground">
                    Otimização do uso de IA para cortar gastos desnecessários com energia.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <CheckCircle className="w-12 h-12 text-[#FFB927]" />
                  <h3 className="text-xl font-bold">Alcance Metas ESG com Transparência</h3>
                  <p className="text-sm text-muted-foreground">
                    Relatórios ESG personalizados para acompanhar e comunicar seu impacto ambiental.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <Users className="w-12 h-12 text-[#FFB927]" />
                  <h3 className="text-xl font-bold">Capacitação e Autonomia para Sua Equipe</h3>
                  <p className="text-sm text-muted-foreground">
                    Treinamento prático para que sua equipe mantenha a sustentabilidade em IA.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <BarChart className="w-12 h-12 text-[#FFB927]" />
                  <h3 className="text-xl font-bold">Relatórios Detalhados de Impacto Ambiental</h3>
                  <p className="text-sm text-muted-foreground">
                    Estimativas de redução de pegada de carbono e benchmarks para comparação setorial.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="como-funciona" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
              Como Levamos a Sustentabilidade para Sua Empresa
            </h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 rounded-full bg-[#FFB927] text-black flex items-center justify-center">
                    1
                  </div>
                  <h3 className="text-xl font-bold">Diagnóstico Inicial</h3>
                </div>
                <p className="text-muted-foreground">Avaliamos seu consumo energético e identificamos áreas de melhoria.</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 rounded-full bg-[#FFB927] text-black flex items-center justify-center">
                    2
                  </div>
                  <h3 className="text-xl font-bold">Plano de Otimização Personalizado</h3>
                </div>
                <p className="text-muted-foreground">
                  Criamos um plano de redução de consumo de energia com estratégias práticas.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 rounded-full bg-[#FFB927] text-black flex items-center justify-center">
                    3
                  </div>
                  <h3 className="text-xl font-bold">Suporte e Capacitação</h3>
                </div>
                <p className="text-muted-foreground">Oferecemos treinamento e guias de boas práticas para sua equipe.</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 rounded-full bg-[#FFB927] text-black flex items-center justify-center">
                    4
                  </div>
                  <h3 className="text-xl font-bold">Relatórios e Monitoramento Contínuo</h3>
                </div>
                <p className="text-muted-foreground">
                  Geramos relatórios ESG e acompanhamos o progresso com revisões periódicas.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="casos-de-sucesso" className="w-full py-6 md:py-12 lg:py-16 pr-5 pl-5 bg-[#f8f8f8]">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
              Empresas que já estão economizando com IA sustentável
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <blockquote className="text-lg font-semibold mb-4">
                    A consultoria nos ajudou a reduzir nosso consumo de energia em 30% em apenas 6 meses.
                  </blockquote>
                  <p className="text-sm text-muted-foreground">- Maria Silva, CEO da TechCorp</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <blockquote className="text-lg font-semibold mb-4">
                    Nossos relatórios ESG melhoraram significativamente, atraindo mais investidores.
                  </blockquote>
                  <p className="text-sm text-muted-foreground">- João Santos, CTO da GreenTech</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <blockquote className="text-lg font-semibold mb-4">
                    A capacitação da nossa equipe nos tornou autônomos na gestão de IA sustentável.
                  </blockquote>
                  <p className="text-sm text-muted-foreground">- Ana Oliveira, Diretora de Sustentabilidade da EcoSolutions</p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-12 text-center">
              <Button asChild size="lg" className="bg-[#FFB927] hover:bg-[#E5A622] text-black">
                <Link href="#agendar">Veja Como Podemos Ajudar Sua Empresa</Link>
              </Button>
            </div>
          </div>
        </section>
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Perguntas Frequentes</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Como funciona a análise inicial de consumo energético?</AccordionTrigger>
                <AccordionContent>
                  Nossa equipe realiza uma avaliação detalhada do seu consumo atual, identificando padrões e áreas de melhoria
                  potencial. Utilizamos ferramentas avançadas de análise de dados para fornecer insights precisos.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Quanto tempo leva o processo de consultoria?</AccordionTrigger>
                <AccordionContent>
                  O tempo varia de acordo com o tamanho e complexidade da sua empresa, mas geralmente nosso processo inicial leva
                  de 4 a 8 semanas. Após isso, oferecemos suporte contínuo e monitoramento.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Minha empresa precisa estar em um setor específico para contratar o serviço?</AccordionTrigger>
                <AccordionContent>
                  Não, nossa consultoria é adaptável a diversos setores. Temos experiência em indústrias variadas e
                  personalizamos nossa abordagem para atender às necessidades específicas de cada cliente.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Qual o custo estimado do serviço?</AccordionTrigger>
                <AccordionContent>
                  O custo varia dependendo do escopo do projeto e das necessidades específicas da sua empresa. Oferecemos uma
                  consulta inicial gratuita para avaliar suas necessidades e fornecer uma estimativa personalizada.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
        <section id="sobre-nos" className="w-full py-6 md:py-12 lg:py-16 pr-5 pl-5 bg-[#f8f8f8]">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
              Nossa Experiência em IA e Sustentabilidade
            </h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <div>
                <p className="text-lg text-muted-foreground mb-4">
                  Com mais de uma década de experiência em IA e sustentabilidade, nossa equipe está comprometida em ajudar
                  empresas a reduzir seu impacto ambiental enquanto otimizam suas operações.
                </p>
                <p className="text-lg text-muted-foreground">
                  Nosso compromisso com a inovação e a responsabilidade ambiental nos permite oferecer soluções de ponta que
                  realmente fazem a diferença.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardContent className="p-4">
                    <Image
                      src="/logo.png"
                      alt="Foto do Consultor"
                      width={100}
                      height={100}
                      className="rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-lg font-bold text-center">Dr. Carlos Mendes</h3>
                    <p className="text-sm text-muted-foreground text-center">Especialista em IA Sustentável</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <Image
                      src="/logo.png"
                      alt="Foto da Consultora"
                      width={100}
                      height={100}
                      className="rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-lg font-bold text-center">Dra. Lúcia Ferreira</h3>
                    <p className="text-sm text-muted-foreground text-center">Especialista em Eficiência Energética</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section id="agendar" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
              Vamos Conversar sobre o Futuro Sustentável da Sua Empresa
            </h2>
            <form className="grid gap-4 max-w-lg mx-auto">
              <Input placeholder="Nome Completo" required />
              <Input placeholder="Cargo" required />
              <Input placeholder="Empresa" required />
              <Input type="email" placeholder="E-mail" required />
              <Input type="tel" placeholder="Telefone" required />
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o horário preferido para a reunião" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="manha">Manhã</SelectItem>
                  <SelectItem value="tarde">Tarde</SelectItem>
                  <SelectItem value="noite">Noite</SelectItem>
                </SelectContent>
              </Select>
              <Textarea placeholder="Conte-nos sobre sua necessidade em sustentabilidade (opcional)" />
              <Button type="submit" size="lg" className="bg-[#FFB927] hover:bg-[#E5A622] text-black">
                Agendar Reunião com um Consultor
              </Button>
            </form>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-[#f8f8f8]">
        <div className="container px-4 md:px-6 mr-10 ml-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
              <Link href="/" className="flex items-center space-x-2 mb-3">
                <Image src="/logo.png" alt="Solaris Logo" width={40} height={40} className="text-[#FFB927]" />
                <span className="font-bold">Solaris</span>
              </Link>
              <p className="text-sm text-muted-foreground">© 2024 Solaris. Todos os direitos reservados.</p>
            </div>
            <nav className="flex flex-wrap justify-center md:justify-end gap-4 sm:gap-6">
              <Link href="#" className="text-sm font-medium hover:text-[#FFB927]">
                Sobre
              </Link>
              <Link href="#" className="text-sm font-medium hover:text-[#FFB927]">
                Contato
              </Link>
              <Link href="#" className="text-sm font-medium hover:text-[#FFB927]">
                Políticas de Privacidade
              </Link>
              <Link href="#" className="text-sm font-medium hover:text-[#FFB927]">
                Termos de Uso
              </Link>
            </nav>
          </div>
          <div className="mt-6 flex justify-center space-x-4">
            <Link href="#" className="text-muted-foreground hover:text-[#FFB927]">
              <Mail className="h-6 w-6" />
              <span className="sr-only">E-mail</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-[#FFB927]">
              <Phone className="h-6 w-6" />
              <span className="sr-only">Telefone</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-[#FFB927]">
              <MapPin className="h-6 w-6" />
              <span className="sr-only">Endereço</span>
            </Link>
          </div>
        </div>
      </footer>
      
      {/* Floating Chat Icon */}
      <button
        onClick={toggleChat}
        className="fixed bottom-4 right-4 p-4 bg-[#FFB927] text-black rounded-full shadow-lg hover:bg-[#E5A622] transition-colors"
        aria-label="Abrir chat"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Chat Pop-up */}
      {chatOpen && (
        <div className="fixed bottom-20 right-4 w-80 h-96 bg-white rounded-lg shadow-xl flex flex-col">
          <div className="p-4 bg-[#FFB927] text-black rounded-t-lg flex justify-between items-center">
            <h3 className="font-bold">Chat de Atendimento</h3>
            <button onClick={toggleChat} aria-label="Fechar chat">
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-2 rounded-lg ${message.role === 'user' ? 'bg-[#FFB927] text-black' : 'bg-gray-200'}`}>
                  {message.content}
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={handleSendMessage} className="p-4 border-t flex">
            <Input
              type="text"
              placeholder="Digite sua mensagem..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              className="flex-1 mr-2"
            />
            <Button type="submit" size="icon" className="bg-[#FFB927] hover:bg-[#E5A622] text-black">
              <Send className="h-4 w-4" />
              <span className="sr-only">Enviar</span>
            </Button>
          </form>
        </div>
      )}
    </div>
  )
}