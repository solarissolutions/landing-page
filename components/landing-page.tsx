'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, BarChart, Menu, X, Mail, Phone, MapPin, MessageCircle, Send, LeafIcon, LineChart } from "lucide-react"
import GlobalEnergyConsumption from "@/components/graphic"
import DashboardInterface from "@/components/dashboard"
import Image from "next/image"
import Link from "next/link"
import { Form } from './form'
import { motion, AnimatePresence } from 'framer-motion' // Import framer-motion

export function LandingPageComponent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [chatOpen, setChatOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Olá! Como posso ajudar você hoje?' }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [hasContactInfo, setHasContactInfo] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const toggleChat = () => {
    setChatOpen(!chatOpen)
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (inputMessage.trim()) {
      setMessages([...messages, { role: 'user', content: inputMessage }]);
  
      if (!hasContactInfo) {
        setTimeout(() => {
          setMessages(prev => [...prev, { role: 'assistant', content: 'Por favor, informe um contato para que possamos continuar.' }]);
          setHasContactInfo(true);
        }, 1000);
      } else {
        setTimeout(() => {
          setMessages(prev => [...prev, { role: 'assistant', content: 'Obrigado por sua mensagem. Um de nossos consultores entrará em contato em breve.' }]);
        }, 1500);
      }
  
      setInputMessage('');
    }
  };

  const NavItems = () => (
    <>
      <Link href="#solucao" className="text-sm font-medium hover:text-[#FFB927]">
        Solução
      </Link>
      <Link href="#beneficios" className="text-sm font-medium hover:text-[#FFB927]">
        Benefícios
      </Link>
      <Link href="#sobre-nos" className="text-sm font-medium hover:text-[#FFB927]">
        Sobre Nós
      </Link>
      <Link href="#agendar" className="text-sm font-medium hover:text-[#FFB927]">
        Contato
      </Link>
    </>
  )

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container w-full max-w-full flex h-16 items-center justify-between px-4 sm:px-6 md:px-10 lg:px-20">
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
      {/* Animação do menu móvel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-background md:hidden px-4 sm:px-6 md:px-10 lg:px-20"
            style={{ zIndex: 1 }}
          >
            <div className="container flex flex-col h-full py-4">
              <div className="flex justify-between items-center mb-8">
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
          </motion.div>
        )}
      </AnimatePresence>
      <main className="flex-1 px-4 sm:px-6 md:px-10 lg:px-20">
        {/* Main content (unchanged) */}
        <section id="solucao" className="w-full py-6 md:py-12 lg:py-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                2030: Ano de Emissão Recorde de CO₂ pela IA.
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                O uso descontrolado de IA nos leva a um futuro de desperdício e custos altos. Vai perder a oportunidade de sair na frente da concorrência?
                </p>
                <Button asChild size="lg" className="w-full sm:w-auto bg-[#FFB927] hover:bg-[#E5A622] text-black">
                  <Link href="#agendar">Fale com um Consultor</Link>
                </Button>
              </div>
              <GlobalEnergyConsumption />
            </div>
          </div>
        </section>
        <section id="dashboard" className="w-full py-6 md:py-12 lg:py-16">
          <DashboardInterface/>
        </section>
        <section id="beneficios" className="w-full py-6 md:py-12 lg:py-16 pr-5 pl-5">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
              Por que escolher nossa Solução?
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <BarChart className="w-12 h-12 text-[#FFB927]" />
                  <h3 className="text-xl font-bold">Monitoramento de Consumo</h3>
                  <p className="text-sm text-muted-foreground">
                  Controle detalhado dos níveis de consumo de energia e tokens
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <CheckCircle className="w-12 h-12 text-[#FFB927]" />
                  <h3 className="text-xl font-bold">Otimização de Prompts</h3>
                  <p className="text-sm text-muted-foreground">
                  Redução de custos e impacto ambiental por meio de sugestões de uso eficiente.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <LeafIcon className="w-12 h-12 text-[#FFB927]" />
                  <h3 className="text-xl font-bold">Data Centers Verdes</h3>
                  <p className="text-sm text-muted-foreground">
                  Incentivo à transição para resfriamento líquido e outras tecnologias sustentáveis..
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <LineChart className="w-12 h-12 text-[#FFB927]" />
                  <h3 className="text-xl font-bold">Relatórios ESG</h3>
                  <p className="text-sm text-muted-foreground">
                   Relatórios mensais e trimestrais automáticos para apoio à conformidade ESG.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="como-funciona" className="w-full py-6 md:py-12 lg:py-16">
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
                  <h3 className="text-xl font-bold">Análise Inteligente de Dados</h3>
                </div>
                <p className="text-muted-foreground">Identificamos os principais pontos de consumo e desperdício.</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 rounded-full bg-[#FFB927] text-black flex items-center justify-center">
                    2
                  </div>
                  <h3 className="text-xl font-bold">Otimização de Processos com IA</h3>
                </div>
                <p className="text-muted-foreground">
                Reduzimos o impacto ambiental da IA com estratégias eficazes
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 rounded-full bg-[#FFB927] text-black flex items-center justify-center">
                    3
                  </div>
                  <h3 className="text-xl font-bold">Relatórios Customizados de Sustentabilidade</h3>
                </div>
                <p className="text-muted-foreground">Resultados claros e alinhados aos principais padrões ESG.</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 rounded-full bg-[#FFB927] text-black flex items-center justify-center">
                    4
                  </div>
                  <h3 className="text-xl font-bold">Acompanhamento Contínuo e Melhorias</h3>
                </div>
                <p className="text-muted-foreground">
                Monitoramento e ajustes contínuos para resultados consistentes.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section id="faq" className="w-full py-6 md:py-12 lg:py-16">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Perguntas Frequentes</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Como o serviço pode realmente reduzir o consumo de energia das operações de IA?</AccordionTrigger>
                <AccordionContent>
                Utilizamos estratégias de otimização, como a engenharia de prompt, para reduzir o número de interações e cálculos desnecessários nas operações de IA. Com menos processamento, o consumo de energia diminui, 
                ajudando a reduzir custos e emissões de carbono sem comprometer a eficiência dos resultados.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Os relatórios personalizados de sustentabilidade atendem às exigências de órgãos reguladores?</AccordionTrigger>
                <AccordionContent>
                Sim, nossos relatórios são alinhados aos principais padrões ESG globais e nacionais, facilitando o cumprimento das regulamentações ambientais. Eles são customizados para 
                fornecer uma visão clara e detalhada dos avanços da sua empresa em sustentabilidade, com métricas que atendem às exigências de órgãos reguladores.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>É indicada para empresas que estão começando com iniciativas de sustentabilidade?</AccordionTrigger>
                <AccordionContent>
                Absolutamente! Nosso serviço é estruturado para empresas em diferentes estágios de sustentabilidade, desde as que estão iniciando até as que buscam otimizar processos. 
                Fornecemos uma análise inicial e um plano de ação personalizado para apoiar as metas e necessidades específicas da sua empresa, ajudando a construir uma base sólida para um futuro mais sustentável.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Quanto tempo leva para ver resultados práticos na redução de consumo e emissões?</AccordionTrigger>
                <AccordionContent>
                Os primeiros resultados podem ser observados em poucas semanas após a implementação das melhorias, com uma redução inicial de desperdícios. 
                Para um impacto mais profundo e consistente, recomendamos um acompanhamento contínuo, que garantirá otimizações progressivas e alinhamento aos objetivos de sustentabilidade.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
        <section id="sobre-nos" className="w-full py-6 md:py-12 lg:py-16 pr-5 pl-5 bg-[#f8f8f8] rounded-xl">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
              Sobre a Solaris
            </h2>
            <div className="grid gap-4 lg:grid-cols-2">
              <div>
                <p className="text-lg text-muted-foreground mb-4">
                Somos estudantes da Universidade de São Paulo, apaixonados por Inteligência Artificial e sustentabilidade. Acreditamos que o uso consciente da IA pode transformar o futuro das empresas, reduzindo desperdícios e promovendo eficiência. Essa união de tecnologia e responsabilidade ambiental é o que nos move.
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
                      src="/davi.jpg"
                      alt="Foto do Consultor"
                      width={100}
                      height={100}
                      className="rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-lg font-bold text-center">Davi Moura</h3>
                    <p className="text-sm text-muted-foreground text-center">Especialista em Dados</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <Image
                      src="/felippe.jpg"
                      alt="Foto da Consultora"
                      width={100}
                      height={100}
                      className="rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-lg font-bold text-center">Felippe Oliveira</h3>
                    <p className="text-sm text-muted-foreground text-center">Especialista em Business</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <Image
                      src="/felipe.jpg"
                      alt="Foto da Consultora"
                      width={100}
                      height={100}
                      className="rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-lg font-bold text-center">Felipe Gigante</h3>
                    <p className="text-sm text-muted-foreground text-center">Especialista em I.A</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <Image
                      src="/mateus.jpg"
                      alt="Foto da Consultora"
                      width={100}
                      height={100}
                      className="rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-lg font-bold text-center">Mateus Cintra</h3>
                    <p className="text-sm text-muted-foreground text-center">Especialista em Desenvolvimento</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <Form/>
      </main>
      <footer className="w-full py-6 bg-[#f8f8f8]">
        <div className="container px-4 md:px-6">
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