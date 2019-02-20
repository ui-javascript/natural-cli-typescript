export interface ILoginButtonProps {
  active: boolean,
  userName: string,
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
  [args: string]: any
}