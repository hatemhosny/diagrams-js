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

function _Media(label?: string, options?: Record<string, unknown>) {
  const node = _Aws(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "media";
  return node;
}

export function ElasticTranscoder(label?: string, options?: Record<string, unknown>) {
  const node = _Media(label ?? "ElasticTranscoder", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = elastic_transcoderIcon;
  return node;
}

export function ElementalConductor(label?: string, options?: Record<string, unknown>) {
  const node = _Media(label ?? "ElementalConductor", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = elemental_conductorIcon;
  return node;
}

export function ElementalDelta(label?: string, options?: Record<string, unknown>) {
  const node = _Media(label ?? "ElementalDelta", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = elemental_deltaIcon;
  return node;
}

export function ElementalLive(label?: string, options?: Record<string, unknown>) {
  const node = _Media(label ?? "ElementalLive", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = elemental_liveIcon;
  return node;
}

export function ElementalMediaconnect(label?: string, options?: Record<string, unknown>) {
  const node = _Media(label ?? "ElementalMediaconnect", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = elemental_mediaconnectIcon;
  return node;
}

export function ElementalMediaconvert(label?: string, options?: Record<string, unknown>) {
  const node = _Media(label ?? "ElementalMediaconvert", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = elemental_mediaconvertIcon;
  return node;
}

export function ElementalMedialive(label?: string, options?: Record<string, unknown>) {
  const node = _Media(label ?? "ElementalMedialive", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = elemental_medialiveIcon;
  return node;
}

export function ElementalMediapackage(label?: string, options?: Record<string, unknown>) {
  const node = _Media(label ?? "ElementalMediapackage", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = elemental_mediapackageIcon;
  return node;
}

export function ElementalMediastore(label?: string, options?: Record<string, unknown>) {
  const node = _Media(label ?? "ElementalMediastore", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = elemental_mediastoreIcon;
  return node;
}

export function ElementalMediatailor(label?: string, options?: Record<string, unknown>) {
  const node = _Media(label ?? "ElementalMediatailor", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = elemental_mediatailorIcon;
  return node;
}

export function ElementalServer(label?: string, options?: Record<string, unknown>) {
  const node = _Media(label ?? "ElementalServer", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = elemental_serverIcon;
  return node;
}

export function KinesisVideoStreams(label?: string, options?: Record<string, unknown>) {
  const node = _Media(label ?? "KinesisVideoStreams", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = kinesis_video_streamsIcon;
  return node;
}

export function MediaServices(label?: string, options?: Record<string, unknown>) {
  const node = _Media(label ?? "MediaServices", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = media_servicesIcon;
  return node;
}
