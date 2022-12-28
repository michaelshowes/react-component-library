import styles from './button.module.scss';
import cx from 'classnames';

type ButtonProps = {
  variant?: 'primary' | 'secondary';
  label: string;
  fullWidth?: boolean;
};

export default function Button({
  variant,
  label = 'Button',
  fullWidth = false,
}: ButtonProps) {
  return (
    <button
      className={cx({
        [`${styles.primary}`]: variant === 'primary',
        [`${styles.secondary}`]: variant === 'secondary',
        fullWidth: fullWidth,
      })}
    >
      <span>{label}</span>
    </button>
  );
}
