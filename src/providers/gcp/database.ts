import { _Gcp } from "./index.js";
import bigtableIcon from "../../../resources/gcp/database/bigtable.png";
import datastoreIcon from "../../../resources/gcp/database/datastore.png";
import firestoreIcon from "../../../resources/gcp/database/firestore.png";
import memorystoreIcon from "../../../resources/gcp/database/memorystore.png";
import spannerIcon from "../../../resources/gcp/database/spanner.png";
import sqlIcon from "../../../resources/gcp/database/sql.png";

class _Database extends _Gcp {
  protected static override _type = "database";
}

export class Bigtable extends _Database {
  protected static override _iconDataUrl = bigtableIcon;
}

export class Datastore extends _Database {
  protected static override _iconDataUrl = datastoreIcon;
}

export class Firestore extends _Database {
  protected static override _iconDataUrl = firestoreIcon;
}

export class Memorystore extends _Database {
  protected static override _iconDataUrl = memorystoreIcon;
}

export class Spanner extends _Database {
  protected static override _iconDataUrl = spannerIcon;
}

export class SQL extends _Database {
  protected static override _iconDataUrl = sqlIcon;
}

// Aliases
export const BigTable = Bigtable;
