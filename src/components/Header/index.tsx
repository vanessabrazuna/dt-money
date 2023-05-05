import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '../NewTransactionModal'
import logoImg from '../../assets/logo.svg'

import { HeaderContainer, HeaderContent, NewTransitionButton } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="Logotipo DT Money" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransitionButton>Nova transação</NewTransitionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
