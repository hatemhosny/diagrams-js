import { _Programming } from "./index.js";
import actionIcon from "../../../resources/programming/flowchart/action.png";
import collateIcon from "../../../resources/programming/flowchart/collate.png";
import databaseIcon from "../../../resources/programming/flowchart/database.png";
import decisionIcon from "../../../resources/programming/flowchart/decision.png";
import delayIcon from "../../../resources/programming/flowchart/delay.png";
import displayIcon from "../../../resources/programming/flowchart/display.png";
import documentIcon from "../../../resources/programming/flowchart/document.png";
import input_outputIcon from "../../../resources/programming/flowchart/input-output.png";
import inspectionIcon from "../../../resources/programming/flowchart/inspection.png";
import internal_storageIcon from "../../../resources/programming/flowchart/internal-storage.png";
import loop_limitIcon from "../../../resources/programming/flowchart/loop-limit.png";
import manual_inputIcon from "../../../resources/programming/flowchart/manual-input.png";
import manual_loopIcon from "../../../resources/programming/flowchart/manual-loop.png";
import mergeIcon from "../../../resources/programming/flowchart/merge.png";
import multiple_documentsIcon from "../../../resources/programming/flowchart/multiple-documents.png";
import off_page_connector_leftIcon from "../../../resources/programming/flowchart/off-page-connector-left.png";
import off_page_connector_rightIcon from "../../../resources/programming/flowchart/off-page-connector-right.png";
import orIcon from "../../../resources/programming/flowchart/or.png";
import predefined_processIcon from "../../../resources/programming/flowchart/predefined-process.png";
import preparationIcon from "../../../resources/programming/flowchart/preparation.png";
import sortIcon from "../../../resources/programming/flowchart/sort.png";
import start_endIcon from "../../../resources/programming/flowchart/start-end.png";
import stored_dataIcon from "../../../resources/programming/flowchart/stored-data.png";
import summing_junctionIcon from "../../../resources/programming/flowchart/summing-junction.png";

function _Flowchart(label?: string, options?: Record<string, unknown>) {
  const node = _Programming(label, options);
  (node as unknown as Record<string, unknown>)._type = "flowchart";
  return node;
}

export function Action(label?: string, options?: Record<string, unknown>) {
  const node = _Flowchart(label ?? "Action", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = actionIcon;
  return node;
}

export function Collate(label?: string, options?: Record<string, unknown>) {
  const node = _Flowchart(label ?? "Collate", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = collateIcon;
  return node;
}

export function Database(label?: string, options?: Record<string, unknown>) {
  const node = _Flowchart(label ?? "Database", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = databaseIcon;
  return node;
}

export function Decision(label?: string, options?: Record<string, unknown>) {
  const node = _Flowchart(label ?? "Decision", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = decisionIcon;
  return node;
}

export function Delay(label?: string, options?: Record<string, unknown>) {
  const node = _Flowchart(label ?? "Delay", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = delayIcon;
  return node;
}

export function Display(label?: string, options?: Record<string, unknown>) {
  const node = _Flowchart(label ?? "Display", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = displayIcon;
  return node;
}

export function Document(label?: string, options?: Record<string, unknown>) {
  const node = _Flowchart(label ?? "Document", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = documentIcon;
  return node;
}

export function InputOutput(label?: string, options?: Record<string, unknown>) {
  const node = _Flowchart(label ?? "InputOutput", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = input_outputIcon;
  return node;
}

export function Inspection(label?: string, options?: Record<string, unknown>) {
  const node = _Flowchart(label ?? "Inspection", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = inspectionIcon;
  return node;
}

export function InternalStorage(label?: string, options?: Record<string, unknown>) {
  const node = _Flowchart(label ?? "InternalStorage", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = internal_storageIcon;
  return node;
}

export function LoopLimit(label?: string, options?: Record<string, unknown>) {
  const node = _Flowchart(label ?? "LoopLimit", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = loop_limitIcon;
  return node;
}

export function ManualInput(label?: string, options?: Record<string, unknown>) {
  const node = _Flowchart(label ?? "ManualInput", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = manual_inputIcon;
  return node;
}

export function ManualLoop(label?: string, options?: Record<string, unknown>) {
  const node = _Flowchart(label ?? "ManualLoop", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = manual_loopIcon;
  return node;
}

export function Merge(label?: string, options?: Record<string, unknown>) {
  const node = _Flowchart(label ?? "Merge", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = mergeIcon;
  return node;
}

export function MultipleDocuments(label?: string, options?: Record<string, unknown>) {
  const node = _Flowchart(label ?? "MultipleDocuments", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = multiple_documentsIcon;
  return node;
}

export function OffPageConnectorLeft(label?: string, options?: Record<string, unknown>) {
  const node = _Flowchart(label ?? "OffPageConnectorLeft", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = off_page_connector_leftIcon;
  return node;
}

export function OffPageConnectorRight(label?: string, options?: Record<string, unknown>) {
  const node = _Flowchart(label ?? "OffPageConnectorRight", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = off_page_connector_rightIcon;
  return node;
}

export function Or(label?: string, options?: Record<string, unknown>) {
  const node = _Flowchart(label ?? "Or", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = orIcon;
  return node;
}

export function PredefinedProcess(label?: string, options?: Record<string, unknown>) {
  const node = _Flowchart(label ?? "PredefinedProcess", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = predefined_processIcon;
  return node;
}

export function Preparation(label?: string, options?: Record<string, unknown>) {
  const node = _Flowchart(label ?? "Preparation", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = preparationIcon;
  return node;
}

export function Sort(label?: string, options?: Record<string, unknown>) {
  const node = _Flowchart(label ?? "Sort", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = sortIcon;
  return node;
}

export function StartEnd(label?: string, options?: Record<string, unknown>) {
  const node = _Flowchart(label ?? "StartEnd", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = start_endIcon;
  return node;
}

export function StoredData(label?: string, options?: Record<string, unknown>) {
  const node = _Flowchart(label ?? "StoredData", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = stored_dataIcon;
  return node;
}

export function SummingJunction(label?: string, options?: Record<string, unknown>) {
  const node = _Flowchart(label ?? "SummingJunction", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = summing_junctionIcon;
  return node;
}
