import { _Saas } from "./index.js";
import discordIcon from "../../../resources/saas/chat/discord.png";
import lineIcon from "../../../resources/saas/chat/line.png";
import mattermostIcon from "../../../resources/saas/chat/mattermost.png";
import messengerIcon from "../../../resources/saas/chat/messenger.png";
import rocket_chatIcon from "../../../resources/saas/chat/rocket-chat.png";
import slackIcon from "../../../resources/saas/chat/slack.png";
import teamsIcon from "../../../resources/saas/chat/teams.png";
import telegramIcon from "../../../resources/saas/chat/telegram.png";

class _Chat extends _Saas {
  protected static override _type = "chat";
}

export class Discord extends _Chat {
  protected static override _iconDataUrl = discordIcon;
}

export class Line extends _Chat {
  protected static override _iconDataUrl = lineIcon;
}

export class Mattermost extends _Chat {
  protected static override _iconDataUrl = mattermostIcon;
}

export class Messenger extends _Chat {
  protected static override _iconDataUrl = messengerIcon;
}

export class RocketChat extends _Chat {
  protected static override _iconDataUrl = rocket_chatIcon;
}

export class Slack extends _Chat {
  protected static override _iconDataUrl = slackIcon;
}

export class Teams extends _Chat {
  protected static override _iconDataUrl = teamsIcon;
}

export class Telegram extends _Chat {
  protected static override _iconDataUrl = telegramIcon;
}
