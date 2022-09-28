import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import { MdOutlineCloudUpload } from "react-icons/md";
import { useDispatch } from "react-redux";
interface Props {
  defaultImage: any;
  changeImgFunc: any;
  title:string;
}

const UploadImage: React.FC<Props> = ({ defaultImage, changeImgFunc, title }) => {
  const [image, setImage] = useState<any>(null);
  const dispatch = useDispatch();

  const onDrop = useCallback((acceptedFiles: any[]) => {
    acceptedFiles.map((file) => {
      const reader = new FileReader();
      reader.onload = function (e) {
        setImage(e.target?.result);
        dispatch(changeImgFunc(e.target?.result));
      };
      reader.readAsDataURL(file);
      console.log(file);
      console.log(image);
      return file;
    });
  }, []);

  const { getRootProps, getInputProps, isDragAccept, isDragReject } =
    useDropzone({
      onDrop,
      multiple: false,
      accept: {
        "image/png": [".png", ".jpeg", ".jpg", ".svg", ".eps", ".psd"],
      },
    });

  return (
    <section className="font-secondary">
      <h4 className="mt-7 mb-3">Upload {title}</h4>
      <div
        className={`border-2 border-dashed ${
          isDragReject ? "border-red-600" : "border-gray-500"
        } ${
          isDragAccept ? "border-green-500" : "border-gray-500"
        } rounded-xl   w-96 h-44 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-gray-200/75 relative`}
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <div className="bg-gray-300 rounded-xl w-[6rem] h-[6rem] grid place-items-center">
          {image ? (
            <img src={image} className="h-16 w-16" />
          ) : (
            <Image src={defaultImage} className="h-12 w-12" />
          )}
        </div>
        <div className="text-xl text-sm flex items-center ">
          <MdOutlineCloudUpload className="text-xl mr-2" />
          Drop your image here or
          <span className="font-semibold underline decoration-solid text-prime-violet ml-1">
            upload
          </span>
        </div>
        {isDragReject && (
          <p className="text-xs absolute bottom-1 text-red-600 font-semibold">
            Try again with an image with the appropriate extension{" "}
          </p>
        )}
      </div>
    </section>
  );
};

export default UploadImage;
