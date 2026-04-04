import { _Azure } from "./index.js";
import api_connectionsIcon from "../../../resources/azure/devops/api-connections.png";
import api_management_servicesIcon from "../../../resources/azure/devops/api-management-services.png";
import application_insightsIcon from "../../../resources/azure/devops/application-insights.png";
import artifactsIcon from "../../../resources/azure/devops/artifacts.png";
import azure_devopsIcon from "../../../resources/azure/devops/azure-devops.png";
import boardsIcon from "../../../resources/azure/devops/boards.png";
import change_analysisIcon from "../../../resources/azure/devops/change-analysis.png";
import cloudtestIcon from "../../../resources/azure/devops/cloudtest.png";
import code_optimizationIcon from "../../../resources/azure/devops/code-optimization.png";
import devops_starterIcon from "../../../resources/azure/devops/devops-starter.png";
import devopsIcon from "../../../resources/azure/devops/devops.png";
import devtest_labsIcon from "../../../resources/azure/devops/devtest-labs.png";
import lab_accountsIcon from "../../../resources/azure/devops/lab-accounts.png";
import lab_servicesIcon from "../../../resources/azure/devops/lab-services.png";
import load_testingIcon from "../../../resources/azure/devops/load-testing.png";
import pipelinesIcon from "../../../resources/azure/devops/pipelines.png";
import reposIcon from "../../../resources/azure/devops/repos.png";
import test_plansIcon from "../../../resources/azure/devops/test-plans.png";

class _Devops extends _Azure {
  protected static override _type = "devops";
}

export class APIConnections extends _Devops {
  protected static override _iconDataUrl = api_connectionsIcon;
}

export class APIManagementServices extends _Devops {
  protected static override _iconDataUrl = api_management_servicesIcon;
}

export class ApplicationInsights extends _Devops {
  protected static override _iconDataUrl = application_insightsIcon;
}

export class Artifacts extends _Devops {
  protected static override _iconDataUrl = artifactsIcon;
}

export class AzureDevops extends _Devops {
  protected static override _iconDataUrl = azure_devopsIcon;
}

export class Boards extends _Devops {
  protected static override _iconDataUrl = boardsIcon;
}

export class ChangeAnalysis extends _Devops {
  protected static override _iconDataUrl = change_analysisIcon;
}

export class Cloudtest extends _Devops {
  protected static override _iconDataUrl = cloudtestIcon;
}

export class CodeOptimization extends _Devops {
  protected static override _iconDataUrl = code_optimizationIcon;
}

export class DevopsStarter extends _Devops {
  protected static override _iconDataUrl = devops_starterIcon;
}

export class Devops extends _Devops {
  protected static override _iconDataUrl = devopsIcon;
}

export class DevtestLabs extends _Devops {
  protected static override _iconDataUrl = devtest_labsIcon;
}

export class LabAccounts extends _Devops {
  protected static override _iconDataUrl = lab_accountsIcon;
}

export class LabServices extends _Devops {
  protected static override _iconDataUrl = lab_servicesIcon;
}

export class LoadTesting extends _Devops {
  protected static override _iconDataUrl = load_testingIcon;
}

export class Pipelines extends _Devops {
  protected static override _iconDataUrl = pipelinesIcon;
}

export class Repos extends _Devops {
  protected static override _iconDataUrl = reposIcon;
}

export class TestPlans extends _Devops {
  protected static override _iconDataUrl = test_plansIcon;
}
