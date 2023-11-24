import { FC } from 'react'
import { Dialog } from '@headlessui/react'
import { Cross } from '../Icons'

import { TsbLogo } from '@components/Logos/TsbLogo'
import { OdisLogo } from '@components/Logos/OdisLogo'

export interface IntroModalType {
  modalOpen: boolean
  setModalOpen: (date: boolean) => void
  setNavView: (date: 'info' | 'filter') => void
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
          <div className="flex min-h-full items-center justify-center p-4 leading-7">
            <Dialog.Panel className="border-2 border-gold/50  bg-darkblue text-lightblue/90 max-h-full p-6 max-w-xs md:max-w-none filter drop-shadow-lg rounded-lg md:min-w-xl md:w-1/2 mx-auto transition-all">
              <button
                className="text-lightblue focus:outline-none top-0 right-0 m-1 absolute cursor-pointer z-20 hover:bg-gold rounded-full p-2"
                onClick={closeModal}
              >
                <Cross />
              </button>
              <h2 className="font-bold text-2xl pb-2 pt-2 text-lightblue/80">
                Berliner Weihnachtsmarkt-Finder
                <img
                  src="./stern_ausgewaehlt.png"
                  alt="stern"
                  className="inline absolute mt-0 md:-mt-2 ml-6 w-10"
                />
              </h2>
              <h4 className="pb-4">
                Glühwein, Glögg, Glückseligkeit - alle Weihnachtsmärkte auf
                einen Blick!
              </h4>
              <p className="pb-4">
                Der Weihnachtsmarkt-Finder zeigt das vielfältige Angebot der
                Berliner Weihnachtsmärkte von traditionellem bis zu
                individuellem Flair. Lass dir Weihnachtsmärkte nach Wunschdatum
                anzeigen, nutze die Filter, um passende Märkte zu finden und
                teile deine Entdeckung mit deinen Freund:innen! Frohe
                Weihnachten!
              </p>

              <button
                className="xmas-btn px-4 bg-darkblue hover:bg-gold hover:text-lightblue text-gold p-2 text-bold rounded border-2 border-gold hover:border-gold"
                onClick={closeModalExplore}
              >
                Erkunden
              </button>
              <button
                className="px-4 ml-4 bg-darkblue text-lightblue text-bold border-2 border-lightblue/90 hover:border-gold p-2 rounded hover:text-lightblue hover:bg-gold"
                onClick={closeModalInfo}
              >
                Mehr Infos
              </button>

              <div className="grid md:grid-cols-[1fr,auto] gap-4 mt-4 md:mt-6">
                <p className="text-xs mb-2 md:mb-0 text-gray-500 w-11/12 md:w-full pt-4">
                  <i>
                    Eine prototypische Datenvisualisierung der Open Data
                    Informationsstelle Berlin in Zusammenarbeit mit dem CityLAB
                    Berlin
                  </i>
                </p>
                <div className="ml-2 flex self-center w-10/12">
                  <div className="w-32">
                    <TsbLogo className={`w-30`} />
                  </div>
                  <div className="w-32 pt-2 mr-8 md:mt-0 self-center md:pl-4">
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
