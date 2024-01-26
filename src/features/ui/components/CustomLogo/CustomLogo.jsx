export default function CustomLogo(props) {
  const { color, ...otherProps } = props;

  const _color = ["light", "dark"].includes(color) ? color : "light";

  return (
    /* eslint-disable-next-line */
    <img
      src={`/logo_${_color}.png`}
      loading="lazy"
      alt="logo"
      {...otherProps}
    />
  );
}
