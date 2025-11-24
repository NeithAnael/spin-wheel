
import { wheelTheme } from "@/components/theme/wheelTheme";

export default function Header() {
  const { header } = wheelTheme;

  return (
    <header
      className={`w-full py-4 flex flex-col items-center justify-center relative z-10
                  ${header.bg} ${header.blur} border-b`}
      style={{ borderColor: header.borderColor }}
    >
      <h1
        className={`text-4xl text-center`}
        style={{ color: header.titleColor, fontWeight: header.titleFontWeight }}
      >
        {wheelTheme.title}
      </h1>
      <p
        className="text-lg text-center"
        style={{ color: header.taglineColor, fontWeight: header.taglineFontWeight }}
      >
        {wheelTheme.tagline}
      </p>
    </header>
  );
}
