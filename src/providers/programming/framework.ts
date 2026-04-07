import { _Programming } from "./index.js";
import angularIcon from "../../../resources/programming/framework/angular.png";
import backboneIcon from "../../../resources/programming/framework/backbone.png";
import camelIcon from "../../../resources/programming/framework/camel.png";
import djangoIcon from "../../../resources/programming/framework/django.png";
import dotnetIcon from "../../../resources/programming/framework/dotnet.png";
import emberIcon from "../../../resources/programming/framework/ember.png";
import fastapiIcon from "../../../resources/programming/framework/fastapi.png";
import flaskIcon from "../../../resources/programming/framework/flask.png";
import flutterIcon from "../../../resources/programming/framework/flutter.png";
import graphqlIcon from "../../../resources/programming/framework/graphql.png";
import hibernateIcon from "../../../resources/programming/framework/hibernate.png";
import jhipsterIcon from "../../../resources/programming/framework/jhipster.png";
import laravelIcon from "../../../resources/programming/framework/laravel.png";
import micronautIcon from "../../../resources/programming/framework/micronaut.png";
import nextjsIcon from "../../../resources/programming/framework/nextjs.png";
import phoenixIcon from "../../../resources/programming/framework/phoenix.png";
import quarkusIcon from "../../../resources/programming/framework/quarkus.png";
import railsIcon from "../../../resources/programming/framework/rails.png";
import reactIcon from "../../../resources/programming/framework/react.png";
import springIcon from "../../../resources/programming/framework/spring.png";
import sqlpageIcon from "../../../resources/programming/framework/sqlpage.png";
import starletteIcon from "../../../resources/programming/framework/starlette.png";
import svelteIcon from "../../../resources/programming/framework/svelte.png";
import vercelIcon from "../../../resources/programming/framework/vercel.png";
import vueIcon from "../../../resources/programming/framework/vue.png";

function _Framework(label?: string, options?: Record<string, unknown>) {
  const node = _Programming(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "framework";
  return node;
}

export function Angular(label?: string, options?: Record<string, unknown>) {
  const node = _Framework(label ?? "Angular", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = angularIcon;
  return node;
}

export function Backbone(label?: string, options?: Record<string, unknown>) {
  const node = _Framework(label ?? "Backbone", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = backboneIcon;
  return node;
}

export function Camel(label?: string, options?: Record<string, unknown>) {
  const node = _Framework(label ?? "Camel", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = camelIcon;
  return node;
}

export function Django(label?: string, options?: Record<string, unknown>) {
  const node = _Framework(label ?? "Django", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = djangoIcon;
  return node;
}

export function Dotnet(label?: string, options?: Record<string, unknown>) {
  const node = _Framework(label ?? "Dotnet", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = dotnetIcon;
  return node;
}

export function Ember(label?: string, options?: Record<string, unknown>) {
  const node = _Framework(label ?? "Ember", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = emberIcon;
  return node;
}

export function Fastapi(label?: string, options?: Record<string, unknown>) {
  const node = _Framework(label ?? "Fastapi", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = fastapiIcon;
  return node;
}

export function Flask(label?: string, options?: Record<string, unknown>) {
  const node = _Framework(label ?? "Flask", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = flaskIcon;
  return node;
}

export function Flutter(label?: string, options?: Record<string, unknown>) {
  const node = _Framework(label ?? "Flutter", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = flutterIcon;
  return node;
}

export function Graphql(label?: string, options?: Record<string, unknown>) {
  const node = _Framework(label ?? "Graphql", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = graphqlIcon;
  return node;
}

export function Hibernate(label?: string, options?: Record<string, unknown>) {
  const node = _Framework(label ?? "Hibernate", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = hibernateIcon;
  return node;
}

export function Jhipster(label?: string, options?: Record<string, unknown>) {
  const node = _Framework(label ?? "Jhipster", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = jhipsterIcon;
  return node;
}

export function Laravel(label?: string, options?: Record<string, unknown>) {
  const node = _Framework(label ?? "Laravel", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = laravelIcon;
  return node;
}

export function Micronaut(label?: string, options?: Record<string, unknown>) {
  const node = _Framework(label ?? "Micronaut", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = micronautIcon;
  return node;
}

export function Nextjs(label?: string, options?: Record<string, unknown>) {
  const node = _Framework(label ?? "Nextjs", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = nextjsIcon;
  return node;
}

export function Phoenix(label?: string, options?: Record<string, unknown>) {
  const node = _Framework(label ?? "Phoenix", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = phoenixIcon;
  return node;
}

export function Quarkus(label?: string, options?: Record<string, unknown>) {
  const node = _Framework(label ?? "Quarkus", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = quarkusIcon;
  return node;
}

export function Rails(label?: string, options?: Record<string, unknown>) {
  const node = _Framework(label ?? "Rails", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = railsIcon;
  return node;
}

export function React(label?: string, options?: Record<string, unknown>) {
  const node = _Framework(label ?? "React", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = reactIcon;
  return node;
}

export function Spring(label?: string, options?: Record<string, unknown>) {
  const node = _Framework(label ?? "Spring", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = springIcon;
  return node;
}

export function Sqlpage(label?: string, options?: Record<string, unknown>) {
  const node = _Framework(label ?? "Sqlpage", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = sqlpageIcon;
  return node;
}

export function Starlette(label?: string, options?: Record<string, unknown>) {
  const node = _Framework(label ?? "Starlette", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = starletteIcon;
  return node;
}

export function Svelte(label?: string, options?: Record<string, unknown>) {
  const node = _Framework(label ?? "Svelte", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = svelteIcon;
  return node;
}

export function Vercel(label?: string, options?: Record<string, unknown>) {
  const node = _Framework(label ?? "Vercel", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = vercelIcon;
  return node;
}

export function Vue(label?: string, options?: Record<string, unknown>) {
  const node = _Framework(label ?? "Vue", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = vueIcon;
  return node;
}

// Aliases
export const FastAPI = Fastapi;
export const GraphQL = Graphql;
export const DotNet = Dotnet;
export const NextJs = Nextjs;
