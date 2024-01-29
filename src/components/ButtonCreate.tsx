import styles from "./ButtonCreate.module.css";

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export function ButtonCreate({ children, ...rest }: Props) {
  return (
    <button className={styles.container} {...rest}>
      {children}
    </button>
  );
}
