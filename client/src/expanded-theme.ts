import { Palette, PaletteColor } from "@mui/material/styles/createPalette"

declare module "@mui/material/styles/createPalette" {
  interface PaletteColor {
    [key: number]: string;
  }

  interface Palette {
    tertiary: PaletteColor;
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Props = {
  s: Palette,
  p: PaletteColor
}