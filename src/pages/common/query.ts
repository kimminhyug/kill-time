import { useQuery } from "@tanstack/react-query";
import axios from "axios";
interface IGetListProps<T> {
  url: string;
  queryId: string[];
  //response 객체.T
  callback?: (response: any) => T;
  queryProps: any;
}

export const getList = <T>({
  url,
  queryId,
  callback,
  queryProps = {},
}: IGetListProps<T>) => {
  return useQuery<T>(
    queryId,
    async () => {
      let response = 0;
      return await axios.get(url);
    },
    { ...queryProps }
  );
};

export const getListTest = <T>({
  url,
  queryId,
  callback,
  queryProps = {},
}: IGetListProps<T>) => {
  return useQuery<T>(
    queryId,
    async () => {
      let response = 0;
      return await new Promise((resolve) =>
        setTimeout(() => {
          response = Math.floor(Math.random() * 100);
          resolve(response as T);
        }, 1000)
      );
    },
    { ...queryProps }
  );
};
