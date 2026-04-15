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

function _Language(label?: string, options?: Record<string, unknown>) {
  const node = _Programming(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "language";
  return node;
}

export function Bash(label?: string, options?: Record<string, unknown>) {
  const node = _Language(label ?? "Bash", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Bash";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = bashIcon;
  return node;
}

export function C(label?: string, options?: Record<string, unknown>) {
  const node = _Language(label ?? "C", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "C";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = cIcon;
  return node;
}

export function Cpp(label?: string, options?: Record<string, unknown>) {
  const node = _Language(label ?? "Cpp", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Cpp";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = cppIcon;
  return node;
}

export function Csharp(label?: string, options?: Record<string, unknown>) {
  const node = _Language(label ?? "Csharp", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Csharp";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = csharpIcon;
  return node;
}

export function Dart(label?: string, options?: Record<string, unknown>) {
  const node = _Language(label ?? "Dart", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Dart";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = dartIcon;
  return node;
}

export function Elixir(label?: string, options?: Record<string, unknown>) {
  const node = _Language(label ?? "Elixir", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Elixir";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = elixirIcon;
  return node;
}

export function Erlang(label?: string, options?: Record<string, unknown>) {
  const node = _Language(label ?? "Erlang", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Erlang";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = erlangIcon;
  return node;
}

export function Go(label?: string, options?: Record<string, unknown>) {
  const node = _Language(label ?? "Go", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Go";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = goIcon;
  return node;
}

export function Java(label?: string, options?: Record<string, unknown>) {
  const node = _Language(label ?? "Java", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Java";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = javaIcon;
  return node;
}

export function Javascript(label?: string, options?: Record<string, unknown>) {
  const node = _Language(label ?? "Javascript", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Javascript";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = javascriptIcon;
  return node;
}

export function Kotlin(label?: string, options?: Record<string, unknown>) {
  const node = _Language(label ?? "Kotlin", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Kotlin";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = kotlinIcon;
  return node;
}

export function Latex(label?: string, options?: Record<string, unknown>) {
  const node = _Language(label ?? "Latex", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Latex";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = latexIcon;
  return node;
}

export function Matlab(label?: string, options?: Record<string, unknown>) {
  const node = _Language(label ?? "Matlab", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Matlab";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = matlabIcon;
  return node;
}

export function Nodejs(label?: string, options?: Record<string, unknown>) {
  const node = _Language(label ?? "Nodejs", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Nodejs";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = nodejsIcon;
  return node;
}

export function Php(label?: string, options?: Record<string, unknown>) {
  const node = _Language(label ?? "Php", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Php";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = phpIcon;
  return node;
}

export function Python(label?: string, options?: Record<string, unknown>) {
  const node = _Language(label ?? "Python", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Python";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = pythonIcon;
  return node;
}

export function R(label?: string, options?: Record<string, unknown>) {
  const node = _Language(label ?? "R", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "R";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = rIcon;
  return node;
}

export function Ruby(label?: string, options?: Record<string, unknown>) {
  const node = _Language(label ?? "Ruby", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Ruby";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = rubyIcon;
  return node;
}

export function Rust(label?: string, options?: Record<string, unknown>) {
  const node = _Language(label ?? "Rust", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Rust";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = rustIcon;
  return node;
}

export function Scala(label?: string, options?: Record<string, unknown>) {
  const node = _Language(label ?? "Scala", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Scala";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = scalaIcon;
  return node;
}

export function Sql(label?: string, options?: Record<string, unknown>) {
  const node = _Language(label ?? "Sql", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Sql";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = sqlIcon;
  return node;
}

export function Swift(label?: string, options?: Record<string, unknown>) {
  const node = _Language(label ?? "Swift", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Swift";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = swiftIcon;
  return node;
}

export function Typescript(label?: string, options?: Record<string, unknown>) {
  const node = _Language(label ?? "Typescript", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Typescript";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = typescriptIcon;
  return node;
}

// Aliases
export const JavaScript = Javascript;
export const NodeJS = Nodejs;
export const PHP = Php;
export const TypeScript = Typescript;
