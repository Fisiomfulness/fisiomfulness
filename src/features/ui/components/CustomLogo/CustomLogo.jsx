export default function CustomLogo(props) {
  const { color, ...otherProps } = props;

  return (
    <img
      src={`/logo_${color === "dark" ? color : "light"}.png`}
      loading="lazy"
      alt="logo_fisiomfulness"
      {...otherProps}
    />
  );
}
