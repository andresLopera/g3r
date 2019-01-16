import { dataLinks } from "./dataLink.mock.data";
import { DataLinkEntity } from "../dataLink.entity";

const baseURL = 'https://api.github.com/';
const mockDataLink = dataLinks;

const fetchDataLinks = (): Promise<DataLinkEntity[]> => {
  return Promise.resolve(mockDataLink);
};

const fetchDataLinkAsync = (): Promise<DataLinkEntity[]> => {
  const dataLinkURL = `${baseURL}/datalinks`;

  return fetch(dataLinkURL)
    .then((response) => (response.json()))
    .then(mapToDataLinks);
};

const mapToDataLinks = (dataLink: any[]): DataLinkEntity[] => {
  return dataLink.map(mapToDataLink);
};

const mapToDataLink = (dataLink : DataLinkEntity): DataLinkEntity => {
  return {
    id: dataLink.id,
    name: dataLink.name,
    channels: dataLink.channels
  };
};


const fetchDataLinkById = (id: string): Promise<any> => {
  let dataLink = dataLinks.find((dataLink: DataLinkEntity) => {
      return dataLink.id == id;
  });
  return Promise.resolve(dataLink);
}

export const dataLinkAPI = {
  fetchDataLinks,
  fetchDataLinkAsync,
  fetchDataLinkById
};
