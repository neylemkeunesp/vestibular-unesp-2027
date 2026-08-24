'use client';

import { useMemo, useState } from 'react';

const applicationUrl = 'https://www.vunesp.com.br/VNSP2514';
const guideUrl = 'https://vestibular.unesp.br/Home/guiadeprofissoes51/guia-unesp-de-profissoes-2025-1.pdf';
const courses = [
  { name: 'Ciência da Computação', city: 'Bauru · Presidente Prudente · Rio Claro · São José do Rio Preto', area: 'Tecnologia', description: 'Algoritmos, programação e sistemas para resolver problemas complexos.', study: 'Lógica, matemática, algoritmos, programação, hardware e arquitetura de computadores.', work: 'Software, dados, inteligência artificial, segurança da informação, redes e computação em nuvem.', highlight: 'Há laboratórios, pesquisa e projetos práticos em todos os câmpus.' },
  { name: 'Direito', city: 'Franca', area: 'Humanas', description: 'Leitura crítica das normas e da vida social para promover justiça.', study: 'Constitucional, administrativo, penal, civil, trabalho, comercial e tributário, com base humanista.', work: 'Advocacia, concursos públicos, consultoria, assessoria legislativa, pesquisa e docência.', highlight: 'Prática jurídica, serviços à comunidade e acompanhamento de processos e audiências.' },
  { name: 'Engenharia Agronômica', city: 'Botucatu · Dracena · Ilha Solteira · Jaboticabal · Registro', area: 'Exatas', description: 'Ciência e tecnologia para a produção agrícola e animal sustentável.', study: 'Solo, plantas, produção, mecanização, economia rural, alimentos e gestão de projetos.', work: 'Agronegócio, cooperativas, agroindústrias, pesquisa, consultoria, mercado financeiro e propriedades rurais.', highlight: 'Fazendas experimentais, extensão e atuação conectada a territórios produtivos.' },
  { name: 'Medicina', city: 'Botucatu', area: 'Saúde', description: 'Formação científica e humanística para o cuidado integral em saúde.', study: 'Bases biológicas, fisiológicas e clínicas, integralidade do cuidado e habilidades médicas.', work: 'Atenção primária, urgência, hospitais, SUS, residência e diferentes especialidades.', highlight: 'Seis anos, com prática desde o início e internato de três anos.' },
  { name: 'Arquitetura e Urbanismo', city: 'Bauru · Presidente Prudente', area: 'Exatas', description: 'Projeto, cidade e território para tornar os lugares mais habitáveis.', study: 'Projeto, tecnologia, linguagem, práticas profissionais, urbanismo e patrimônio.', work: 'Construção, planejamento urbano e territorial, restauro, paisagismo e interiores.', highlight: 'Atividades de extensão tratam a cidade como laboratório de práticas aplicadas.' },
  { name: 'Ciências Biológicas', city: 'Assis · Bauru · Botucatu · Ilha Solteira · Jaboticabal · Rio Claro · São José do Rio Preto · São Vicente', area: 'Saúde', description: 'O estudo da vida, da biodiversidade e da relação humana com o ambiente.', study: 'Genética, biologia molecular, fauna, flora, ecologia, ambiente e educação.', work: 'Pesquisa, ensino, laboratórios, gestão ambiental, conservação, alimentos e vacinas.', highlight: 'Bacharelado e licenciatura; São Vicente oferece também ênfases em Biologia Marinha e Gerenciamento Costeiro.' },
  { name: 'Administração', city: 'Jaboticabal · Tupã', area: 'Humanas', description: 'Gestão estratégica de pessoas, recursos e organizações.', study: 'Finanças, produção, marketing, sistemas de informação, inovação e gestão ambiental.', work: 'Empresas, hospitais, escolas, organizações públicas, ONGs, marketing e novos negócios.', highlight: 'Intercâmbio, empresa júnior, pesquisa e projetos de extensão integram a formação.' },
  { name: 'Design', city: 'Bauru', area: 'Artes', description: 'Criatividade e tecnologia para melhorar produtos, sistemas e experiências.', study: 'Projetos visuais, produtos, interfaces, fotografia, ergonomia, fabricação digital e pesquisa.', work: 'Criação, direção de arte, conteúdo, curadoria, inovação, gestão e empreendedorismo.', highlight: 'Oficinas e laboratórios aproximam teoria, prática e experimentação.' },
];
const areas = ['Todos', 'Tecnologia', 'Saúde', 'Humanas', 'Exatas', 'Artes'];

export default function Home() {
  const [query, setQuery] = useState('');
  const [area, setArea] = useState('Todos');
  const [selected, setSelected] = useState(courses[0]);
  const results = useMemo(() => courses.filter((course) => {
    const matchesQuery = `${course.name} ${course.city} ${course.area}`.toLowerCase().includes(query.toLowerCase());
    return matchesQuery && (area === 'Todos' || course.area === area);
  }), [area, query]);

  return <main>
    <header className="topbar">
      <a className="brand" href="#inicio" aria-label="Vestibular Unesp 2027">UNESP <span>Vestibular 2027</span></a>
      <nav aria-label="Navegação principal"><a href="#cursos">Cursos</a><a href="#como-funciona">Como funciona</a><a href="#datas">Datas</a></nav>
      <a className="button button-small" href={applicationUrl} target="_blank" rel="noreferrer">Inscreva-se</a>
    </header>
    <section id="inicio" className="hero">
      <p className="eyebrow">UNIVERSIDADE ESTADUAL PAULISTA</p><h1>Seu próximo lugar<br />é na UNESP.</h1>
      <p className="hero-copy">Escolha um curso, conheça a cidade e siga para a informação oficial. São 136 cursos de graduação em 24 cidades paulistas.</p>
      <div className="hero-actions"><a className="button" href="#cursos">Encontre seu curso <span>↓</span></a><a className="text-link" href={applicationUrl} target="_blank" rel="noreferrer">Ir para a inscrição na Vunesp <span>↗</span></a></div>
      <div className="hero-stat"><strong>5.850</strong><span>vagas para 2027</span></div>
    </section>
    <section id="datas" className="dates" aria-label="Datas principais"><div><span>Inscrições</span><strong>4 set. — 20 out.</strong></div><div><span>1ª fase</span><strong>22 nov. 2026</strong></div><div><span>2ª fase</span><strong>13 e 14 dez.</strong></div></section>
    <section id="cursos" className="course-section">
      <div className="section-head"><div><p className="eyebrow">COMECE POR AQUI</p><h2>Encontre um curso<br />que faça sentido para você.</h2></div><p>Esta página orienta a escolha e sempre encaminha para fontes oficiais da UNESP e da Vunesp.</p></div>
      <label className="search"><span>⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Busque por curso ou cidade" aria-label="Busque por curso ou cidade" /></label>
      <div className="filters" aria-label="Filtre por área">{areas.map((item) => <button key={item} className={area === item ? 'active' : ''} onClick={() => setArea(item)}>{item}</button>)}</div>
      <p className="result-count">{results.length} cursos em destaque</p>
      <div className="course-grid">{results.map((course) => <article className="course-card" key={course.name}><p>{course.area}</p><h3>{course.name}</h3><span className="city">{course.city}</span><p className="description">{course.description}</p><button className="course-open" onClick={() => setSelected(course)}>Ver detalhes do curso <span>↓</span></button></article>)}</div>
      {results.length === 0 && <p className="empty">Não encontramos esse curso nesta seleção. Consulte o Guia de Profissões completo.</p>}
      <section id="detalhe" className="course-detail" aria-live="polite"><p className="eyebrow">CURSO EM DESTAQUE · {selected.area}</p><h3>{selected.name}</h3><p className="detail-city">{selected.city}</p><div><article><h4>O que você estuda</h4><p>{selected.study}</p></article><article><h4>Onde pode atuar</h4><p>{selected.work}</p></article><article><h4>Na UNESP</h4><p>{selected.highlight}</p></article></div><a className="button" href={guideUrl} target="_blank" rel="noreferrer">Conferir no Guia de Profissões <span>↗</span></a></section>
      <a className="guide-link" href={guideUrl} target="_blank" rel="noreferrer">Ver todos os cursos no Guia de Profissões <span>↗</span></a>
    </section>
    <section id="como-funciona" className="path"><p className="eyebrow">UMA JORNADA SEM DESVIO</p><h2>Da descoberta à inscrição<br />em três passos.</h2><ol><li><span>01</span><strong>Descubra</strong><p>Busque por área, curso ou cidade.</p></li><li><span>02</span><strong>Entenda</strong><p>Leia sobre a formação e os câmpus no Guia de Profissões.</p></li><li><span>03</span><strong>Inscreva-se</strong><p>Conclua a inscrição no ambiente oficial da Vunesp.</p></li></ol></section>
    <section className="callout"><p className="eyebrow">VESTIBULAR UNESP 2027</p><h2>O futuro começa com<br />uma escolha bem informada.</h2><a className="button button-light" href={applicationUrl} target="_blank" rel="noreferrer">Acessar inscrição oficial <span>↗</span></a></section>
    <footer>UNESP · Vestibular 2027 <span>Informações oficiais: Portal do Vestibular e Fundação Vunesp.</span></footer>
  </main>;
}
