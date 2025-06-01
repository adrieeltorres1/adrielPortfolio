import { jsxDEV as _jsxDEV, Fragment as _Fragment } from "react/jsx-dev-runtime";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './style.css';
import { BsHeadset, BsTools } from "react-icons/bs";

const App = () => {
  return (
    <>
      <h2 className="flex justify-center font-semibold text-4xl text-white">Experiências</h2>
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
          <h4 className="vertical-timeline-element-subtitle italic text-[#535353]">GIGA MAIS FIBRA</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ad quis ea odio est laborum porro labore neque quasi eius, aliquid itaque. Facere dolore sint asperiores consequuntur perspiciatis accusamus porro dolorum autem
          </p>
          <p>
            minus exercitationem reiciendis unde nisi animi natus soluta temporibus sequi voluptate sed commodi, excepturi tempore voluptas quo iusto tenetur?
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
          <h4 className="vertical-timeline-element-subtitle italic text-[#535353]">GIGA MAIS FIBRA</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ad quis ea odio est laborum porro labore neque quasi eius, aliquid itaque. Facere dolore sint asperiores consequuntur perspiciatis accusamus porro dolorum autem
          </p>
          <p>
            minus exercitationem reiciendis unde nisi animi natus soluta temporibus sequi voluptate sed commodi, excepturi tempore voluptas quo iusto tenetur?
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
          <h4 className="vertical-timeline-element-subtitle italic text-[#535353]">NOTREDAME INTERMÉTICA HAPVIDA</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ad quis ea odio est laborum porro labore neque quasi eius, aliquid itaque. Facere dolore sint asperiores consequuntur perspiciatis accusamus porro dolorum autem
          </p>
          <p>
            minus exercitationem reiciendis unde nisi animi natus soluta temporibus sequi voluptate sed commodi, excepturi tempore voluptas quo iusto tenetur?
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  );
}

export default App;