type FooterLink = {
  label: string;
  href: string;
}

type FooterSection = {
  title: string;
  links: FooterLink[];
}

type NavLinks = {
  title: string;
  link: string;
}

export const footerData: FooterSection[] = [
  {
    title: "Categorias",
    links: [
      { label: "Mais Vendidos", href: "/mais-vendidos" },
      { label: "Novidades", href: "/novidades" },
      { label: "Conjuntos", href: "/conjuntos" },
    ],
  },
  {
    title: "Institucional",
    links: [
      { label: "Sobre a Fit&Go", href: "/sobre" },
      { label: "Como comprar", href: "/como-comprar" },
      { label: "Trocas e devoluções", href: "/trocas-e-devolucoes" },
    ],
  },
  {
    title: "Minha Conta",
    links: [
      { label: "Criar uma Conta", href: "/criar-conta" },
      { label: "Minha Conta", href: "/minha-conta" },
      { label: "Meus Pedidos", href: "/meus-pedidos" },
    ],
  },
  {
    title: "Atendimento",
    links: [
      { label: "(27)99999-8888", href: "tel:+5527999998888" },
      { label: "email@exemplo.com", href: "mailto:email@exemplo.com" },
    ],
  },
];

export const navLinks: NavLinks[] = [
  {title: 'Home', link: '/'},
  {title: 'Categorias', link: '/categorias'},
  {title: 'Sobre', link: '/sobre'},
  {title: 'Ofertas', link: '/ofertas'},
]