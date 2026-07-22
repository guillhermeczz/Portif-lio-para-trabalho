import type { ReactNode } from "react";
import { Header } from "@/components/Header";
import { Section } from "@/components/Section";
import { abilities, experiences, interests } from "@/components/Data";

function Pill({ children }: { children: ReactNode }) {
  return <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">{children}</span>;
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,#123b66_0,transparent_32%),linear-gradient(135deg,#06111f_0%,#020617_60%,#000_100%)]">
      <Header />
      <section id="home" className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-20 pt-32">
        <div className="absolute right-10 top-32 hidden h-72 w-72 rounded-full bg-electric-500/20 blur-3xl md:block" />
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-electric-400/30 bg-electric-400/10 px-4 py-2 text-sm font-semibold text-electric-400">Direito • Operações • Tecnologia • Inovação</p>
            <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-tight text-white md:text-7xl">Guilherme Maciel Martins Cruz</h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-300">Estudante de Direito na PUC-Campinas. Profissional com experiência em operações, tecnologia e administração.</p>
            <p className="mt-6 max-w-3xl text-2xl font-bold leading-9 text-white">“Unindo Direito, tecnologia e eficiência operacional para criar soluções modernas.”</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#experiencia" className="rounded-full bg-electric-400 px-7 py-4 text-center font-bold text-navy-950 transition hover:-translate-y-1 hover:bg-white">Conhecer minha trajetória</a>
              <a href="#contato" className="rounded-full border border-white/15 px-7 py-4 text-center font-bold text-white transition hover:-translate-y-1 hover:border-electric-400 hover:text-electric-400">Entrar em contato</a>
            </div>
          </div>
          <div className="glass animate-float rounded-[2rem] p-8">
            <div className="rounded-[1.5rem] border border-white/10 bg-black/25 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-electric-400">Perfil em construção</p>
              <h2 className="mt-4 text-3xl font-black">Carreira moderna entre o jurídico e o digital.</h2>
              <div className="mt-8 grid gap-4">
                {['Compliance e contratos', 'Suporte e análise de sistemas', 'Processos, dados e automação'].map((item) => <div key={item} className="rounded-2xl bg-white/5 p-4 text-slate-200">↳ {item}</div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section id="sobre" eyebrow="Sobre mim" title="Visão jurídica com mentalidade tecnológica.">
        <div className="glass rounded-[2rem] p-8 text-lg leading-8 text-slate-300 md:p-10">
          <p>Sou estudante de Direito na Pontifícia Universidade Católica de Campinas (PUC-Campinas), buscando construir uma carreira que combine conhecimento jurídico, visão estratégica e tecnologia.</p>
          <p className="mt-5">Tenho interesse em Direito Empresarial, Contratos, Compliance, LGPD e aplicação de inteligência artificial para otimização de processos.</p>
          <p className="mt-5">Minha trajetória profissional passou por áreas administrativas, operações industriais e tecnologia, desenvolvendo habilidades em organização, análise de informações, resolução de problemas e melhoria de processos.</p>
        </div>
      </Section>

      <Section id="experiencia" eyebrow="Experiência profissional" title="Uma trajetória prática em tecnologia, indústria e operação.">
        <div className="relative space-y-8 before:absolute before:left-4 before:top-0 before:h-full before:w-px before:bg-white/10 md:before:left-1/2">
          {experiences.map((exp, index) => (
            <article key={exp.company} className={`relative grid gap-6 md:grid-cols-2 ${index % 2 ? '' : 'md:[&>div]:col-start-2'}`}>
              <span className="absolute left-2 top-8 h-5 w-5 rounded-full border-4 border-navy-950 bg-electric-400 md:left-[calc(50%-10px)]" />
              <div className="glass ml-10 rounded-3xl p-7 md:ml-0">
                <p className="text-sm font-bold text-electric-400">{exp.period}</p>
                <h3 className="mt-2 text-2xl font-black text-white">{exp.company}</h3>
                <p className="mt-1 font-semibold text-slate-200">{exp.role}</p>
                <p className="mt-5 text-slate-300">{exp.description}</p>
                <div className="mt-6 grid gap-6 lg:grid-cols-2">
                  <div><h4 className="font-bold text-white">Atividades</h4><ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-300">{exp.activities.map((a) => <li key={a}>{a}</li>)}</ul></div>
                  <div><h4 className="font-bold text-white">Competências</h4><div className="mt-3 flex flex-wrap gap-2">{exp.skills.map((s) => <Pill key={s}>{s}</Pill>)}</div></div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="formacao" eyebrow="Formação" title="Base acadêmica orientada a negócios, dados e regulação.">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="glass rounded-3xl p-8"><p className="text-electric-400">Pontifícia Universidade Católica de Campinas (PUC-Campinas)</p><h3 className="mt-3 text-3xl font-black">Direito</h3><p className="mt-4 text-slate-300">Situação: Em andamento • Previsão: 2030</p></div>
          <div className="glass rounded-3xl p-8"><h3 className="text-xl font-black">Interesses acadêmicos</h3><div className="mt-5 flex flex-wrap gap-3">{interests.map((i) => <Pill key={i}>{i}</Pill>)}</div></div>
        </div>
      </Section>

      <Section id="ia" eyebrow="IA & Automação" title="Chatbots inteligentes com mentalidade de startup.">
        <div className="glass rounded-[2rem] p-8 md:p-10">
          <p className="max-w-3xl text-2xl font-bold text-white">Desenvolvimento de chatbots inteligentes adaptados às necessidades de cada negócio.</p>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-300">Criação de assistentes virtuais utilizando inteligência artificial para empresas que desejam melhorar seu atendimento, reduzir tarefas repetitivas e organizar melhor suas demandas.</p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              ["Público-alvo", ["Escritórios de advocacia", "Clínicas", "Pequenos negócios", "Empresas com alto volume de atendimento"]],
              ["Problemas resolvidos", ["Demora no primeiro atendimento", "Perda de potenciais clientes", "Mensagens repetitivas", "Falta de organização", "Dificuldade no agendamento"]],
              ["Soluções", ["Atendimento automático personalizado", "Coleta inicial de informações", "Organização de clientes", "Integração com agendas", "Encaminhamento humano"]],
            ].map(([title, items]) => <div key={title as string} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"><h3 className="text-xl font-black text-white">{title as string}</h3><ul className="mt-4 space-y-3 text-sm text-slate-300">{(items as string[]).map((item) => <li key={item}>• {item}</li>)}</ul></div>)}
          </div>
        </div>
      </Section>

      <Section id="habilidades" eyebrow="Habilidades" title="Competências para ambientes dinâmicos.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{abilities.map((ability) => <div key={ability} className="glass rounded-2xl p-5 font-bold text-white transition hover:-translate-y-1 hover:border-electric-400/50">{ability}</div>)}</div>
      </Section>

      <Section id="contato" eyebrow="Contato" title="Vamos conversar sobre tecnologia, processos e inovação jurídica.">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="glass rounded-3xl p-8"><h3 className="text-2xl font-black">Guilherme Maciel Martins Cruz</h3><div className="mt-6 grid gap-3 text-slate-300"><a href="https://www.linkedin.com/" className="hover:text-electric-400">LinkedIn — adicionar perfil</a><a href="https://github.com/" className="hover:text-electric-400">GitHub — adicionar perfil</a><a href="mailto:email@exemplo.com" className="hover:text-electric-400">Email — email@exemplo.com</a><a href="https://wa.me/5500000000000" className="hover:text-electric-400">WhatsApp — adicionar número</a></div></div>
          <form className="glass rounded-3xl p-8"><div className="grid gap-4"><input className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4 outline-none transition focus:border-electric-400" placeholder="Seu nome" /><input className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4 outline-none transition focus:border-electric-400" placeholder="Seu email" type="email" /><textarea className="min-h-36 rounded-2xl border border-white/10 bg-black/20 px-5 py-4 outline-none transition focus:border-electric-400" placeholder="Como posso ajudar?" /><button className="rounded-full bg-electric-400 px-7 py-4 font-black text-navy-950 transition hover:bg-white" type="submit">Enviar mensagem</button></div></form>
        </div>
      </Section>
    </main>
  );
}
