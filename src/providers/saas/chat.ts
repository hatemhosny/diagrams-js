import { _Saas } from "./index.js";
import discordIcon from "../../../resources/saas/chat/discord.png";
import lineIcon from "../../../resources/saas/chat/line.png";
import mattermostIcon from "../../../resources/saas/chat/mattermost.png";
import messengerIcon from "../../../resources/saas/chat/messenger.png";
import rocket_chatIcon from "../../../resources/saas/chat/rocket-chat.png";
import slackIcon from "../../../resources/saas/chat/slack.png";
import teamsIcon from "../../../resources/saas/chat/teams.png";
import telegramIcon from "../../../resources/saas/chat/telegram.png";

function _Chat(label?: string, options?: Record<string, unknown>) {
  const node = _Saas(label, options);
  (node as unknown as Record<string, unknown>)._type = "chat";
  return node;
}

export function Discord(label?: string, options?: Record<string, unknown>) {
  const node = _Chat(label ?? "Discord", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = discordIcon;
  return node;
}

export function Line(label?: string, options?: Record<string, unknown>) {
  const node = _Chat(label ?? "Line", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = lineIcon;
  return node;
}

export function Mattermost(label?: string, options?: Record<string, unknown>) {
  const node = _Chat(label ?? "Mattermost", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = mattermostIcon;
  return node;
}

export function Messenger(label?: string, options?: Record<string, unknown>) {
  const node = _Chat(label ?? "Messenger", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = messengerIcon;
  return node;
}

export function RocketChat(label?: string, options?: Record<string, unknown>) {
  const node = _Chat(label ?? "RocketChat", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = rocket_chatIcon;
  return node;
}

export function Slack(label?: string, options?: Record<string, unknown>) {
  const node = _Chat(label ?? "Slack", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = slackIcon;
  return node;
}

export function Teams(label?: string, options?: Record<string, unknown>) {
  const node = _Chat(label ?? "Teams", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = teamsIcon;
  return node;
}

export function Telegram(label?: string, options?: Record<string, unknown>) {
  const node = _Chat(label ?? "Telegram", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = telegramIcon;
  return node;
}
