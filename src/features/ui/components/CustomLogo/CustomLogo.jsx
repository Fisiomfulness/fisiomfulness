export default function CustomLogo(props) {
  const { color, ...otherProps } = props;

  return (
    /* eslint-disable-next-line */
    <img
      src={`/logo_${color === "dark" ? color : "light"}.png`}
      loading="lazy"
      alt="logo"
      {...otherProps}
    />
  );
}
