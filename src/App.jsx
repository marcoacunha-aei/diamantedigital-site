import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { 
  Brain, 
  Clock, 
  Users, 
  TrendingUp, 
  Phone, 
  Calendar, 
  FileText, 
  BarChart3,
  CheckCircle,
  Star,
  ArrowRight,
  Zap,
  Shield,
  Target
} from 'lucide-react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    escritorio: '',
    advogados: '',
    area: '',
    desafio: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Dados do formulário:', formData)
    alert('Obrigado! Entraremos em contato em breve para agendar sua demonstração.')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-blue-400" />
            <span className="text-xl font-bold text-white">AdvocaciaIA</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#inicio" className="text-white hover:text-blue-400 transition-colors">Início</a>
            <a href="#recursos" className="text-white hover:text-blue-400 transition-colors">Recursos</a>
            <a href="#beneficios" className="text-white hover:text-blue-400 transition-colors">Benefícios</a>
            <a href="#contato" className="text-white hover:text-blue-400 transition-colors">Contato</a>
          </nav>
          <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700">
            Agendar Demonstração
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              O Futuro já Chegou:
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent block">
                Transforme seu Escritório com IA
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Automatize processos, capture mais clientes e otimize seu tempo com nossa solução de 
              Inteligência Artificial. Agora com a revolucionária funcionalidade de ligação com IA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-lg px-8 py-4">
                <Zap className="mr-2 h-5 w-5" />
                Solicitar Demonstração Gratuita
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4">
                Ver Como Funciona
              </Button>
            </div>
            
            {/* Destaque da Nova Funcionalidade */}
            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-lg p-4 inline-block">
              <div className="flex items-center justify-center space-x-2">
                <Phone className="h-5 w-5 text-yellow-400" />
                <span className="text-yellow-400 font-semibold">NOVO:</span>
                <span className="text-white">Ligação com IA - Atendimento por voz automatizado</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-blue-400">70%</div>
              <div className="text-gray-300">Redução no tempo de atendimento</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-green-400">50%</div>
              <div className="text-gray-300">Aumento na conversão</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-purple-400">24/7</div>
              <div className="text-gray-300">Atendimento automatizado</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-yellow-400">3 meses</div>
              <div className="text-gray-300">Retorno do investimento</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why AI Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Por que IA no seu Escritório?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A Inteligência Artificial não vai substituir advogados, mas advogados que usam IA 
              vão substituir os que não usam.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-red-500/20 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Antes: Tempo Perdido</h3>
                  <p className="text-gray-300">Horas gastas em atendimento básico, agendamentos manuais e tarefas repetitivas.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-green-500/20 p-3 rounded-lg">
                  <Target className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Depois: Foco no que Importa</h3>
                  <p className="text-gray-300">Mais tempo para casos complexos, estratégias jurídicas e relacionamento com clientes.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-8 rounded-2xl border border-blue-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">Transformação Comprovada</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-gray-300">Atendimento 24h sem custo adicional</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-gray-300">Qualificação automática de leads</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-gray-300">Agendamento inteligente de consultas</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-gray-300">Análise automática de documentos</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="recursos" className="py-20 px-4 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Recursos Revolucionários
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tecnologia de ponta desenvolvida especificamente para escritórios de advocacia
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
              <CardHeader>
                <div className="bg-blue-500/20 p-3 rounded-lg w-fit">
                  <Brain className="h-8 w-8 text-blue-400" />
                </div>
                <CardTitle className="text-white">Atendimento Inteligente</CardTitle>
                <CardDescription className="text-gray-300">
                  Chat automatizado que entende contexto jurídico e qualifica leads
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
              <CardHeader>
                <div className="bg-yellow-500/20 p-3 rounded-lg w-fit">
                  <Phone className="h-8 w-8 text-yellow-400" />
                </div>
                <CardTitle className="text-white">Ligação com IA</CardTitle>
                <CardDescription className="text-gray-300">
                  Nova funcionalidade: atendimento por voz com IA conversacional
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
              <CardHeader>
                <div className="bg-green-500/20 p-3 rounded-lg w-fit">
                  <Calendar className="h-8 w-8 text-green-400" />
                </div>
                <CardTitle className="text-white">Agendamento Automático</CardTitle>
                <CardDescription className="text-gray-300">
                  Gestão inteligente de agenda com confirmações e lembretes
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
              <CardHeader>
                <div className="bg-purple-500/20 p-3 rounded-lg w-fit">
                  <FileText className="h-8 w-8 text-purple-400" />
                </div>
                <CardTitle className="text-white">Análise de Documentos</CardTitle>
                <CardDescription className="text-gray-300">
                  IA especializada em revisão e análise de documentos jurídicos
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
              <CardHeader>
                <div className="bg-cyan-500/20 p-3 rounded-lg w-fit">
                  <BarChart3 className="h-8 w-8 text-cyan-400" />
                </div>
                <CardTitle className="text-white">CRM Jurídico</CardTitle>
                <CardDescription className="text-gray-300">
                  Gestão completa de clientes e processos em um só lugar
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
              <CardHeader>
                <div className="bg-orange-500/20 p-3 rounded-lg w-fit">
                  <Shield className="h-8 w-8 text-orange-400" />
                </div>
                <CardTitle className="text-white">Integração Segura</CardTitle>
                <CardDescription className="text-gray-300">
                  Conecta com sistemas existentes mantendo total segurança
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Como Funciona
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Implementação simples em 3 passos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Configuração Personalizada</h3>
              <p className="text-gray-300">Adaptamos a IA para seu escritório, área de atuação e processos específicos</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Integração Rápida</h3>
              <p className="text-gray-300">Conectamos com seus sistemas existentes sem interromper suas operações</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Resultados Imediatos</h3>
              <p className="text-gray-300">Comece a ver resultados desde o primeiro dia com suporte completo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="beneficios" className="py-20 px-4 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              O que Nossos Clientes Dizem
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardDescription className="text-gray-300">
                  "A IA revolucionou nosso atendimento. Agora captamos 3x mais clientes e nossa equipe foca no que realmente importa."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-white font-semibold">Dr. Carlos Silva</div>
                <div className="text-gray-400 text-sm">Silva & Associados</div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardDescription className="text-gray-300">
                  "A funcionalidade de ligação com IA é impressionante. Nossos clientes ficam surpresos com a qualidade do atendimento."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-white font-semibold">Dra. Ana Santos</div>
                <div className="text-gray-400 text-sm">Santos Advocacia</div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardDescription className="text-gray-300">
                  "ROI em 2 meses. A automação nos permitiu crescer 200% sem aumentar a equipe administrativa."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-white font-semibold">Dr. Roberto Lima</div>
                <div className="text-gray-400 text-sm">Lima Advogados</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contato" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Pronto para Revolucionar seu Escritório?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Agende uma demonstração gratuita e veja como a IA pode transformar seu negócio em apenas 30 minutos.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-gray-300">Demonstração personalizada para seu escritório</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-gray-300">Análise gratuita do seu potencial de automação</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-gray-300">Teste grátis por 15 dias</span>
                  </div>
                </div>
              </div>
              
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Solicitar Demonstração</CardTitle>
                  <CardDescription className="text-gray-300">
                    Preencha o formulário e entraremos em contato em até 2 horas
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="nome" className="text-white">Nome Completo *</Label>
                        <Input
                          id="nome"
                          name="nome"
                          value={formData.nome}
                          onChange={handleInputChange}
                          required
                          className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                          placeholder="Seu nome"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-white">Email Profissional *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                          placeholder="seu@email.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="telefone" className="text-white">WhatsApp *</Label>
                        <Input
                          id="telefone"
                          name="telefone"
                          value={formData.telefone}
                          onChange={handleInputChange}
                          required
                          className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                          placeholder="(11) 99999-9999"
                        />
                      </div>
                      <div>
                        <Label htmlFor="advogados" className="text-white">Nº de Advogados *</Label>
                        <Input
                          id="advogados"
                          name="advogados"
                          value={formData.advogados}
                          onChange={handleInputChange}
                          required
                          className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                          placeholder="Ex: 5"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="escritorio" className="text-white">Nome do Escritório *</Label>
                      <Input
                        id="escritorio"
                        name="escritorio"
                        value={formData.escritorio}
                        onChange={handleInputChange}
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        placeholder="Nome do seu escritório"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="area" className="text-white">Área de Atuação Principal</Label>
                      <Input
                        id="area"
                        name="area"
                        value={formData.area}
                        onChange={handleInputChange}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        placeholder="Ex: Direito Civil, Trabalhista..."
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="desafio" className="text-white">Principal Desafio Atual</Label>
                      <Textarea
                        id="desafio"
                        name="desafio"
                        value={formData.desafio}
                        onChange={handleInputChange}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        placeholder="Conte-nos qual é o maior desafio do seu escritório..."
                        rows={3}
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-lg py-3">
                      <ArrowRight className="mr-2 h-5 w-5" />
                      Solicitar Demonstração Gratuita
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-sm border-t border-white/20 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold text-white">AdvocaciaIA</span>
              </div>
              <p className="text-gray-400">
                Transformando escritórios de advocacia com Inteligência Artificial
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Recursos</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Atendimento com IA</li>
                <li>Ligação Inteligente</li>
                <li>CRM Jurídico</li>
                <li>Análise de Documentos</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Sobre Nós</li>
                <li>Casos de Sucesso</li>
                <li>Blog</li>
                <li>Suporte</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Contato</h3>
              <ul className="space-y-2 text-gray-400">
                <li>contato@advocaciaia.com</li>
                <li>(11) 9999-9999</li>
                <li>São Paulo, SP</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 AdvocaciaIA. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

