import { _Aws } from "./index.js";
import game_techIcon from "../../../resources/aws/game/game-tech.png";
import gameliftIcon from "../../../resources/aws/game/gamelift.png";

function _Game(label?: string, options?: Record<string, unknown>) {
  const node = _Aws(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "game";
  return node;
}

export function GameTech(label?: string, options?: Record<string, unknown>) {
  const node = _Game(label ?? "GameTech", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = game_techIcon;
  return node;
}

export function Gamelift(label?: string, options?: Record<string, unknown>) {
  const node = _Game(label ?? "Gamelift", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = gameliftIcon;
  return node;
}
