import { useState } from 'react'
import axios from 'axios'
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

export const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    company: '',
    email: '',
    phone: '',
    preferredTime: '',
    message: ''
  })

  const [formStatus, setFormStatus] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('Enviando...')

    try {
      await axios.post('/api/send-email', formData)
      setFormStatus('Mensagem enviada com sucesso!')
      setFormData({
        name: '',
        position: '',
        company: '',
        email: '',
        phone: '',
        preferredTime: '',
        message: ''
      })
    } catch {
      setFormStatus('Erro ao enviar a mensagem. Tente novamente.')
    }
  }

  return (
    <section id="agendar" className="w-full py-6 md:py-12 lg:py-16">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
          Fale Conosco!
        </h2>
        <form className="grid gap-4 max-w-lg mx-auto" onSubmit={handleSubmit}>
          <Input name="name" placeholder="Nome Completo" value={formData.name} onChange={handleInputChange} required />
          <Input name="position" placeholder="Cargo" value={formData.position} onChange={handleInputChange} required />
          <Input name="company" placeholder="Empresa" value={formData.company} onChange={handleInputChange} required />
          <Input type="email" name="email" placeholder="E-mail" value={formData.email} onChange={handleInputChange} required />
          <Input type="tel" name="phone" placeholder="Telefone" value={formData.phone} onChange={handleInputChange} required />
          <Select name="preferredTime" value={formData.preferredTime} required>
            <SelectTrigger>
              <SelectValue placeholder="Selecione o horário preferido para a reunião" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="manha">Manhã</SelectItem>
              <SelectItem value="tarde">Tarde</SelectItem>
              <SelectItem value="noite">Noite</SelectItem>
            </SelectContent>
          </Select>
          <Textarea name="message" placeholder="Conte-nos sobre sua necessidade em sustentabilidade (opcional)" value={formData.message} onChange={handleInputChange} />
          <Button type="submit" size="lg" className="bg-[#FFB927] hover:bg-[#E5A622] text-black">
            Agendar Reunião
          </Button>
        </form>
        {formStatus && <p className="text-center mt-4">{formStatus}</p>}
      </div>
    </section>
  )
}