import React from "react";

import ContainerAccordion from "./ContainerAccordion";
import AccordionSection from "./AccordionSection";

const Accordion = () => {

  return (
    <ContainerAccordion allowMultipleOpen={false}>
      <AccordionSection id={1} key={1} title="Estados" allowMultipleOpen={false} nameAccordion= "mainAccordion">
        
          <label className="inline-flex items-center mt-3">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-primary hover:text-secondary"
              checked
            />
            <span className="ml-2 text-sm text-nobel">Abiertas</span>
          </label>
          <label className="inline-flex items-center mt-3">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-primary hover:text-secondary"
              checked
            />
            <span className="ml-2 text-sm text-nobel">En proceso</span>
          </label>
          <label className="inline-flex items-center mt-3">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-primary hover:text-secondary"
              checked
            />
            <span className="ml-2 text-sm text-nobel">Ejecutadas</span>
          </label>
          <label className="inline-flex items-center mt-3">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-primary hover:text-secondary"
            />
            <span className="ml-2 text-sm text-nobel">Anuladas</span>
          </label>
        
      </AccordionSection>

      <AccordionSection id={2} key={2} title="Prioridad" allowMultipleOpen={false} nameAccordion= "mainAccordion">

        
          <label className="inline-flex items-center mt-3">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-primary hover:text-secondary"
              checked
            />
            <span className="ml-2 text-sm text-nobel">Critica</span>
          </label>
          <label className="inline-flex items-center mt-3">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-primary hover:text-secondary"
              checked
            />
            <span className="ml-2 text-sm text-nobel">Alta</span>
          </label>
          <label className="inline-flex items-center mt-3">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-primary hover:text-secondary"
              checked
            />
            <span className="ml-2 text-sm text-nobel">Media</span>
          </label>
          <label className="inline-flex items-center mt-3">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-primary hover:text-secondary"
            />
            <span className="ml-2 text-sm text-nobel">Baja</span>
          </label>
        
      </AccordionSection>
      <AccordionSection id={3} key={3} title="Servicios" allowMultipleOpen={false} nameAccordion= "mainAccordion">

        
          <label className="inline-flex items-center mt-3">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-primary hover:text-secondary"
            />
            <span className="ml-2 text-sm text-nobel">Todos</span>
          </label>
          <label className="inline-flex items-center mt-3">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-primary hover:text-secondary"
            />
            <span className="ml-2 text-sm text-nobel">
              Atención de urgencias
                  </span>
          </label>
          <label className="inline-flex items-center mt-3">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-primary hover:text-secondary"
            />
            <span className="ml-2 text-sm text-nobel">
              B1 Mantenimiento preventivo
                  </span>
          </label>

      </AccordionSection>
      <AccordionSection id={4} key={4} title="Temporal" allowMultipleOpen={false} nameAccordion= "mainAccordion">

        
          <ContainerAccordion allowMultipleOpen={true}>
            <AccordionSection id={5} key={5} title="sub" allowMultipleOpen={false} nameAccordion= "secondAccordion">
              uno
            </AccordionSection>
            <AccordionSection id={6} key={6} title="sub" allowMultipleOpen={false} nameAccordion= "secondAccordion">
              dos
            </AccordionSection>
            <AccordionSection id={7} key={7} title="sub" allowMultipleOpen={false} nameAccordion= "secondAccordion">
              tres
            </AccordionSection>

          </ContainerAccordion>
        

      </AccordionSection>


    </ContainerAccordion>

  );
};

export default Accordion;
