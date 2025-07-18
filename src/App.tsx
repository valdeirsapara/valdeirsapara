import MainLayout from "./layouts/MainLayout"
import photo from "./assets/photo.jpg"
import SkillsTags from "./components/skill_tag/skill-tag"
import { useQuery } from "@tanstack/react-query"
import { getTechnologes } from "./services/github"

function App() {
  const { data: technologes } = useQuery({
    queryKey: ['user'],
    queryFn: getTechnologes,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    staleTime: Infinity, 
    gcTime: 1000 * 60 * 60 * 24 * 7, 
    retry: false, 
    networkMode: 'offlineFirst'
  })
  return (
    <MainLayout>
      <div className="container mx-auto p-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
        <div className="space-y-1.5">
          {/* Your main content goes here */}
          <h1 className="text-4xl md:text-5xl font-bold">Olá, sou Valdeir Sapará</h1>
          <p className="text-2xl md:text-3xl font-mono text-white/60">Desenvolvedor Full Stack</p>
          <p className="text-lg text-zinc-100 mb-8">Com 4 anos de experiência em desenvolvimento web, especializado em Python, <br />
             Django e Django Rest Framework para criar soluções completas e modernas.</p>
        </div>
        <div>
          <img src={photo} alt="Foto de Valdeir Sapará" className="rounded-full w-32 h-32 md:w-48 md:h-48 object-cover border-4 border-white/10" />
        </div>
      </div>
      {/* sobre mim */}
      <div className="bg-stone-400/10 flex flex-col items-center space-y-10 py-10">
        <div>
          <h1 className="font-bold text-4xl">Sobre mim</h1>
          <div className="border-2 bg-white rounded-2xl w-20 mx-auto"></div>
        </div>
        
        {/* Parágrafos descritivos */}
        <div className="w-4/5 mx-auto flex flex-col md:flex-row gap-10 justify-center">
          <p className="text-stone-50 flex-1">
            Sou desenvolvedor há 4 anos e o que mais me motiva é criar coisas que funcionam de verdade. 
            Trabalho principalmente com Python e Django, construindo APIs e sistemas web que as pessoas 
            realmente usam no dia a dia. Gosto de entender o problema antes de sair codando - isso faz 
            toda a diferença no resultado final.
          </p>
          <p className="text-stone-50 flex-1">
            Além de programar, cuido de todo o processo: desde pensar na arquitetura até colocar no ar 
            em servidores próprios. Acredito que código bom é aquele que outro desenvolvedor consegue 
            entender sem dor de cabeça, então sempre me preocupo em deixar tudo bem documentado e organizado. 
            No fim das contas, gosto de resolver problemas reais com tecnologia.
          </p>
        </div>

          {/* Seção de Skills */}
          <div className="w-4/5 mx-auto">
            <h3 className="text-2xl font-semibold text-center mb-8 text-stone-50">Principais competências</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="space-y-4">
                <SkillsTags text="Desenvolvedor Web"/>
                <SkillsTags text="Back end"/>
                <SkillsTags text="Front end"/>
              </div>
              
              <div className="space-y-4">
                <SkillsTags text="Inteligência Artificial"/>
                <SkillsTags text="Processamento de Linguagem Natural"/>
                <SkillsTags text="Agentes Automatizados"/>
              </div>
            </div>
          </div>
          {/* Minhas Habilidades */}
      </div>
      <div className="mx-auto flex flex-col items-center">
          <div className="my-6">
              <h1 className="font-bold text-4xl">Minhas Habilidades</h1>
              <div className="border-2 bg-white rounded-2xl w-20 mx-auto"></div>
          </div>
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {technologes && technologes.length > 0 ? (
              technologes.map((tech) => (
                <div className="bg-stone-400/10 text-stone-50 font-semibold px-4 py-2 rounded-lg shadow-md" key={tech.toString()}>
                  {tech}
                </div>
              ))
            ) : (
              <p className="text-stone-50">Nenhuma tecnologia encontrada.</p>
            )}
          </div>
      </div>

    </MainLayout>
  )
}

export default App
