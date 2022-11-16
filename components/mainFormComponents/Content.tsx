import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setContent} from "../../slices/popUpSlice";
import type { RootState } from "../../store";
import Info from "./Common/Info";

const Content = () => {
  const content = useSelector((state: RootState) => state.popUp.content);
  const dispatch = useDispatch();
  const handleChange = (e:React.FormEvent<HTMLInputElement>,item:[string, string], index:number) => {
    const target = e.target as HTMLInputElement
    let newContent: any = [ ...content ]
    newContent[index] = [item[0], target.value]
    dispatch(setContent(newContent))
  }
  const info =
  "You can change every text content of popup. All changes are visible simultaneously";

  return (
    <section className="font-secondary">
      <div className="my-2 mb-4 pl-1 pr-4 flex justify-between items-center ">
        <h4 className="font-secondary font-semibold ">Edit Text Content</h4>
        <Info info={info} inWhichComponent="Content" />
      </div>
      <div className="flex flex-col gap-2">
      {content.map((item, index)=>(
        <input type="text" key={index} className="w-96 h-9 pl-2 text-sm rounded-lg border border-gray-500 focus:outline-prime-violet" value={item[1]} onChange={(e)=>handleChange(e, item, index)}/>
      ))}
      </div>
    </section>
  );
};

export default Content;
