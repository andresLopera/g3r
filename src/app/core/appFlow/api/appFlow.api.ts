import { appFlows } from "./appFlow.mock.data";
import { AppFlowEntity } from "../appFlow.entity";


const baseURL = 'https://api.github.com/';
const mockAppFlows = appFlows;

const fetchAppFlows = (): Promise<AppFlowEntity[]> => {
  return Promise.resolve(mockAppFlows);
};

const fetchAppFlowsAsync = (): Promise<AppFlowEntity[]> => {
  const appFlowURL = `${baseURL}/appFlows`;

  return fetch(appFlowURL)
    .then((response) => (response.json()))
    .then(mapToAppFlows);
};

const mapToAppFlows = (appFlow: any[]): AppFlowEntity[] => {
  return appFlow.map(mapToAppFlow);
};

const mapToAppFlow = (appFlow : AppFlowEntity): AppFlowEntity => {
  return {
    id: appFlow.id,
    name: appFlow.name
  };
};


const fetchAppFlowById = (id: string): Promise<any> => {
  let appFlow = appFlows.find((appFlow: AppFlowEntity) => {
      return appFlow.id == id;
  });
  return Promise.resolve(appFlow);
}

export const appFlowAPI = {
  fetchAppFlows,
  fetchAppFlowsAsync,
  fetchAppFlowById
};
