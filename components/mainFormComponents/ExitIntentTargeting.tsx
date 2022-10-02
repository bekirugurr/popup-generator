import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setContent} from "../../slices/popUpSlice";
import type { RootState } from "../../store";

const Content = () => {
  const content = useSelector((state: RootState) => state.popUp.content);
  const dispatch = useDispatch();
  const handleChange = (e:React.FormEvent<HTMLInputElement>,item:[string, string], index:number) => {
    const target = e.target as HTMLInputElement
    let newContent: any = [ ...content ]
    newContent[index] = [item[0], target.value]
    dispatch(setContent(newContent))
  }

  return (
    <section className="font-secondary">
      <h4 className="my-2 pl-1">Edit Your Content</h4>
      <div className="flex flex-col gap-2">
      {content.map((item, index)=>(
        <input type="text" key={index} className="w-96 h-9 pl-2 text-sm rounded-lg border border-gray-500 focus:outline-prime-violet" value={item[1]} onChange={(e)=>handleChange(e, item, index)}/>
      ))}
      </div>
    </section>
  );
};

export default Content;
