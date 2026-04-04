import { _Aws } from "./index.js";
import elastic_transcoderIcon from "../../../resources/aws/media/elastic-transcoder.png";
import elemental_conductorIcon from "../../../resources/aws/media/elemental-conductor.png";
import elemental_deltaIcon from "../../../resources/aws/media/elemental-delta.png";
import elemental_liveIcon from "../../../resources/aws/media/elemental-live.png";
import elemental_mediaconnectIcon from "../../../resources/aws/media/elemental-mediaconnect.png";
import elemental_mediaconvertIcon from "../../../resources/aws/media/elemental-mediaconvert.png";
import elemental_medialiveIcon from "../../../resources/aws/media/elemental-medialive.png";
import elemental_mediapackageIcon from "../../../resources/aws/media/elemental-mediapackage.png";
import elemental_mediastoreIcon from "../../../resources/aws/media/elemental-mediastore.png";
import elemental_mediatailorIcon from "../../../resources/aws/media/elemental-mediatailor.png";
import elemental_serverIcon from "../../../resources/aws/media/elemental-server.png";
import kinesis_video_streamsIcon from "../../../resources/aws/media/kinesis-video-streams.png";
import media_servicesIcon from "../../../resources/aws/media/media-services.png";

class _Media extends _Aws {
  protected static override _type = "media";
}

export class ElasticTranscoder extends _Media {
  protected static override _iconDataUrl = elastic_transcoderIcon;
}

export class ElementalConductor extends _Media {
  protected static override _iconDataUrl = elemental_conductorIcon;
}

export class ElementalDelta extends _Media {
  protected static override _iconDataUrl = elemental_deltaIcon;
}

export class ElementalLive extends _Media {
  protected static override _iconDataUrl = elemental_liveIcon;
}

export class ElementalMediaconnect extends _Media {
  protected static override _iconDataUrl = elemental_mediaconnectIcon;
}

export class ElementalMediaconvert extends _Media {
  protected static override _iconDataUrl = elemental_mediaconvertIcon;
}

export class ElementalMedialive extends _Media {
  protected static override _iconDataUrl = elemental_medialiveIcon;
}

export class ElementalMediapackage extends _Media {
  protected static override _iconDataUrl = elemental_mediapackageIcon;
}

export class ElementalMediastore extends _Media {
  protected static override _iconDataUrl = elemental_mediastoreIcon;
}

export class ElementalMediatailor extends _Media {
  protected static override _iconDataUrl = elemental_mediatailorIcon;
}

export class ElementalServer extends _Media {
  protected static override _iconDataUrl = elemental_serverIcon;
}

export class KinesisVideoStreams extends _Media {
  protected static override _iconDataUrl = kinesis_video_streamsIcon;
}

export class MediaServices extends _Media {
  protected static override _iconDataUrl = media_servicesIcon;
}
