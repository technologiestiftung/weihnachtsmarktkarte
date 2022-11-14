import { Dialog } from '@headlessui/react'
import { Fragment, useState, FC } from 'react'
import { Cross } from '../Icons'

export interface IntroModalType {
  modalOpen: boolean
}

export const IntroModal: FC<IntroModalType> = ({
  modalOpen,
  setModalOpen,
  setNavView,
}) => {
  function closeModal(view: string | null) {
    setModalOpen(false)
    // if (view) {
    //   setNavView(view)
    // }
  }
  return (
    <>
      <Dialog
        open={modalOpen}
        as="div"
        className="relative z-50"
        onClose={closeModal}
      >
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
              <button
                className="top-0 right-0 m-10 absolute cursor-pointer z-20 hover:bg-gold rounded-full p-2"
                onClick={closeModal}
              >
                <Cross color1={'black'} />
              </button>
              <h2 className="font-bold text-2xl">
                Mit den Kollegen auf einen Glühwein?
              </h2>
              <h4>So lässt der Weihnachtsmarktbesuch keine Wünsche offen!</h4>
              <p>
                Die Berliner Weihnachtsmarktkarte zeigt das vielfältige Angebot
                der Stadt von traditionell bis internationalen Flair. Mithilfe
                der Filterfunktionen können Weihnachtsmärkte nach Wunschdatum
                und Öffnungszeiten angezeigt werden. Angereichert mit offenen
                Daten zu Toilettenstandorten und Sitzbänken wird damit schon der
                diesjährige Weihnachtmarktbesuch ein rundum gelungenes Fest.
              </p>
              <button onClick={closeModal}>Erkunden</button>
              <button onClick={() => closeModal('info')}>Meher Infos</button>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </>
  )
}
