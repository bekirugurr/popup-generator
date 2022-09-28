import React, { FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setContent} from "../../slices/popUpSlice";
import type { RootState } from "../../store";

const Content = () => {
  const content = useSelector((state: RootState) => state.popUp.content);
  const dispatch = useDispatch();
  const handleChange = (e:React.FormEvent<HTMLInputElement>, text:string, index:number) => {
    const target = e.target as HTMLInputElement
    let newContent: string[] = [...content]
    newContent[index] = target.value
    dispatch(setContent(newContent))
  }

  return (
    <section className="font-secondary">
      <h4 className="my-2 pl-1">Edit Your Content</h4>
      <div className="flex flex-col gap-2">
      {content.map((text, index)=>(
        <input type="text" key={index} className="w-96 h-9 pl-2 text-sm rounded-lg border border-gray-500 focus:outline-prime-violet" value={text} onChange={(e)=>handleChange(e,text,index)}/>
      ))}
      </div>
    </section>
  );
};

export default Content;
