import { jsxDEV as _jsxDEV, Fragment as _Fragment } from "react/jsx-dev-runtime";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { BsHeadset, BsTools } from "react-icons/bs";

const Experiencias = () => {
    return (
        <>
            <h2 className="flex justify-center font-semibold text-4xl text-white mb-8">Experiências</h2>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                        background: '#212121',
                        color: '#fff',
                        borderBottom: '2px solid #1ed760',
                        boxShadow: 'none'
                    }}
                    contentArrowStyle={{ borderRight: '7px solid  #212121' }}
                    date="2025 - Atual"
                    iconStyle={{
                        background: '#1ed760',
                        color: '#fff',
                        boxShadow: 'none'
                    }}
                    icon={<BsTools className="text-[#212121]" />}
                >
                    <h3 className="vertical-timeline-element-title text-2xl font-semibold">Analista De Suporte N1</h3>
                    <h4 className="vertical-timeline-element-subtitle italic text-[#b3b3bb] text-sm">GIGA MAIS FIBRA</h4>
                    <div class="flex flex-wrap gap-3 mt-3 font-medium text-black">
                        <div class="bg-verde-spotify rounded-full px-4 py-1 flex justify-center items-center text-sm">
                            Comunicação
                        </div>
                        <div class="bg-verde-spotify rounded-full px-4 py-1 flex justify-center items-center text-sm">
                            Pensamento Crítico
                        </div>
                        <div class="bg-verde-spotify rounded-full px-4 py-1 flex justify-center items-center text-sm">
                            Resolução de Problemas
                        </div>
                        <div class="bg-verde-spotify rounded-full px-4 py-1 flex justify-center items-center text-sm">
                            Paciência
                        </div>
                        <div class="bg-verde-spotify rounded-full px-4 py-1 flex justify-center items-center text-sm">
                            Proatividade
                        </div>
                    </div>
                    <p className="text-justify">
                        Como Analista de Suporte Técnico N1, presto suporte tanto a clientes finais quanto a Provedores de Serviço de Internet (ISPs). Minhas responsabilidades técnicas centrais incluem a detecção de incidentes de rede e a realização de troubleshooting eficaz em serviços que apresentam falhas.
                    </p>
                    <p className="text-justify">
                        Para dar suporte, tenho continuamente aprofundado e aplicado meus conhecimentos em tecnologias de Camada 2 e 3 e quando preciso, também atuo com a  configuração e manutenção de switches.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                        background: '#212121',
                        color: '#fff',
                        borderBottom: '2px solid #1ed760',
                        boxShadow: 'none'
                    }}
                    contentArrowStyle={{ borderRight: '7px solid  #212121' }}
                    date="2024 - 2025"
                    iconStyle={{
                        background: '#1ed760',
                        color: '#fff',
                        boxShadow: 'none'
                    }}
                    icon={<BsHeadset className="text-[#212121]" />}
                >
                    <h3 className="vertical-timeline-element-title text-white text-2xl font-semibold">Assistente De Suporte Técnico</h3>
                    <h4 className="vertical-timeline-element-subtitle italic text-[#b3b3bb] text-sm">GIGA MAIS FIBRA</h4>
                    <div class="flex flex-wrap gap-3 mt-3 font-medium text-black">
                        <div class="bg-verde-spotify rounded-full px-4 py-1 flex justify-center items-center text-sm">
                            Comunicação
                        </div>
                        <div class="bg-verde-spotify rounded-full px-4 py-1 flex justify-center items-center text-sm">
                            Empatia
                        </div>
                        <div class="bg-verde-spotify rounded-full px-4 py-1 flex justify-center items-center text-sm">
                            Resolução de Problemas
                        </div>
                        <div class="bg-verde-spotify rounded-full px-4 py-1 flex justify-center items-center text-sm">
                            Paciência
                        </div>
                        <div class="bg-verde-spotify rounded-full px-4 py-1 flex justify-center items-center text-sm">
                            Proatividade
                        </div>
                    </div>
                    <p className="text-justify">
                        Como Assistente de Suporte Técnico, atuei como um elo fundamental de apoio à equipe técnica, sendo responsável pelo primeiro contato com os clientes e pela abertura de chamados.
                    </p>
                    <p className="text-justify">
                        No atendimento inicial, meu foco era compreender a fundo a natureza da falha relatada, utilizando uma escuta ativa e fazendo as perguntas certas para assegurar que cada chamado fosse despachado de forma ágil e correta, visando a rápida normalização dos serviços.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                        background: '#212121',
                        color: '#fff',
                        borderBottom: '2px solid #1ed760',
                        boxShadow: 'none'
                    }}
                    contentArrowStyle={{ borderRight: '7px solid  #212121' }}
                    date="2023 - 2024"
                    iconStyle={{
                        background: '#1ed760',
                        color: '#fff',
                        boxShadow: 'none'
                    }}
                    icon={<BsHeadset className="text-[#212121]" />}
                >
                    <h3 className="vertical-timeline-element-title text-white text-2xl font-semibold">Call Center</h3>
                    <h4 className="vertical-timeline-element-subtitle italic text-[#b3b3bb] text-sm">NOTREDAME INTERMÉTICA HAPVIDA</h4>
                    <div class="flex flex-wrap gap-3 mt-3 font-medium text-black">
                        <div class="bg-verde-spotify rounded-full px-4 py-1 flex justify-center items-center text-sm">
                            Comunicação
                        </div>
                        <div class="bg-verde-spotify rounded-full px-4 py-1 flex justify-center items-center text-sm">
                            Empatia
                        </div>
                        <div class="bg-verde-spotify rounded-full px-4 py-1 flex justify-center items-center text-sm">
                            Paciência
                        </div>
                        <div class="bg-verde-spotify rounded-full px-4 py-1 flex justify-center items-center text-sm">
                            Trabalho em equipe
                        </div>
                        <div class="bg-verde-spotify rounded-full px-4 py-1 flex justify-center items-center text-sm">
                            Adaptabilidade
                        </div>
                    </div>
                    <p className="text-justify">
                        Responsável pelo agendamento de consultas e exames médicos e pelo atendimento direto ao paciente. Experiência em fornecer informações precisas sobre procedimentos, preparos e cobertura de convênios, além de gerenciar agendas complexas e garantir a satisfação do cliente no setor de saúde.
                    </p>
                    <p className="text-justify">
                        Habilidade em solucionar dúvidas e conflitos de forma empática e eficiente, visando facilitar o acesso do paciente aos cuidados necessários.
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>

        </>
    );
}

export default Experiencias;