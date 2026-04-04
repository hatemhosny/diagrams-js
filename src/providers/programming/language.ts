import { _Programming } from "./index.js";
import bashIcon from "../../../resources/programming/language/bash.png";
import cIcon from "../../../resources/programming/language/c.png";
import cppIcon from "../../../resources/programming/language/cpp.png";
import csharpIcon from "../../../resources/programming/language/csharp.png";
import dartIcon from "../../../resources/programming/language/dart.png";
import elixirIcon from "../../../resources/programming/language/elixir.png";
import erlangIcon from "../../../resources/programming/language/erlang.png";
import goIcon from "../../../resources/programming/language/go.png";
import javaIcon from "../../../resources/programming/language/java.png";
import javascriptIcon from "../../../resources/programming/language/javascript.png";
import kotlinIcon from "../../../resources/programming/language/kotlin.png";
import latexIcon from "../../../resources/programming/language/latex.png";
import matlabIcon from "../../../resources/programming/language/matlab.png";
import nodejsIcon from "../../../resources/programming/language/nodejs.png";
import phpIcon from "../../../resources/programming/language/php.png";
import pythonIcon from "../../../resources/programming/language/python.png";
import rIcon from "../../../resources/programming/language/r.png";
import rubyIcon from "../../../resources/programming/language/ruby.png";
import rustIcon from "../../../resources/programming/language/rust.png";
import scalaIcon from "../../../resources/programming/language/scala.png";
import sqlIcon from "../../../resources/programming/language/sql.png";
import swiftIcon from "../../../resources/programming/language/swift.png";
import typescriptIcon from "../../../resources/programming/language/typescript.png";

class _Language extends _Programming {
  protected static override _type = "language";
}

export class Bash extends _Language {
  protected static _iconDataUrl = bashIcon;
}

export class C extends _Language {
  protected static _iconDataUrl = cIcon;
}

export class Cpp extends _Language {
  protected static _iconDataUrl = cppIcon;
}

export class Csharp extends _Language {
  protected static _iconDataUrl = csharpIcon;
}

export class Dart extends _Language {
  protected static _iconDataUrl = dartIcon;
}

export class Elixir extends _Language {
  protected static _iconDataUrl = elixirIcon;
}

export class Erlang extends _Language {
  protected static _iconDataUrl = erlangIcon;
}

export class Go extends _Language {
  protected static _iconDataUrl = goIcon;
}

export class Java extends _Language {
  protected static _iconDataUrl = javaIcon;
}

export class Javascript extends _Language {
  protected static _iconDataUrl = javascriptIcon;
}

export class Kotlin extends _Language {
  protected static _iconDataUrl = kotlinIcon;
}

export class Latex extends _Language {
  protected static _iconDataUrl = latexIcon;
}

export class Matlab extends _Language {
  protected static _iconDataUrl = matlabIcon;
}

export class Nodejs extends _Language {
  protected static _iconDataUrl = nodejsIcon;
}

export class Php extends _Language {
  protected static _iconDataUrl = phpIcon;
}

export class Python extends _Language {
  protected static _iconDataUrl = pythonIcon;
}

export class R extends _Language {
  protected static _iconDataUrl = rIcon;
}

export class Ruby extends _Language {
  protected static _iconDataUrl = rubyIcon;
}

export class Rust extends _Language {
  protected static _iconDataUrl = rustIcon;
}

export class Scala extends _Language {
  protected static _iconDataUrl = scalaIcon;
}

export class Sql extends _Language {
  protected static _iconDataUrl = sqlIcon;
}

export class Swift extends _Language {
  protected static _iconDataUrl = swiftIcon;
}

export class Typescript extends _Language {
  protected static _iconDataUrl = typescriptIcon;
}

// Aliases
export const JavaScript = Javascript;
export const NodeJS = Nodejs;
export const PHP = Php;
export const TypeScript = Typescript;
