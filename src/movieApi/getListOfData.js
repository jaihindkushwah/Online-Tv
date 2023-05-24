import useFetchApi from "../customHooks/fetchApi";
// import { getUrl } from "./urls";

const ListData = (getUrl,page) => {
  // const [data,setData]=useState([]);

  const p1 = useFetchApi(getUrl(page*2-1));
  const p2 = useFetchApi(getUrl(page*2));

  return [...p1[0], ...p2[0]];
};
export default ListData;
