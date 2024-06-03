"use client";
import CopyToClipboardBtn from "./copyToClipboardBtn";
export  default  function QsShare() {
  // const [searchText, setSearchText] = useDebouncedState("", 1000);

  // const { isLoading, isError, data, error } = useQuery({ queryKey: ["qsData", searchText], queryFn: async () => await qsService.searchQs(searchText), enabled: searchText.length > 0, retry: false });

  // if (isError) {
  //   console.log(error)
  // }

  return (
    <>
      Hello World
    <CopyToClipboardBtn qsUrl="https://vaizle.com" />
    </>

  );
}
import {toast} from "react-hot-toast";
