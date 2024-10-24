import { FC } from 'react'
import { Dialog } from '@headlessui/react'
import { Cross, UnderConstruction } from '../Icons'

import { TsbLogo } from '@components/Logos/TsbLogo'
import { OdisLogo } from '@components/Logos/OdisLogo'

import { LanguageText } from '@lib/getText'

export interface IntroModalType {
  modalOpen: boolean
  setModalOpen: (date: boolean) => void
  setNavView: (date: 'info' | 'filter') => void
  setSidebarMenuOpen: (date: boolean) => void
  underConstruction: boolean
  text: LanguageText
}

export const IntroModal: FC<IntroModalType> = ({
  modalOpen,
  setModalOpen,
  setNavView,
  setSidebarMenuOpen,
  underConstruction,
  text,
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
        className="relative z-30"
        onClose={() => {}}
        onClick={() => {
          setModalOpen(false)
        }}
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
              <h2 className="font-clanbold text-2xl pb-2 pt-2 text-lightblue/80">
                {text.introModal.header}{' '}
                <img
                  src="./stern_ausgewaehlt.png"
                  alt="stern"
                  className="inline absolute mt-0 md:-mt-2 ml-6 w-10"
                />
              </h2>
              <h4 className="pb-4">{text.introModal.subHeader}</h4>

              {underConstruction ? (
                <>
                  <div className="block md:flex">
                    <div>
                      <div className="px-2 pb-2 md:hidden flex">
                        <UnderConstruction />
                        <UnderConstruction />
                        <UnderConstruction />
                      </div>
                      <div className="px-2 hidden md:block h-full mt-[50%]">
                        <UnderConstruction />
                      </div>
                    </div>
                    <div className="flex flex-col md:block">
                      {' '}
                      <p
                        className="pb-4"
                        dangerouslySetInnerHTML={{
                          __html: text.introModal.infoConstruction,
                        }}
                      ></p>
                      <a
                        className="xmas-btn px-4 hover:bg-darkgold bg-gold text-darkblue font-clanbold  p-2 md:p-3 text-center text-bold rounded border-2 border-gold hover:border-darkgold"
                        href="https://www.berlin.de/sen/web/service/maerkte-feste/formular.230156.php"
                      >
                        {text.introModal.reportMarket}
                      </a>
                      <button
                        className="mt-2 md:mt-0 px-4 md:ml-4 bg-darkblue text-lightblue text-bold border-2 border-lightblue/90 hover:border-gold p-2 rounded hover:text-lightblue hover:bg-gold"
                        onClick={closeModalExplore}
                      >
                        {text.introModal.exploreMarkets}
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <p className="pb-4">{text.introModal.about}</p>

                  <button
                    className="xmas-btn px-4 hover:bg-darkgold bg-gold font-clanbold md:p-3 text-center rounded hover:border-darkgold text-darkblue"
                    onClick={closeModalExplore}
                  >
                    {text.introModal.explore}
                  </button>
                  <button
                    className="px-4 ml-4 bg-darkblue text-lightblue text-bold border-2 border-lightblue/90 hover:border-gold p-2 rounded hover:text-lightblue hover:bg-gold"
                    onClick={closeModalInfo}
                  >
                    {text.introModal.moreInfo}
                  </button>
                </>
              )}

              <div className="grid md:grid-cols-[1fr,auto] gap-4 mt-4 md:mt-6">
                <p className="text-xs mb-2 md:mb-0 text-gray-500 w-11/12 md:w-full pt-4">
                  <i>{text.introModal.info}</i>
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
