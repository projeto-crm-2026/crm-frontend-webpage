import { FooterSection } from './types'

export const FOOTER_LINKS: FooterSection[] = [
  {
    title: 'Produto',
    links: [
      { label: 'Visão geral', href: '#' },
      { label: 'Funcionalidades', href: '#' },
      { label: 'Automação', href: '#' },
      { label: 'Integrações', href: '#' },
      { label: 'Roadmap', href: '#' }
    ]
  },
  {
    title: 'Suporte',
    links: [
      { label: 'Central ajuda', href: '#' },
      { label: 'FAQ', href: '#' },
      { label: 'Reportar erro', href: '#' },
      { label: 'Privacidade', href: '#' },
      { label: 'Termos uso', href: '#' }
    ]
  },
  {
    title: 'Clientes',
    links: [
      { label: 'Casos uso', href: '#' },
      { label: 'Depoimentos', href: '#' },
      { label: 'Resultados', href: '#' },
      { label: 'Parcerias', href: '#' },
      { label: 'Comunidade', href: '#' }
    ]
  },
  {
    title: 'Conteúdo',
    links: [
      { label: 'Blog', href: '#' },
      { label: 'Insights', href: '#' },
      { label: 'Guias', href: '#' },
      { label: 'Boas práticas', href: '#' },
      { label: 'Novidades', href: '#' }
    ]
  },
  {
    title: 'Acesso',
    links: [
      { label: 'Criar conta', href: '#' },
      { label: 'Login', href: '#' },
      { label: 'Dashboard', href: '#' },
      { label: 'API', href: '#' },
      { label: 'Status', href: '#' }
    ]
  }
] as const
