import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '../NewTransactionModal'

import logoImg from '../../assets/logo.svg'

import { HeaderContainer, HeaderContent, NewTransitionButton } from './styles'

export function Header() {
  const [isTransactionModalOpen, setIsTransactionModalOpen] =
    useState<boolean>(false)

  function handleTransactionModalOpenChange(value: boolean) {
    setIsTransactionModalOpen(value)
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="Logotipo DT Money" />

        <Dialog.Root
          open={isTransactionModalOpen}
          onOpenChange={handleTransactionModalOpenChange}
        >
          <Dialog.Trigger asChild>
            <NewTransitionButton>Nova transação</NewTransitionButton>
          </Dialog.Trigger>

          <NewTransactionModal
            handleTransactionModalOpenChange={setIsTransactionModalOpen}
          />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
