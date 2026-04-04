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

class _Flowchart extends _Programming {
  protected static override _type = "flowchart";
}

export class Action extends _Flowchart {
  protected static override _iconDataUrl = actionIcon;
}

export class Collate extends _Flowchart {
  protected static override _iconDataUrl = collateIcon;
}

export class Database extends _Flowchart {
  protected static override _iconDataUrl = databaseIcon;
}

export class Decision extends _Flowchart {
  protected static override _iconDataUrl = decisionIcon;
}

export class Delay extends _Flowchart {
  protected static override _iconDataUrl = delayIcon;
}

export class Display extends _Flowchart {
  protected static override _iconDataUrl = displayIcon;
}

export class Document extends _Flowchart {
  protected static override _iconDataUrl = documentIcon;
}

export class InputOutput extends _Flowchart {
  protected static override _iconDataUrl = input_outputIcon;
}

export class Inspection extends _Flowchart {
  protected static override _iconDataUrl = inspectionIcon;
}

export class InternalStorage extends _Flowchart {
  protected static override _iconDataUrl = internal_storageIcon;
}

export class LoopLimit extends _Flowchart {
  protected static override _iconDataUrl = loop_limitIcon;
}

export class ManualInput extends _Flowchart {
  protected static override _iconDataUrl = manual_inputIcon;
}

export class ManualLoop extends _Flowchart {
  protected static override _iconDataUrl = manual_loopIcon;
}

export class Merge extends _Flowchart {
  protected static override _iconDataUrl = mergeIcon;
}

export class MultipleDocuments extends _Flowchart {
  protected static override _iconDataUrl = multiple_documentsIcon;
}

export class OffPageConnectorLeft extends _Flowchart {
  protected static override _iconDataUrl = off_page_connector_leftIcon;
}

export class OffPageConnectorRight extends _Flowchart {
  protected static override _iconDataUrl = off_page_connector_rightIcon;
}

export class Or extends _Flowchart {
  protected static override _iconDataUrl = orIcon;
}

export class PredefinedProcess extends _Flowchart {
  protected static override _iconDataUrl = predefined_processIcon;
}

export class Preparation extends _Flowchart {
  protected static override _iconDataUrl = preparationIcon;
}

export class Sort extends _Flowchart {
  protected static override _iconDataUrl = sortIcon;
}

export class StartEnd extends _Flowchart {
  protected static override _iconDataUrl = start_endIcon;
}

export class StoredData extends _Flowchart {
  protected static override _iconDataUrl = stored_dataIcon;
}

export class SummingJunction extends _Flowchart {
  protected static override _iconDataUrl = summing_junctionIcon;
}
