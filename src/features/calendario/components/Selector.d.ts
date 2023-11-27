type Severity = "success" | "info" | "warning" | "error"

interface Props {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  severity?: Severity
  message: string
}

export function Aviso(props: Props): React.ReactNode
