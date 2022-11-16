import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import { MdOutlineCloudUpload } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Info from "./Common/Info";

interface Props {
  defaultImage: any;
  changeImgFunc: any;
  title: string;
  info: string;
}

const UploadImage: React.FC<Props> = ({
  defaultImage,
  changeImgFunc,
  title,
  info
}) => {
  const [image, setImage] = useState<any>(null);
  const dispatch = useDispatch();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    axios
      .post(
        "https://thumbsnap.com/api/upload",
        { media: acceptedFiles[0], key: "000021c5ce7b184262e8de5d83c1b2e4" },
        {
          headers: {
            "content-type": "multipart/form-data",
          },
        }
      )
      .then(({ data }) => {
        console.log(data.data.media);
        setImage(data.data.media);
        dispatch(changeImgFunc(data.data.media));
      })
      .catch((err) => {
        console.log(err);
      });
    acceptedFiles.map((file) => {
      const reader = new FileReader();
      reader.onload = function (e) {};
      reader.readAsDataURL(file);
      return file;
    });
  }, [changeImgFunc, dispatch]);

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
      <div className="mt-7 mb-4 pl-1 pr-4 flex justify-between items-center ">
        <h4 className="font-secondary font-semibold ">Upload {title}</h4>
        <Info info={info} inWhichComponent={title} />
      </div>
      <div
        className={`border-2 border-dashed ${
          isDragReject ? "border-red-600" : "border-gray-500"
        } ${
          isDragAccept ? "border-green-500" : "border-gray-500"
        } rounded-xl   w-96 h-44 flex flex-col items-center justify-center gap-3 cursor-pointer hover:bg-gray-200/75 relative`}
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <div className="bg-gray-300 rounded-xl w-[6rem] h-[6rem] grid place-items-center">
          {image ? (
            <Image src={image} alt='image' className="h-12 w-12"  width='80%' height='80%' />
          ) : (
            <Image src={defaultImage}  alt='image' className="h-12 w-12"  width='80%' height='80%'/>
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
