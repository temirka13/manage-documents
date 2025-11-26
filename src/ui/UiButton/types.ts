export enum EButtonType {
  default = 'default',
  danger = 'danger',
};

export type TButtonProps = {
  type?: EButtonType,
  disabled?: boolean,
};

export type TButtonEmits = {
  (event: 'click', value: Event): void,
};