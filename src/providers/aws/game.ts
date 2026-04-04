import { _Aws } from "./index.js";
import game_techIcon from "../../../resources/aws/game/game-tech.png";
import gameliftIcon from "../../../resources/aws/game/gamelift.png";

class _Game extends _Aws {
  protected static override _type = "game";
}

export class GameTech extends _Game {
  protected static _iconDataUrl = game_techIcon;
}

export class Gamelift extends _Game {
  protected static _iconDataUrl = gameliftIcon;
}
