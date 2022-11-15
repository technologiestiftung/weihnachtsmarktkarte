import { FC } from 'react'
import { Dialog } from '@headlessui/react'
import { Cross } from '../Icons'

import { TsbLogo } from '@components/Logos/TsbLogo'
import { OdisLogo } from '@components/Logos/OdisLogo'

export interface IntroModalType {
  modalOpen: boolean
  setModalOpen: (date: boolean) => void
  setNavView: (date: string) => void
  setSidebarMenuOpen: (date: boolean) => void
}

export const IntroModal: FC<IntroModalType> = ({
  modalOpen,
  setModalOpen,
  setNavView,
  setSidebarMenuOpen,
}) => {
  function closeModal() {
    setModalOpen(false)
  }
  function closeModalExplore() {
    setModalOpen(false)
    setNavView('filter')
    setSidebarMenuOpen(true)
  }
  function closeModalInfo() {
    setModalOpen(false)
    setNavView('info')
    setSidebarMenuOpen(true)
  }

  return (
    <>
      <Dialog
        open={modalOpen}
        as="div"
        className="relative z-50"
        onClose={closeModal}
      >
        <div className="fixed inset-0 bg-darkblue/60" aria-hidden="true" />
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Dialog.Panel className="bg-white max-h-full overflow-y-auto p-6 max-w-xs md:max-w-none filter drop-shadow-lg rounded-lg md:min-w-xl md:w-1/2 mx-auto transition-all">
              <button
                className="focus:outline-none top-0 right-0 m-2 absolute cursor-pointer z-20 hover:bg-gold rounded-full p-2"
                onClick={closeModal}
              >
                <Cross color1={'black'} />
              </button>
              <h2 className="font-bold text-2xl pb-2 pt-2">
                Mit den Kollegen auf einen Glühwein?
              </h2>
              <h4 className="pb-4">
                So lässt der Weihnachtsmarktbesuch keine Wünsche offen!
              </h4>
              <p className="pb-4">
                Die Berliner Weihnachtsmarktkarte zeigt das vielfältige Angebot
                der Stadt von traditionell bis internationalen Flair. Mithilfe
                der Filterfunktionen können Weihnachtsmärkte nach Wunschdatum
                und Öffnungszeiten angezeigt werden. Angereichert mit offenen
                Daten zu Toilettenstandorten und Sitzbänken wird damit schon der
                diesjährige Weihnachtmarktbesuch ein rundum gelungenes Fest.
              </p>

              <button
                className="xmas-btn px-4 bg-darkblue text-gold hover:bg-gold hover:text-darkblue p-2 text-bold rounded border-2 border-darkblue hover:border-gold"
                onClick={closeModalExplore}
              >
                Erkunden
              </button>
              <button
                className="px-4 ml-4 bg-white text-darkblue text-bold border-2 border-darkblue hover:border-gold p-2 rounded hover:text-gray-500"
                onClick={closeModalInfo}
              >
                Mehr Infos
              </button>

              <div className="grid md:grid-cols-[1fr,auto] gap-4 mt-4 md:mt-6">
                <p className="text-xs mb-2 md:mb-0 text-gray-500 max-w-md">
                  <i>
                    Eine prototypische Datenvisualisierung der Open Data
                    Informationsstelle Berlin in Zusammenarbeit mit dem CityLAB
                    Berlin
                  </i>
                </p>
                <div className="inline-block md:flex self-center">
                  <div className="w-36 mr-4">
                    <TsbLogo className={`w-30`} />
                  </div>
                  <div className="w-32 mt-4 md:mt-0 self-center">
                    <OdisLogo className={`w-30`} />
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </>
  )
}
