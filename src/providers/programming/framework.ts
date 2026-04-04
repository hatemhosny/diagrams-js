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

class _Framework extends _Programming {
  protected static override _type = "framework";
}

export class Angular extends _Framework {
  protected static _iconDataUrl = angularIcon;
}

export class Backbone extends _Framework {
  protected static _iconDataUrl = backboneIcon;
}

export class Camel extends _Framework {
  protected static _iconDataUrl = camelIcon;
}

export class Django extends _Framework {
  protected static _iconDataUrl = djangoIcon;
}

export class Dotnet extends _Framework {
  protected static _iconDataUrl = dotnetIcon;
}

export class Ember extends _Framework {
  protected static _iconDataUrl = emberIcon;
}

export class Fastapi extends _Framework {
  protected static _iconDataUrl = fastapiIcon;
}

export class Flask extends _Framework {
  protected static _iconDataUrl = flaskIcon;
}

export class Flutter extends _Framework {
  protected static _iconDataUrl = flutterIcon;
}

export class Graphql extends _Framework {
  protected static _iconDataUrl = graphqlIcon;
}

export class Hibernate extends _Framework {
  protected static _iconDataUrl = hibernateIcon;
}

export class Jhipster extends _Framework {
  protected static _iconDataUrl = jhipsterIcon;
}

export class Laravel extends _Framework {
  protected static _iconDataUrl = laravelIcon;
}

export class Micronaut extends _Framework {
  protected static _iconDataUrl = micronautIcon;
}

export class Nextjs extends _Framework {
  protected static _iconDataUrl = nextjsIcon;
}

export class Phoenix extends _Framework {
  protected static _iconDataUrl = phoenixIcon;
}

export class Quarkus extends _Framework {
  protected static _iconDataUrl = quarkusIcon;
}

export class Rails extends _Framework {
  protected static _iconDataUrl = railsIcon;
}

export class React extends _Framework {
  protected static _iconDataUrl = reactIcon;
}

export class Spring extends _Framework {
  protected static _iconDataUrl = springIcon;
}

export class Sqlpage extends _Framework {
  protected static _iconDataUrl = sqlpageIcon;
}

export class Starlette extends _Framework {
  protected static _iconDataUrl = starletteIcon;
}

export class Svelte extends _Framework {
  protected static _iconDataUrl = svelteIcon;
}

export class Vercel extends _Framework {
  protected static _iconDataUrl = vercelIcon;
}

export class Vue extends _Framework {
  protected static _iconDataUrl = vueIcon;
}

// Aliases
export const FastAPI = Fastapi;
export const GraphQL = Graphql;
export const DotNet = Dotnet;
export const NextJs = Nextjs;
