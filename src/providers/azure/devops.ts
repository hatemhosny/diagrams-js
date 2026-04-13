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

function _Devops(label?: string, options?: Record<string, unknown>) {
  const node = _Azure(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "devops";
  return node;
}

export function APIConnections(label?: string, options?: Record<string, unknown>) {
  const node = _Devops(label ?? "APIConnections", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "APIConnections";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = api_connectionsIcon;
  return node;
}

export function APIManagementServices(label?: string, options?: Record<string, unknown>) {
  const node = _Devops(label ?? "APIManagementServices", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "APIManagementServices";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = api_management_servicesIcon;
  return node;
}

export function ApplicationInsights(label?: string, options?: Record<string, unknown>) {
  const node = _Devops(label ?? "ApplicationInsights", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "ApplicationInsights";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = application_insightsIcon;
  return node;
}

export function Artifacts(label?: string, options?: Record<string, unknown>) {
  const node = _Devops(label ?? "Artifacts", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Artifacts";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = artifactsIcon;
  return node;
}

export function AzureDevops(label?: string, options?: Record<string, unknown>) {
  const node = _Devops(label ?? "AzureDevops", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "AzureDevops";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = azure_devopsIcon;
  return node;
}

export function Boards(label?: string, options?: Record<string, unknown>) {
  const node = _Devops(label ?? "Boards", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Boards";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = boardsIcon;
  return node;
}

export function ChangeAnalysis(label?: string, options?: Record<string, unknown>) {
  const node = _Devops(label ?? "ChangeAnalysis", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "ChangeAnalysis";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = change_analysisIcon;
  return node;
}

export function Cloudtest(label?: string, options?: Record<string, unknown>) {
  const node = _Devops(label ?? "Cloudtest", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Cloudtest";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = cloudtestIcon;
  return node;
}

export function CodeOptimization(label?: string, options?: Record<string, unknown>) {
  const node = _Devops(label ?? "CodeOptimization", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "CodeOptimization";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = code_optimizationIcon;
  return node;
}

export function DevopsStarter(label?: string, options?: Record<string, unknown>) {
  const node = _Devops(label ?? "DevopsStarter", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "DevopsStarter";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = devops_starterIcon;
  return node;
}

export function Devops(label?: string, options?: Record<string, unknown>) {
  const node = _Devops(label ?? "Devops", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Devops";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = devopsIcon;
  return node;
}

export function DevtestLabs(label?: string, options?: Record<string, unknown>) {
  const node = _Devops(label ?? "DevtestLabs", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "DevtestLabs";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = devtest_labsIcon;
  return node;
}

export function LabAccounts(label?: string, options?: Record<string, unknown>) {
  const node = _Devops(label ?? "LabAccounts", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "LabAccounts";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = lab_accountsIcon;
  return node;
}

export function LabServices(label?: string, options?: Record<string, unknown>) {
  const node = _Devops(label ?? "LabServices", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "LabServices";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = lab_servicesIcon;
  return node;
}

export function LoadTesting(label?: string, options?: Record<string, unknown>) {
  const node = _Devops(label ?? "LoadTesting", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "LoadTesting";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = load_testingIcon;
  return node;
}

export function Pipelines(label?: string, options?: Record<string, unknown>) {
  const node = _Devops(label ?? "Pipelines", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Pipelines";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = pipelinesIcon;
  return node;
}

export function Repos(label?: string, options?: Record<string, unknown>) {
  const node = _Devops(label ?? "Repos", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Repos";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = reposIcon;
  return node;
}

export function TestPlans(label?: string, options?: Record<string, unknown>) {
  const node = _Devops(label ?? "TestPlans", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "TestPlans";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = test_plansIcon;
  return node;
}
